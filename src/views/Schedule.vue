<template>
  <MainLayout ref="layoutRef">
    <div class="schedule-page">
      <n-card :bordered="false">
        <template #header>
          <n-space justify="space-between" align="center">
            <n-space align="center">
              <n-button-group>
                <n-button @click="changeWeek(-1)">上一周</n-button>
                <n-button @click="changeWeek(1)">下一周</n-button>
              </n-button-group>
              <span class="week-label">{{ weekLabel }}</span>
              <n-button @click="goToday">今天</n-button>
            </n-space>
            <n-space>
              <n-select
                v-model:value="selectedTemplate"
                :options="templateOptions"
                placeholder="应用模板"
                style="width: 150px"
                @update:value="applyTemplate"
              />
              <n-button type="primary" @click="showAddCourse = true">
                <template #icon>
                  <n-icon><AddOutline /></n-icon>
                </template>
                创建课程
              </n-button>
            </n-space>
          </n-space>
        </template>

        <!-- 日历网格 -->
        <div class="calendar-grid">
          <!-- 表头：星期 -->
          <div class="calendar-header">
            <div class="time-column-header"></div>
            <div v-for="(day, index) in weekDays" :key="index" class="day-header">
              <div>{{ day.name }}</div>
              <div class="day-date">{{ day.date }}</div>
            </div>
          </div>

          <!-- 时间网格 -->
          <div class="calendar-body">
            <div v-for="hour in hours" :key="hour" class="time-row">
              <div class="time-label">{{ String(hour).padStart(2, '0') }}:00</div>
              <div
                v-for="(day, dayIndex) in weekDays"
                :key="dayIndex"
                class="time-cell"
                @click="onCellClick(day.date, hour)"
              >
                <!-- 课程卡片 -->
                <div
                  v-for="course in getCoursesForCell(day.date, hour)"
                  :key="course.id"
                  class="course-card"
                  :class="course.status"
                  @click.stop="editCourse(course)"
                >
                  <div class="course-header">
                    <span class="course-students">{{ course.studentNames.join(', ') }}</span>
                    <div class="course-status-dot" :class="course.status"></div>
                  </div>
                  <div class="course-content">{{ course.content }}</div>
                  <div class="course-time">{{ course.startTime }} - {{ course.endTime }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </n-card>
    </div>

    <!-- 创建/编辑课程模态框 -->
    <n-modal v-model:show="showAddCourse" preset="dialog" :title="editingCourse ? '编辑课程' : '创建课程'">
      <n-form :model="courseForm" label-placement="left" label-width="80">
        <n-form-item label="学生">
          <n-select
            v-model:value="courseForm.studentIds"
            :options="studentOptions"
            multiple
            filterable
            placeholder="选择学生"
          />
        </n-form-item>
        <n-form-item label="日期">
          <n-date-picker v-model:value="courseForm.date" type="date" />
        </n-form-item>
        <n-form-item label="开始时间">
          <n-time-picker v-model:value="courseForm.startTime" format="HH:mm" />
        </n-form-item>
        <n-form-item label="结束时间">
          <n-time-picker v-model:value="courseForm.endTime" format="HH:mm" />
        </n-form-item>
        <n-form-item label="内容">
          <n-input v-model:value="courseForm.content" type="textarea" placeholder="课程内容" :rows="3" />
        </n-form-item>
        <n-form-item label="教学计划">
          <n-select
            v-model:value="courseForm.planId"
            :options="planOptions"
            placeholder="选择教学计划 (可选)"
            clearable
          />
        </n-form-item>
        <n-form-item label="状态">
          <n-select
            v-model:value="courseForm.status"
            :options="statusOptions"
          />
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="showAddCourse = false">取消</n-button>
          <n-button type="primary" @click="saveCourse">保存</n-button>
        </n-space>
      </template>
    </n-modal>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { AddOutline } from '@vicons/ionicons5'
import MainLayout from '../components/MainLayout.vue'
import { useCourseStore } from '../stores/courseStore'
import { useStudentStore } from '../stores/studentStore'
import type { Course } from '../types'
import * as api from '../api/mockApi'

const courseStore = useCourseStore()
const studentStore = useStudentStore()

const showAddCourse = ref(false)
const editingCourse = ref<Course | null>(null)

// 当前周
const currentWeekStart = ref(new Date())

// 小时范围 (7:00 - 22:00)
const hours = Array.from({ length: 16 }, (_, i) => i + 7)

// 选项
const studentOptions = ref<{ label: string; value: number }[]>([])
const planOptions = ref<{ label: string; value: number }[]>([])
const templateOptions = ref<{ label: string; value: number }[]>([])
const selectedTemplate = ref<number | null>(null)

const statusOptions = [
  { label: '已计划', value: 'planned' },
  { label: '已完成', value: 'completed' },
  { label: '已取消', value: 'cancelled' },
]

// 课程表单
const courseForm = ref({
  studentIds: [] as number[],
  date: 0,
  startTime: '',
  endTime: '',
  content: '',
  planId: null as number | null,
  status: 'planned' as Course['status'],
})

// 计算本周的星期
const weekDays = computed(() => {
  const days = []
  const start = new Date(currentWeekStart.value)
  const dayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(start)
    date.setDate(start.getDate() + i)
    days.push({
      name: dayNames[i],
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      fullDate: date.toISOString().split('T')[0],
    })
  }
  
  return days
})

// 周标签
const weekLabel = computed(() => {
  const start = new Date(currentWeekStart.value)
  const end = new Date(start)
  end.setDate(start.getDate() + 6)
  return `${start.getMonth() + 1}月${start.getDate()}日 - ${end.getMonth() + 1}月${end.getDate()}日`
})

