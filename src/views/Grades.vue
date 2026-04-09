<template>
  <div class="grades-page">
    <n-card :bordered="false">
      <template #header>
        <n-space justify="space-between" align="center">
          <span>成绩管理</span>
          <n-button type="primary" @click="showCreateExam = true">
            <template #icon>
              <n-icon>
                <AddOutline />
              </n-icon>
            </template>
            创建考试
          </n-button>
        </n-space>
      </template>

      <!-- 考试列表 -->
      <n-empty v-if="exams.length === 0" description="暂无考试">
        <template #extra>
          <n-button size="small" @click="showCreateExam = true">立即创建考试</n-button>
        </template>
      </n-empty>
      <n-data-table v-else :columns="examColumns" :data="exams" :pagination="pagination"
        :row-key="(row: any) => row.id" />
    </n-card>

    <!-- 创建考试模态框 -->
    <n-modal v-model:show="showCreateExam" preset="dialog" title="创建考试" style="max-width: 700px">
      <n-form :model="examForm" label-placement="left" label-width="100">
        <n-form-item label="考试名称">
          <n-input v-model:value="examForm.name" placeholder="如：4月月考" />
        </n-form-item>
        <n-form-item label="日期">
          <n-date-picker v-model:value="examForm.date" type="date" />
        </n-form-item>
        <n-form-item label="满分值">
          <n-input-number v-model:value="examForm.maxScore" :min="1" />
        </n-form-item>
        <n-form-item label="考试类型">
          <n-select v-model:value="examForm.typeId" :options="examTypeOptions" />
        </n-form-item>

        <n-divider>知识点配分</n-divider>
        <n-form-item label="知识点">
          <n-dynamic-input v-model:value="examForm.knowledgePointScores" :on-create="onCreateKnowledgePoint">
            <template #default="{ value }">
              <n-space :wrap="true" :size="12">
                <n-select v-model:value="value.knowledgePointId" :options="knowledgePointOptions"
                  placeholder="选择知识点" style="width: 250px" />
                <n-input-number v-model:value="value.pointTotal" :min="1" placeholder="配分" style="width: 120px" />
              </n-space>
            </template>
          </n-dynamic-input>
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="showCreateExam = false">取消</n-button>
          <n-button type="primary" @click="createExam">创建</n-button>
        </n-space>
      </template>
    </n-modal>

    <!-- 成绩录入模态框 -->
    <n-modal v-model:show="showGradeInput" preset="dialog" :title="`录入成绩 - ${currentExam?.name}`"
      style="max-width: 1000px">
      <n-space vertical>
        <n-alert type="info" :bordered="false">
          提示：Tab 切换下一行，Space 勾选缺考，Enter 暂存
        </n-alert>

        <div class="grade-input-table">
          <!-- 表头 -->
          <div class="grade-header">
            <div class="col-name">姓名</div>
            <div class="col-score">分数（滑动条/输入框联动）</div>
            <div class="col-absent">缺考</div>
            <div class="col-status">状态</div>
          </div>

          <!-- 学生行 -->
          <div v-for="(record, index) in gradeRecords" :key="record.studentId" class="grade-row"
            :class="{
              'modified': isModified(record),
              'absent': record.isAbsent,
              'focused': focusedRowIndex === index
            }" :ref="el => setRowRef(el as HTMLElement | null, index)">
            <div class="col-name">{{ record.studentName }}</div>
            <div class="col-score">
              <n-slider v-if="!record.isAbsent" v-model:value="record.score" :min="0" :max="maxScore" :step="1"
                @update:value="onScoreChange(record)" @keydown.tab.prevent="focusNextRow(index)" />
              <span v-else class="absent-text">缺考</span>
            </div>
            <div class="col-absent">
              <n-checkbox v-model:checked="record.isAbsent" @update:checked="onAbsentChange(record)"
                @keydown.space.prevent="onAbsentChange(record)" />
            </div>
            <div class="col-status">
              <span v-if="record.isAbsent" class="status-absent">缺考</span>
              <span v-else-if="record.score !== undefined && record.score !== null" class="status-entered">已录入</span>
              <span v-else class="status-pending">未录入</span>
            </div>
          </div>
        </div>

        <n-space justify="end">
          <n-button @click="saveDraft" :loading="saving" :disabled="gradeRecords.length === 0">
            暂存草稿
          </n-button>
          <n-button type="primary" @click="confirmSubmit" :disabled="!canSubmit">
            最终提交
          </n-button>
        </n-space>
      </n-space>
    </n-modal>

    <!-- 提交确认对话框 -->
    <n-modal v-model:show="showSubmitConfirm" preset="dialog" type="warning" title="确认提交"
      content="提交后成绩将不可直接修改，7天后修改需填写原因。确定提交吗？" positive-text="确认提交" negative-text="取消"
      @positive-click="submitGrades" @negative-click="showSubmitConfirm = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, h, nextTick } from 'vue'
