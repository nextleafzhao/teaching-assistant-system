<template>
  <div class="plans-page">
      <n-card :bordered="false">
        <template #header>
          <n-space justify="space-between" align="center">
            <n-tabs v-model:value="activeTab" type="segment">
              <n-tab-pane name="assignments" tab="计划指派" />
              <n-tab-pane name="templates" tab="模板管理" />
            </n-tabs>
            <n-button type="primary" @click="showCreatePlan = true">
              <template #icon>
                <n-icon><AddOutline /></n-icon>
              </template>
              新增计划
            </n-button>
          </n-space>
        </template>

        <!-- 计划指派列表 -->
        <div v-if="activeTab === 'assignments'">
          <n-data-table
            :columns="assignmentColumns"
            :data="assignments"
            :row-key="(row: any) => row.id"
          />
        </div>

        <!-- 模板管理 -->
        <div v-else>
          <n-grid :cols="2" :x-gap="16">
            <n-grid-item v-for="plan in plans" :key="plan.id">
              <n-card :title="plan.name" size="small">
                <n-timeline size="small">
                  <n-timeline-item
                    v-for="step in plan.steps"
                    :key="step.id"
                    :type="step.completed ? 'success' : 'default'"
                    :title="step.description"
                    :content="step.estimatedDays ? `预计 ${step.estimatedDays} 天` : ''"
                  />
                </n-timeline>
              </n-card>
            </n-grid-item>
          </n-grid>
        </div>
      </n-card>
    </div>

    <!-- 创建计划模态框 -->
    <n-modal v-model:show="showCreatePlan" preset="dialog" title="新增教学计划" style="max-width: 700px">
      <n-form :model="planForm" label-placement="left" label-width="80">
        <n-form-item label="计划名称">
          <n-input v-model:value="planForm.name" placeholder="请输入计划名称" />
        </n-form-item>
        <n-form-item label="计划步骤">
          <n-dynamic-input
            v-model:value="planForm.steps"
            :on-create="() => ({ description: '', knowledgePointIds: [], estimatedDays: 0, completed: false })"
          >
            <template #default="{ value }">
              <n-card size="small">
                <n-input v-model:value="value.description" placeholder="步骤描述" />
                <n-input-number
                  v-model:value="value.estimatedDays"
                  :min="1"
                  placeholder="预计天数"
                  class="mt-8"
                />
              </n-card>
            </template>
          </n-dynamic-input>
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="showCreatePlan = false">取消</n-button>
          <n-button type="primary" @click="createPlan">创建</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import { NButton, NSpace, NTag, NProgress } from 'naive-ui'
import { AddOutline } from '@vicons/ionicons5'
import type { TeachingPlan, PlanAssignment } from '../types'
import * as api from '../api/mockApi'

const activeTab = ref('assignments')
const showCreatePlan = ref(false)

const plans = ref<TeachingPlan[]>([])
const assignments = ref<PlanAssignment[]>([])

const planForm = ref({
  name: '',
  steps: [] as Array<{ description: string; knowledgePointIds: number[]; estimatedDays: number; completed: boolean }>,
})

const assignmentColumns = [
  { title: '计划名称', key: 'planName' },
  { title: '学生', key: 'studentName', width: 100 },
  {
    title: '进度',
    key: 'progress',
    width: 200,
    render: (row: PlanAssignment) => {
      const percent = Math.round((row.currentStep / row.totalSteps) * 100)
      return h(NSpace, { vertical: true, size: 4 }, {
        default: () => [
          h(NProgress, {
            type: 'line',
            percentage: percent,
            indicatorPlacement: 'inside',
            height: 12,
          }),
          h('span', { style: { fontSize: '12px', color: '#666' } }, `${row.currentStep}/${row.totalSteps}`),
        ],
      })
    },
  },
  {
    title: '状态',
    key: 'status',
    width: 120,
    render: (row: PlanAssignment) => {
      if (row.isLagging) {
        return h(NTag, { type: 'warning' }, { default: () => `滞后 ${row.lagDays} 天` })
      }
      return h(NTag, { type: 'success' }, { default: () => '正常' })
    },
  },
  {
    title: '开始日期',
    key: 'startDate',
    width: 120,
  },
]

async function createPlan() {
  if (!planForm.value.name || planForm.value.steps.length === 0) return
  
  plans.value.push({
    id: Date.now(),
    name: planForm.value.name,
    steps: planForm.value.steps.map((s, i) => ({
      ...s,
      id: i + 1,
      knowledgePointIds: [],
    })),
  })
  
  showCreatePlan.value = false
  planForm.value = { name: '', steps: [] }
}

onMounted(async () => {
  plans.value = await api.getPlans()
  assignments.value = await api.getAssignments()
  
  // 添加计划名称
  assignments.value.forEach(a => {
    const plan = plans.value.find(p => p.id === a.planId)
    if (plan) {
      (a as any).planName = plan.name
    }
  })
})
</script>

<style scoped>
.plans-page {
  max-width: 1400px;
}

.mt-8 {
  margin-top: 8px;
}
</style>