// 获取某个时间格的课程
function getCoursesForCell(date: string, hour: number) {
  const dateStr = date || weekDays.value.find((_, i) => {
    const d = new Date(currentWeekStart.value)
    d.setDate(d.getDate() + i)
    return d.toISOString().split('T')[0] === date
  })?.fullDate
  
  return courseStore.courses.filter(c => {
    if (!dateStr) return false
    const [startHour] = c.startTime.split(':').map(Number)
    return c.date === dateStr && startHour === hour
  })
}

function changeWeek(delta: number) {
  const date = new Date(currentWeekStart.value)
  date.setDate(date.getDate() + delta * 7)
  currentWeekStart.value = date
  loadCourses()
}

function goToday() {
  const today = new Date()
  const dayOfWeek = today.getDay()
  const monday = new Date(today)
  monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))
  currentWeekStart.value = monday
  loadCourses()
}

async function loadCourses() {
  const weekStart = currentWeekStart.value.toISOString().split('T')[0]
  await courseStore.fetchCourses(weekStart)
}

function onCellClick(date: string, hour: number) {
  const day = weekDays.value.find((_, i) => {
    const d = new Date(currentWeekStart.value)
    d.setDate(d.getDate() + i)
    return d.toISOString().split('T')[0] === date
  })
  
  if (!day) return
  
  courseForm.value.date = new Date(day.fullDate).getTime()
  courseForm.value.startTime = `${String(hour).padStart(2, '0')}:00`
  courseForm.value.endTime = `${String(hour + 1).padStart(2, '0')}:00`
  editingCourse.value = null
  showAddCourse.value = true
}

function editCourse(course: Course) {
  editingCourse.value = course
  courseForm.value = {
    studentIds: [...course.studentIds],
    date: new Date(course.date).getTime(),
    startTime: course.startTime,
    endTime: course.endTime,
    content: course.content,
    planId: course.planId || null,
    status: course.status,
  }
  showAddCourse.value = true
}

async function saveCourse() {
  if (courseForm.value.studentIds.length === 0 || !courseForm.value.content) {
    return
  }
  
  const dateStr = new Date(courseForm.value.date).toISOString().split('T')[0]
  const studentNames = courseForm.value.studentIds.map(id => {
    const student = studentStore.students.find(s => s.id === id)
    return student?.name || ''
  }).filter(Boolean)
  
  if (editingCourse.value) {
    await courseStore.updateCourse(editingCourse.value.id, {
      studentIds: courseForm.value.studentIds,
      studentNames,
      date: dateStr,
      startTime: courseForm.value.startTime,
      endTime: courseForm.value.endTime,
      content: courseForm.value.content,
      planId: courseForm.value.planId || undefined,
      status: courseForm.value.status,
    })
  } else {
    await courseStore.addCourse({
      studentIds: courseForm.value.studentIds,
      studentNames,
      date: dateStr,
      startTime: courseForm.value.startTime,
      endTime: courseForm.value.endTime,
      content: courseForm.value.content,
      planId: courseForm.value.planId || undefined,
      status: courseForm.value.status,
    })
  }
  
  showAddCourse.value = false
  editingCourse.value = null
  courseForm.value = {
    studentIds: [],
    date: 0,
    startTime: '',
    endTime: '',
    content: '',
    planId: null,
    status: 'planned',
  }
}

function applyTemplate(templateId: number) {
  // Mock: 应用课时模板
  console.log('Apply template:', templateId)
}

onMounted(async () => {
  goToday()
  await studentStore.fetchStudents()
  
  studentOptions.value = studentStore.students.map(s => ({
    label: s.name,
    value: s.id,
  }))
  
  const plans = await api.getPlans()
  planOptions.value = plans.map(p => ({
    label: p.name,
    value: p.id,
  }))
})
</script>

<style scoped>
.schedule-page {
  max-width: 100%;
}

.week-label {
  font-weight: 500;
  font-size: 16px;
}

.calendar-grid {
  display: flex;
  flex-direction: column;
}

.calendar-header {
  display: flex;
  border-bottom: 2px solid #e0e0e0;
  background: #fafafa;
}

.time-column-header {
  width: 70px;
  min-width: 70px;
  border-right: 1px solid #e0e0e0;
}

.day-header {
  flex: 1;
  text-align: center;
  padding: 8px;
  border-right: 1px solid #e0e0e0;
}

.day-header:last-child {
  border-right: none;
}

.day-date {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}

.calendar-body {
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: calc(100vh - 280px);
}

.time-row {
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  min-height: 80px;
}

.time-label {
  width: 70px;
  min-width: 70px;
  padding: 4px 8px;
  font-size: 12px;
  color: #666;
  border-right: 1px solid #e0e0e0;
  background: #fafafa;
}

.time-cell {
  flex: 1;
  border-right: 1px solid #f0f0f0;
  padding: 2px;
  position: relative;
  cursor: pointer;
}

.time-cell:hover {
  background: #f5f5f5;
}

.course-card {
  background: white;
  border-radius: 4px;
  padding: 6px 8px;
  margin-bottom: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.1s;
}

.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.course-card.cancelled {
  opacity: 0.5;
  text-decoration: line-through;
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.course-students {
  font-size: 12px;
  font-weight: 500;
}

.course-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.course-status-dot.planned {
  background: #999;
}

.course-status-dot.completed {
  background: #18A058;
}

.course-status-dot.cancelled {
  background: #ccc;
}

.course-content {
  font-size: 13px;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.course-time {
  font-size: 11px;
  color: #999;
}
</style>