import { useMessage } from 'naive-ui'
import { NButton, NSpace, NSlider, NCheckbox, NIcon, NInputNumber } from 'naive-ui'
import { AddOutline } from '@vicons/ionicons5'
import type { Exam, GradeRecord, KnowledgePoint } from '../types'
import * as api from '../api/mockApi'
import { useStudentStore } from '../stores/studentStore'

const studentStore = useStudentStore()
const message = useMessage()

const showCreateExam = ref(false)
const showGradeInput = ref(false)
const showSubmitConfirm = ref(false)
const saving = ref(false)
const currentExam = ref<Exam | null>(null)

const exams = ref<Exam[]>([])
const gradeRecords = ref<GradeRecord[]>([])

// 追踪修改状态
const originalScores = ref<Map<number, number | undefined>>(new Map())
const focusedRowIndex = ref<number>(-1)
const rowRefs = ref<HTMLElement[]>([])

// 考试表单
const examForm = ref({
  name: '',
  date: 0,
  maxScore: 100,
  typeId: 0,
  knowledgePointScores: [] as Array<{ knowledgePointId: number; knowledgePointName: string; pointTotal: number }>,
})

const maxScore = computed(() => currentExam.value?.maxScore || 100)

// 选项
const examTypeOptions = ref<{ label: string; value: number }[]>([])
const knowledgePointOptions = ref<{ label: string; value: number }[]>([])

// 分页
const pagination = { pageSize: 10 }

// 考试列表列
const examColumns = [
  { title: '考试名称', key: 'name' },
  { title: '日期', key: 'date' },
  { title: '满分', key: 'maxScore', width: 80 },
  { title: '类型', key: 'typeName', width: 100 },
  {
    title: '操作',
    key: 'actions',
    width: 150,
    render: (row: Exam) => {
      return h(NSpace, {}, {
        default: () => [
          h(NButton, {
            size: 'small',
            onClick: () => openGradeInput(row),
          }, { default: () => '录入成绩' }),
        ],
      })
    },
  },
]

// 是否可以提交
const canSubmit = computed(() => {
  return gradeRecords.value.length > 0 &&
    gradeRecords.value.every(r => r.isAbsent || (r.score !== undefined && r.score !== null))
})

function isModified(record: GradeRecord): boolean {
  const original = originalScores.value.get(record.studentId)
  return original !== record.score
}

function setRowRef(el: HTMLElement | null, index: number) {
  if (el) {
    rowRefs.value[index] = el
  }
}

function focusNextRow(currentIndex: number) {
  const nextIndex = currentIndex + 1
  if (nextIndex < gradeRecords.value.length) {
    focusedRowIndex.value = nextIndex
    nextTick(() => {
      rowRefs.value[nextIndex]?.focus()
    })
  }
}

function onScoreChange(record: GradeRecord) {
  console.log('[Grades] Score changed:', record.studentName, record.score)
}

function onAbsentChange(record: GradeRecord) {
  record.isAbsent = !record.isAbsent
  if (record.isAbsent) {
    record.score = undefined
  }
  console.log('[Grades] Absent changed:', record.studentName, record.isAbsent)
}

function onCreateKnowledgePoint() {
  return { knowledgePointId: 0, knowledgePointName: '', pointTotal: 0 }
}

