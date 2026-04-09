<template>
  <div class="students-page">
      <n-card :bordered="false">
        <template #header>
          <n-space justify="space-between" align="center">
            <span>学生管理</span>
            <n-button type="primary" @click="showAddStudent = true">
              <template #icon>
                <n-icon><AddOutline /></n-icon>
              </template>
              新增学生
            </n-button>
          </n-space>
        </template>

        <!-- 筛选区 -->
        <n-space :wrap="true" :size="12" class="filter-area">
          <n-select
            v-model:value="filterCohort"
            :options="cohortOptions"
            placeholder="选择届"
            clearable
            style="width: 150px"
          />
          <n-select
            v-model:value="filterGrade"
            :options="gradeOptions"
            placeholder="选择年级"
            clearable
            style="width: 150px"
          />
          <n-select
            v-model:value="filterTag"
            :options="tagOptions"
            placeholder="选择标签"
            clearable
            style="width: 180px"
          />
        </n-space>

        <!-- 学生列表 -->
        <n-data-table
          :columns="columns"
          :data="filteredStudents"
          :loading="studentStore.loading"
          :pagination="pagination"
          :row-key="(row: Student) => row.id"
        />
      </n-card>

    <!-- 新增学生模态框 -->
    <n-modal v-model:show="showAddStudent" preset="dialog" title="新增学生">
      <n-form :model="newStudent" label-placement="left" label-width="80">
        <n-form-item label="姓名">
          <n-input v-model:value="newStudent.name" placeholder="请输入姓名" />
        </n-form-item>
        <n-form-item label="届">
          <n-select v-model:value="newStudent.cohortId" :options="cohortOptions" />
        </n-form-item>
        <n-form-item label="年级">
          <n-select v-model:value="newStudent.gradeId" :options="gradeOptions" />
        </n-form-item>
        <n-form-item label="联系方式">
          <n-input v-model:value="newStudent.contactInfo" type="textarea" placeholder="电话、微信等" :rows="3" />
        </n-form-item>
        <n-form-item label="特质标签">
          <n-dynamic-tags v-model:value="newStudent.tags" />
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="showAddStudent = false">取消</n-button>
          <n-button type="primary" @click="addStudent">确定</n-button>
        </n-space>
      </template>
    </n-modal>

    <!-- 学生详情抽屉 -->
    <n-drawer v-model:show="showDetail" :width="600" placement="right">
      <n-drawer-content v-if="selectedStudent" :title="selectedStudent.name" closable>
        <!-- 基本信息 -->
        <n-card size="small" class="mb-16">
          <n-descriptions :column="2" label-placement="left">
            <n-descriptions-item label="届">{{ selectedStudent.cohortName }}</n-descriptions-item>
            <n-descriptions-item label="年级">{{ selectedStudent.gradeName }}</n-descriptions-item>
            <n-descriptions-item label="联系方式" :span="2">
              <n-input v-model:value="selectedStudent.contactInfo" type="textarea" :rows="2" size="small" />
            </n-descriptions-item>
            <n-descriptions-item label="特质标签" :span="2">
              <n-dynamic-tags v-model:value="selectedStudent.tags" />
            </n-descriptions-item>
          </n-descriptions>
        </n-card>

        <!-- Tab 切换 -->
        <n-tabs type="line">
          <n-tab-pane name="overview" tab="教学进度">
            <n-empty description="暂无教学计划" v-if="studentPlans.length === 0" />
            <n-timeline v-else>
              <n-timeline-item
                v-for="plan in studentPlans"
                :key="plan.id"
                :type="plan.isLagging ? 'warning' : 'success'"
                :title="plan.planName"
                :content="`进度: ${plan.currentStep}/${plan.totalSteps}`"
              >
                <template v-if="plan.isLagging" #icon>
                  <n-icon><WarningOutline /></n-icon>
                </template>
              </n-timeline-item>
            </n-timeline>
          </n-tab-pane>

          <n-tab-pane name="grades" tab="成绩趋势">
            <n-empty description="暂无成绩数据" />
          </n-tab-pane>

          <n-tab-pane name="courses" tab="课程安排">
            <n-empty description="暂无近期课程" />
          </n-tab-pane>

          <n-tab-pane name="memo" tab="专属备忘录">
            <n-input
              v-model:value="selectedStudent.memo"
              type="textarea"
              :rows="6"
              placeholder="记录课堂表现、沟通记录等..."
            />
            <n-button type="primary" class="mt-8" @click="saveMemo">保存备忘录</n-button>
          </n-tab-pane>
        </n-tabs>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue'
