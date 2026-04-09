<template>
  <MainLayout ref="layoutRef">
    <div class="resources-page">
      <n-card :bordered="false">
        <template #header>
          <n-space justify="space-between" align="center">
            <n-tabs v-model:value="activeTab" type="segment">
              <n-tab-pane name="files" tab="文件列表" />
              <n-tab-pane name="dangling" tab="悬空记录" />
            </n-tabs>
            <n-button @click="addDirectory">
              <template #icon>
                <n-icon><FolderOpenOutline /></n-icon>
              </template>
              添加目录
            </n-button>
          </n-space>
        </template>

        <!-- 文件列表 -->
        <div v-if="activeTab === 'files'" class="resources-layout">
          <!-- 左侧目录树 -->
          <div class="directory-tree">
            <n-tree
              :data="directoryTree"
              block-line
              @update:selected-key="onSelectDirectory"
            />
          </div>

          <!-- 中央文件列表 -->
          <div class="file-list">
            <n-data-table
              :columns="fileColumns"
              :data="currentFiles"
              :pagination="pagination"
              :row-key="(row: any) => row.id"
            />
          </div>
        </div>

        <!-- 悬空记录视图 -->
        <div v-else>
          <n-alert type="warning" :bordered="false" class="mb-16">
            悬空记录是指文件路径已失效的使用记录，您可以拖拽悬空记录到有效文件上进行合并修复。
          </n-alert>
          
          <n-list>
            <n-list-item v-for="material in danglingMaterials" :key="material.id">
              <n-space align="center">
                <n-icon :size="20" color="#D03050"><WarningOutline /></n-icon>
                <div>
                  <div class="dangling-file">{{ material.fileName }}</div>
                  <div class="dangling-path">{{ material.filePath }}</div>
                </div>
                <n-tag size="small" type="warning">链接失效</n-tag>
              </n-space>
            </n-list-item>
          </n-list>
          
          <n-empty v-if="danglingMaterials.length === 0" description="暂无悬空记录" />
        </div>
      </n-card>
    </div>

    <!-- 记录使用抽屉 -->
    <n-drawer v-model:show="showUsageDrawer" :width="500" placement="right">
      <n-drawer-content title="记录资料使用" closable>
        <n-form :model="usageForm" label-placement="left" label-width="80">
          <n-form-item label="日期">
            <n-date-picker v-model:value="usageForm.date" type="date" />
          </n-form-item>
          <n-form-item label="上下午">
            <n-radio-group v-model:value="usageForm.period">
              <n-radio value="morning">上午</n-radio>
              <n-radio value="afternoon">下午</n-radio>
            </n-radio-group>
          </n-form-item>
          <n-form-item label="届">
            <n-select v-model:value="usageForm.cohortId" :options="cohortOptions" />
          </n-form-item>
          <n-form-item label="年级">
            <n-select v-model:value="usageForm.gradeId" :options="gradeOptions" />
          </n-form-item>
          <n-form-item label="类型">
            <n-select v-model:value="usageForm.typeId" :options="materialTypeOptions" />
          </n-form-item>
          <n-form-item label="关联学生">
            <n-select
              v-model:value="usageForm.studentIds"
              :options="studentOptions"
              multiple
              filterable
              placeholder="选择学生"
            />
          </n-form-item>
        </n-form>
        <template #footer>
          <n-button type="primary" @click="saveUsage">确认记录</n-button>
        </template>
      </n-drawer-content>
    </n-drawer>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue'
import { NButton, NSpace, NIcon, NTag, NRadio, NRadioGroup } from 'naive-ui'
import { FolderOpenOutline, WarningOutline, DocumentTextOutline } from '@vicons/ionicons5'
import MainLayout from '../components/MainLayout.vue'
import type { MaterialUsageLog } from '../types'
import * as api from '../api/mockApi'
import { useStudentStore } from '../stores/studentStore'

const studentStore = useStudentStore()

const activeTab = ref('files')
const showUsageDrawer = ref(false)
const selectedMaterial = ref<MaterialUsageLog | null>(null)

const materials = ref<MaterialUsageLog[]>([])
const currentFiles = ref<MaterialUsageLog[]>([])