async function createExam() {
  if (!examForm.value.name || examForm.value.knowledgePointScores.length === 0) {
    message.warning('请填写考试名称和知识点配分')
    return
  }

  const examType = examTypeOptions.value.find(t => t.value === examForm.value.typeId)

  await api.createExam({
    name: examForm.value.name,
    date: new Date(examForm.value.date).toISOString().split('T')[0],
    maxScore: examForm.value.maxScore,
    typeId: examForm.value.typeId,
    typeName: examType?.label || '',
    knowledgePointScores: examForm.value.knowledgePointScores.map(kps => {
      const kp = knowledgePointOptions.value.find(o => o.value === kps.knowledgePointId)
      return {
        ...kps,
        knowledgePointName: kp?.label || '',
      }
    }),
  })

  message.success('考试创建成功')
  showCreateExam.value = false
  examForm.value = { name: '', date: 0, maxScore: 100, typeId: 0, knowledgePointScores: [] }
  loadExams()
}

async function loadExams() {
  exams.value = await api.getExams()
}

async function openGradeInput(exam: Exam) {
  currentExam.value = exam

  // 加载成绩记录（如果没有则创建新的）
  const records = await api.getGradeRecords(exam.id)
  originalScores.value.clear()

  if (records.length === 0) {
    // 为所有学生创建空记录
    gradeRecords.value = studentStore.students.map(s => ({
      id: Date.now() + s.id,
      examId: exam.id,
      studentId: s.id,
      studentName: s.name,
      score: undefined,
      isAbsent: false,
      status: 'draft',
    }))
  } else {
    gradeRecords.value = records
  }

  // 记录原始分数
  gradeRecords.value.forEach(r => {
    originalScores.value.set(r.studentId, r.score)
  })

  focusedRowIndex.value = -1
  showGradeInput.value = true
}

async function saveDraft() {
  saving.value = true
  try {
    await api.saveGradeRecords(gradeRecords.value)
    message.success('草稿已暂存')
  } catch (err) {
    message.error('暂存失败：' + err)
  } finally {
    saving.value = false
  }
}

function confirmSubmit() {
  if (!canSubmit.value) {
    message.warning('请录入所有非缺考学生的成绩')
    return
  }
  showSubmitConfirm.value = true
}

async function submitGrades() {
  if (!currentExam.value) return false

  try {
    gradeRecords.value.forEach(r => r.status = 'submitted')
    await api.submitGradeRecords(currentExam.value.id)
    message.success('成绩已提交')
    showGradeInput.value = false
    showSubmitConfirm.value = false
    return true
  } catch (err) {
    message.error('提交失败：' + err)
    return false
  }
}

// 键盘快捷键
function handleKeyDown(e: KeyboardEvent) {
  if (!showGradeInput.value) return

  if (e.key === 'Enter' && !e.ctrlKey && !e.shiftKey) {
    // Enter 暂存
    e.preventDefault()
    saveDraft()
  }
}

onMounted(async () => {
  await studentStore.fetchStudents()
  await loadExams()

  const examTypes = await api.getExamTypes()
  examTypeOptions.value = examTypes.map(t => ({ label: t.name, value: t.id }))

  const knowledgePoints = await api.getKnowledgePoints()

  // 扁平化知识点
  function flattenKPs(kps: KnowledgePoint[], prefix = ''): { label: string; value: number }[] {
    return kps.flatMap(kp => {
      const label = prefix ? `${prefix} / ${kp.name}` : kp.name
      const children = kp.children ? flattenKPs(kp.children, label) : []
      return [{ label, value: kp.id }, ...children]
    })
  }

  knowledgePointOptions.value = flattenKPs(knowledgePoints)

  // 全局键盘监听
  window.addEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.grades-page {
  max-width: 1400px;
}

.grade-input-table {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.grade-header {
  display: flex;
  background: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 500;
  padding: 8px 12px;
}

.grade-row {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
  outline: none;
}

.grade-row:focus {
  box-shadow: inset 0 0 0 2px #2080F0;
}

.grade-row.modified:not(.absent) {
  background: #E8F5E9;
}

.grade-row.absent {
  background: #FFF3E0;
}

.col-name {
  width: 100px;
  flex-shrink: 0;
}

.col-score {
  flex: 1;
  padding: 0 12px;
}

.col-absent {
  width: 80px;
  text-align: center;
}

.col-status {
  width: 80px;
  text-align: center;
}

.absent-text {
  color: #F0A020;
}

.status-absent {
  color: #F0A020;
}

.status-entered {
  color: #18A058;
}

.status-pending {
  color: #999;
}
</style>