import { NButton, NIcon, NSpace, NTag } from 'naive-ui'
import { AddOutline, WarningOutline } from '@vicons/ionicons5'
import { useStudentStore } from '../stores/studentStore'
import type { Student } from '../types'
import * as api from '../api/mockApi'

const studentStore = useStudentStore()

const showAddStudent = ref(false)
const showDetail = ref(false)
const selectedStudent = ref<Student | null>(null)

// 筛选条件
const filterCohort = ref<number | null>(null)
const filterGrade = ref<number | null>(null)
const filterTag = ref<string | null>(null)

// 选项
const cohortOptions = ref<{ label: string; value: number }[]>([])
const gradeOptions = ref<{ label: string; value: number }[]>([])
const tagOptions = ref<{ label: string; value: string }[]>([])

// 新学生表单
const newStudent = ref({
  name: '',
  cohortId: 0,
  gradeId: 0,
  contactInfo: '',
  tags: [] as string[],
})

// 学生教学计划 (Mock)
const studentPlans = ref<any[]>([])

// 分页
const pagination = {
  pageSize: 10,
}

// 筛选后的学生列表
const filteredStudents = computed(() => {
  let result = studentStore.students
  
  if (filterCohort.value) {
    result = result.filter(s => s.cohortId === filterCohort.value)
  }
  
  if (filterGrade.value) {
    result = result.filter(s => s.gradeId === filterGrade.value)
  }
  
  if (filterTag.value) {
    result = result.filter(s => s.tags.includes(filterTag.value!))
  }
  
  return result
})

// 表格列定义
const columns = [
  {
    title: '姓名',
    key: 'name',
    width: 120,
    render(row: Student) {
      return h(NSpace, { align: 'center' }, {
        default: () => [
          row.hasLagWarning && h('div', { class: 'lag-warning-indicator' }),
          h('span', row.name),
        ],
      })
    },
  },
  {
    title: '届',
    key: 'cohortName',
    width: 100,
  },
  {
    title: '年级',
    key: 'gradeName',
    width: 100,
  },
  {
    title: '特质标签',
    key: 'tags',
    render(row: Student) {
      return h(NSpace, { size: 4 }, {
        default: () => row.tags.slice(0, 3).map(tag => h(NTag, { size: 'small', type: 'info' }, { default: () => tag })),
      })
    },
  },
  {
    title: '操作',
    key: 'actions',
    width: 120,
    render(row: Student) {
      return h(NButton, {
        size: 'small',
        onClick: () => viewDetail(row),
      }, { default: () => '查看详情' })
    },
  },
]

onMounted(async () => {
  await studentStore.fetchStudents()
  
  // 加载选项
  const cohorts = await api.getCohorts()
  cohortOptions.value = cohorts.map(c => ({ label: c.name, value: c.id }))
  
  const grades = await api.getGrades()
  gradeOptions.value = grades.map(g => ({ label: g.name, value: g.id }))
  
  // 收集所有标签
  const allTags = new Set<string>()
  studentStore.students.forEach(s => s.tags.forEach(t => allTags.add(t)))
  tagOptions.value = Array.from(allTags).map(t => ({ label: t, value: t }))
})

function viewDetail(student: Student) {
  selectedStudent.value = { ...student }
  showDetail.value = true
  
  // Mock 教学计划数据
  studentPlans.value = [
    { id: 1, planName: '高二数学冲刺计划', currentStep: 2, totalSteps: 3, isLagging: false },
  ]
}

async function addStudent() {
  if (!newStudent.value.name) return
  
  const cohort = cohortOptions.value.find(c => c.value === newStudent.value.cohortId)
  const grade = gradeOptions.value.find(g => g.value === newStudent.value.gradeId)
  
  await studentStore.addStudent({
    name: newStudent.value.name,
    cohortId: newStudent.value.cohortId,
    cohortName: cohort?.label || '',
    gradeId: newStudent.value.gradeId,
    gradeName: grade?.label || '',
    contactInfo: newStudent.value.contactInfo,
    tags: newStudent.value.tags,
    memo: '',
    hasLagWarning: false,
  })
  
  showAddStudent.value = false
  newStudent.value = { name: '', cohortId: 0, gradeId: 0, contactInfo: '', tags: [] }
}

async function saveMemo() {
  if (selectedStudent.value) {
    await studentStore.updateStudent(selectedStudent.value.id, {
      memo: selectedStudent.value.memo,
    })
  }
}
</script>

<style scoped>
.students-page {
  max-width: 1400px;
}

.filter-area {
  margin-bottom: 16px;
}

.lag-warning-indicator {
  width: 4px;
  height: 20px;
  background-color: #F0A020;
  border-radius: 2px;
}

.mb-16 {
  margin-bottom: 16px;
}

.mt-8 {
  margin-top: 8px;
}
</style>