// 目录树 (Mock)
const directoryTree = ref([
  {
    label: 'D:\\TeachingMaterials',
    key: 'dir1',
    children: [
      { label: '数学练习卷01.pdf', key: 'file1' },
      { label: '2025年期中试卷.docx', key: 'file2' },
    ],
  },
])

// 使用表单
const usageForm = ref({
  date: Date.now(),
  period: 'morning' as 'morning' | 'afternoon',
  cohortId: 0,
  gradeId: 0,
  typeId: 0,
  studentIds: [] as number[],
})

// 选项
const cohortOptions = ref<{ label: string; value: number }[]>([])
const gradeOptions = ref<{ label: string; value: number }[]>([])
const materialTypeOptions = ref<{ label: string; value: number }[]>([])
const studentOptions = ref<{ label: string; value: number }[]>([])

// 悬空记录
const danglingMaterials = computed(() => {
  return materials.value.filter(m => m.isDangling)
})

// 分页
const pagination = { pageSize: 15 }

// 文件列表列
const fileColumns = [
  {
    title: '文件名',
    key: 'fileName',
    render: (row: MaterialUsageLog) => {
      return h(NSpace, { align: 'center' }, {
        default: () => [
          h(NIcon, { size: 18 }, { default: () => h(DocumentTextOutline) }),
          h('span', row.fileName),
        ],
      })
    },
  },
  {
    title: '状态',
    key: 'status',
    width: 100,
    render: (row: MaterialUsageLog) => {
      if (row.isDangling) {
        return h(NTag, { type: 'error', size: 'small' }, { default: () => '链接失效' })
      }
      return h(NTag, { type: 'success', size: 'small' }, { default: () => '正常' })
    },
  },
  {
    title: '使用次数',
    key: 'usageCount',
    width: 100,
  },
  {
    title: '操作',
    key: 'actions',
    width: 150,
    render: (row: MaterialUsageLog) => {
      return h(NSpace, {}, {
        default: () => [
          h(NButton, {
            size: 'small',
            onClick: () => openUsageDrawer(row),
          }, { default: () => '记录使用' }),
        ],
      })
    },
  },
]

function onSelectDirectory(_keys: string[]) {
  // Mock: 根据选择的目录加载文件
  currentFiles.value = materials.value
}

function openUsageDrawer(material: MaterialUsageLog) {
  selectedMaterial.value = material
  
  // 智能默认：预填上一次的值
  const lastUsage = materials.value[0]
  if (lastUsage) {
    usageForm.value = {
      date: Date.now(),
      period: lastUsage.period,
      cohortId: lastUsage.cohortId,
      gradeId: lastUsage.gradeId,
      typeId: lastUsage.typeId,
      studentIds: [],
    }
  }
  
  showUsageDrawer.value = true
}

function addDirectory() {
  // Mock: 添加监视目录
  console.log('Add directory')
}

async function saveUsage() {
  if (usageForm.value.studentIds.length === 0) return
  
  // Mock: 保存使用记录
  console.log('Save usage:', usageForm.value)
  showUsageDrawer.value = false
}

onMounted(async () => {
  await studentStore.fetchStudents()
  materials.value = await api.getMaterials()
  currentFiles.value = materials.value
  
  const cohorts = await api.getCohorts()
  cohortOptions.value = cohorts.map(c => ({ label: c.name, value: c.id }))
  
  const grades = await api.getGrades()
  gradeOptions.value = grades.map(g => ({ label: g.name, value: g.id }))
  
  const materialTypes = await api.getMaterialTypes()
  materialTypeOptions.value = materialTypes.map(t => ({ label: t.name, value: t.id }))
  
  studentOptions.value = studentStore.students.map(s => ({
    label: s.name,
    value: s.id,
  }))
})
</script>

<style scoped>
.resources-page {
  max-width: 1400px;
}

.resources-layout {
  display: flex;
  gap: 16px;
}

.directory-tree {
  width: 250px;
  flex-shrink: 0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px;
  background: white;
}

.file-list {
  flex: 1;
}

.mb-16 {
  margin-bottom: 16px;
}

.dangling-file {
  font-weight: 500;
}

.dangling-path {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
</style>
