<template>
  <div class="analytics-page">
    <n-card :bordered="false">
      <template #header>
        <n-space justify="space-between" align="center">
          <n-tabs v-model:value="activeTab" type="segment">
            <n-tab-pane name="personal" tab="个人学情" />
            <n-tab-pane name="overall" tab="整体学情" />
          </n-tabs>
          <n-button @click="exportData">
            <template #icon>
              <n-icon>
                <DownloadOutline />
              </n-icon>
            </template>
            导出 AI 分析数据集
          </n-button>
        </n-space>
      </template>

      <!-- 个人学情 -->
      <div v-if="activeTab === 'personal'">
        <n-space :wrap="true" :size="12" class="mb-16">
          <n-select v-model:value="selectedStudentId" :options="studentOptions" placeholder="选择学生" style="width: 200px"
            @update:value="loadPersonalAnalytics" />
        </n-space>

        <n-grid :cols="2" :x-gap="16" :y-gap="16">
          <!-- 知识点掌握度雷达图 -->
          <n-grid-item>
            <n-card title="知识点掌握度" :bordered="false">
              <v-chart v-if="radarChartOption" class="chart" :option="radarChartOption" autoresize />
              <n-empty v-else description="请选择学生" />
            </n-card>
          </n-grid-item>

          <!-- 成绩趋势图 -->
          <n-grid-item>
            <n-card title="成绩趋势" :bordered="false">
              <v-chart v-if="lineChartOption" class="chart" :option="lineChartOption" autoresize />
              <n-empty v-else description="暂无成绩数据" />
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>

      <!-- 整体学情 -->
      <div v-else>
        <n-grid :cols="2" :x-gap="16" :y-gap="16">
          <!-- 分数段分布 -->
          <n-grid-item>
            <n-card title="分数段分布" :bordered="false">
              <v-chart class="chart" :option="distributionChartOption" autoresize />
            </n-card>
          </n-grid-item>

          <!-- 知识点掌握率热力图 -->
          <n-grid-item>
            <n-card title="班级知识点掌握率" :bordered="false">
              <v-chart class="chart" :option="heatmapOption" autoresize />
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { DownloadOutline } from '@vicons/ionicons5'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { RadarChart, LineChart, BarChart, HeatmapChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import VChart from 'vue-echarts'
import { useStudentStore } from '../stores/studentStore'

// 注册 ECharts 组件
use([
  CanvasRenderer,
  RadarChart,
  LineChart,
  BarChart,
  HeatmapChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
])

const studentStore = useStudentStore()

const activeTab = ref('personal')
const selectedStudentId = ref<number | null>(null)

const studentOptions = ref<{ label: string; value: number }[]>([])

// 图表配置
const radarChartOption = ref<any>(null)
const lineChartOption = ref<any>(null)
const distributionChartOption = ref<any>(null)
const heatmapOption = ref<any>(null)

function loadPersonalAnalytics(studentId: number) {
  // Mock: 加载个人学情数据
  const student = studentStore.students.find(s => s.id === studentId)
  if (!student) return

  // 雷达图：知识点掌握度
  radarChartOption.value = {
    tooltip: {},
    radar: {
      indicator: [
        { name: '一元二次方程', max: 100 },
        { name: '函数', max: 100 },
        { name: '平面几何', max: 100 },
        { name: '立体几何', max: 100 },
        { name: '导数概念', max: 100 },
        { name: '导数应用', max: 100 },
      ],
    },
    series: [{
      type: 'radar',
      data: [{
        value: [85, 72, 90, 68, 88, 75],
        name: student.name,
        areaStyle: {
          color: 'rgba(32, 128, 240, 0.3)',
        },
      }],
    }],
  }

  // 折线图：成绩趋势
  lineChartOption.value = {
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['3月月考', '4月月考', '期中考试'],
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 150,
    },
    series: [{
      data: [118, 125, null],
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
    }],
  }
}

function loadOverallAnalytics() {
  // 分数段分布柱状图
  distributionChartOption.value = {
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['0-60', '60-90', '90-120', '120-150'],
    },
    yAxis: {
      type: 'value',
      name: '人数',
    },
    series: [{
      data: [2, 5, 8, 3],
      type: 'bar',
      itemStyle: {
        color: '#2080F0',
      },
    }],
  }

  // 知识点掌握率热力图
  heatmapOption.value = {
    tooltip: { position: 'top' },
    grid: { height: '60%', top: '10%' },
    xAxis: {
      type: 'category',
      data: ['张三', '李四', '王五'],
    },
    yAxis: {
      type: 'category',
      data: ['一元二次方程', '函数', '平面几何', '立体几何', '导数概念', '导数应用'],
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0%',
    },
    series: [{
      type: 'heatmap',
      data: [
        [0, 0, 85], [0, 1, 72], [0, 2, 90], [0, 3, 68], [0, 4, 88], [0, 5, 75],
        [1, 0, 65], [1, 1, 58], [1, 2, 75], [1, 3, 60], [1, 4, 70], [1, 5, 62],
        [2, 0, 92], [2, 1, 85], [2, 2, 95], [2, 3, 88], [2, 4, 90], [2, 5, 82],
      ],
      label: { show: true },
    }],
  }
}

function exportData() {
  // Mock: 导出 AI 分析数据集
  console.log('Export AI analysis dataset')
}

onMounted(async () => {
  await studentStore.fetchStudents()

  studentOptions.value = studentStore.students.map(s => ({
    label: s.name,
    value: s.id,
  }))

  loadOverallAnalytics()
})
</script>

<style scoped>
.analytics-page {
  max-width: 1400px;
}

.mb-16 {
  margin-bottom: 16px;
}

.chart {
  height: 350px;
  width: 100%;
}
</style>
