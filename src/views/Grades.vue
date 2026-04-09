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
      <n-data-table :columns="examColumns" :data="exams" :pagination="pagination" :row-key="(row: any) => row.id" />
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
                <n-select v-model:value="value.knowledgePointId" :options="knowledgePointOptions" placeholder="选择知识点"
                  style="width: 250px" />
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
      style="max-width: 900px">
      <n-space vertical>
        <n-alert type="info" :bordered="false">
          提示：使用 Tab 键切换学生，Space 勾选缺考，Enter 暂存
        </n-alert>

        <n-data-table :columns="gradeColumns" :data="gradeRecords" :pagination="false"
          :row-key="(row: any) => row.studentId" size="small" />

        <n-space justify="end">
          <n-button @click="saveDraft" :disabled="gradeRecords.length === 0">
            暂存草稿
          </n-button>
          <n-button type="primary" @click="submitGrades" :disabled="!canSubmit">
            最终提交
          </n-button>
        </n-space>
      </n-space>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue'
import { NButton, NSpace, NInputNumber, NCheckbox, NAlert, NSlider } from 'naive-ui'
import { AddOutline } from '@vicons/ionicons5'
import type { Exam, GradeRecord, KnowledgePoint } from '../types'
import * as api from '../api/mockApi'
import { useStudentStore } from '../stores/studentStore'

const studentStore = useStudentStore()

const showCreateExam = ref(false)
const showGradeInput = ref(false)
const currentExam = ref<Exam | null>(null)

const exams = ref<Exam[]>([])
const gradeRecords = ref<GradeRecord[]>([])

// 考试表单
const examForm = ref({
  name: '',
  date: 0,
  maxScore: 100,
  typeId: 0,
  knowledgePointScores: [] as Array<{ knowledgePointId: number; knowledgePointName: string; pointTotal: number }>,
})

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

// 成绩录入列
const gradeColumns = [
  { title: '姓名', key: 'studentName', width: 100 },
  {
    title: '分数',
    key: 'score',
    width: 350,
    render: (row: GradeRecord) => {
      if (row.isAbsent) {
        return h('span', { style: { color: '#F0A020' } }, '缺考')
      }
      return h(NSpace, { align: 'center' }, {
        default: () => [
          h(NSlider, {
            value: row.score || 0,
            min: 0,
            max: currentExam.value?.maxScore || 100,
            step: 1,
            onUpdateValue: (val: number) => {
              row.score = val
            },
            style: { flex: 1 },
          }),
          h(NInputNumber, {
            value: row.score || undefined,
            min: 0,
            max: currentExam.value?.maxScore || 100,
            step: 0.5,
            onUpdateValue: (val: number | null) => {
              row.score = val || undefined
            },
            style: { width: '80px' },
          }),
        ],
      })
    },
  },
  {
    title: '缺考',
    key: 'isAbsent',
    width: 80,
    render: (row: GradeRecord) => {
      return h(NCheckbox, {
        checked: row.isAbsent,
        onUpdateChecked: (checked: boolean) => {
          row.isAbsent = checked
          if (checked) row.score = undefined
        },
      })
    },
  },
  {
    title: '状态',
    key: 'status',
    width: 80,
    render: (row: GradeRecord) => {
      if (row.isAbsent) {
        return h('span', { style: { color: '#F0A020' } }, '缺考')
      }
      if (row.score !== undefined && row.score !== null) {
        return h('span', { style: { color: '#18A058' } }, '已录入')
      }
      return h('span', { style: { color: '#999' } }, '未录入')
    },
  },
]

// 是否可以提交
const canSubmit = computed(() => {
  return gradeRecords.value.every(r => r.isAbsent || (r.score !== undefined && r.score !== null))
})

function onCreateKnowledgePoint() {
  return { knowledgePointId: 0, knowledgePointName: '', pointTotal: 0 }
}

async function createExam() {
  if (!examForm.value.name || examForm.value.knowledgePointScores.length === 0) return

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

  showGradeInput.value = true
}

async function saveDraft() {
  await api.saveGradeRecords(gradeRecords.value)
}

async function submitGrades() {
  if (!canSubmit.value || !currentExam.value) return

  gradeRecords.value.forEach(r => r.status = 'submitted')
  await api.submitGradeRecords(currentExam.value.id)

  showGradeInput.value = false
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
})
</script>

<style scoped>
.grades-page {
  max-width: 1400px;
}
</style>
