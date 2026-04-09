// 学生相关类型
export interface Student {
  id: number
  name: string
  cohortId: number
  cohortName: string
  gradeId: number
  gradeName: string
  contactInfo: string // 联系方式 (多行文本)
  tags: string[] // 特质标签 JSON 数组
  memo: string // 专属备忘录
  hasLagWarning: boolean // 是否有滞后预警
}

export interface Cohort {
  id: number
  name: string
}

export interface Grade {
  id: number
  name: string
}

// 课程相关类型
export interface Course {
  id: number
  studentIds: number[]
  studentNames: string[]
  planId?: number
  planName?: string
  content: string
  materialIds?: number[]
  status: 'planned' | 'completed' | 'cancelled'
  date: string
  startTime: string
  endTime: string
}

export interface ScheduleTemplate {
  id: number
  name: string
  slots: TimeSlot[]
}

export interface TimeSlot {
  hour: number
  minute: number
}

// 教学计划相关类型
export interface TeachingPlan {
  id: number
  name: string
  steps: PlanStep[]
}

export interface PlanStep {
  id: number
  description: string
  knowledgePointIds: number[]
  estimatedDays?: number
  completed: boolean
  completedDate?: string
  associatedCourseId?: number
}

export interface PlanAssignment {
  id: number
  planId: number
  studentId: number
  studentName: string
  startDate: string
  currentStep: number
  totalSteps: number
  isLagging: boolean
  lagDays: number
}

// 成绩相关类型
export interface Exam {
  id: number
  name: string
  date: string
  maxScore: number
  typeId: number
  typeName: string
  knowledgePointScores: ExamPointScore[]
}

export interface ExamPointScore {
  knowledgePointId: number
  knowledgePointName: string
  pointTotal: number
}

export interface GradeRecord {
  id: number
  examId: number
  studentId: number
  studentName: string
  score?: number
  isAbsent: boolean
  status: 'draft' | 'submitted'
}

// 知识点相关类型
export interface KnowledgePoint {
  id: number
  parentId: number | null
  name: string
  children?: KnowledgePoint[]
  mastery?: number // 掌握度 0-100
}

// 资料使用相关类型
export interface MaterialUsageLog {
  id: number
  filePath: string
  fileName: string
  cohortId: number
  cohortName: string
  date: string
  period: 'morning' | 'afternoon'
  gradeId: number
  gradeName: string
  typeId: number
  typeName: string
  studentIds: number[]
  studentNames: string[]
  isDangling: boolean // 是否是悬空记录
}

// 备忘录/待办相关类型
export interface MemoTodo {
  id: number
  type: 'memo' | 'todo'
  title: string
  content: string
  dueDate?: string
  isRecurring: boolean
  recurringRule?: string
  studentId?: number
  courseId?: number
  planId?: number
  isCompleted: boolean
  isOverdue: boolean
  createdAt: string
}

// 考试类型
export interface ExamType {
  id: number
  name: string
  weight: number
}

// 资料类型
export interface MaterialType {
  id: number
  name: string
}
