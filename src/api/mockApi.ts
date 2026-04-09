// Mock API 层 - 定义接口契约，返回模拟数据
// 后期只需修改此文件实现 Tauri invoke 调用

import type {
  Student,
  Course,
  TeachingPlan,
  PlanAssignment,
  Exam,
  GradeRecord,
  KnowledgePoint,
  MaterialUsageLog,
  MemoTodo,
  Cohort,
  Grade,
  ExamType,
  MaterialType,
} from "../types";

// ===== Mock 数据 =====

export const MOCK_COHORTS: Cohort[] = [
  { id: 1, name: "2024届" },
  { id: 2, name: "2025届" },
  { id: 3, name: "2026届" },
];

export const MOCK_GRADES: Grade[] = [
  { id: 1, name: "高一" },
  { id: 2, name: "高二" },
  { id: 3, name: "高三" },
  { id: 4, name: "初一" },
  { id: 5, name: "初二" },
  { id: 6, name: "初三" },
];

export const MOCK_STUDENTS: Student[] = [
  {
    id: 1,
    name: "张三",
    cohortId: 3,
    cohortName: "2026届",
    gradeId: 2,
    gradeName: "高二",
    contactInfo: "电话: 13800138000\n微信: zhangsan_parent",
    tags: ["专注力强", "逻辑思维好", "需要鼓励"],
    memo: "课堂表现积极，对数学有浓厚兴趣，建议多给拓展题。",
    hasLagWarning: false,
  },
  {
    id: 2,
    name: "李四",
    cohortId: 3,
    cohortName: "2026届",
    gradeId: 2,
    gradeName: "高二",
    contactInfo: "电话: 13900139000\n微信: lisi_mom",
    tags: ["基础薄弱", "需要耐心", "视觉型学习者"],
    memo: "基础需要巩固，建议从概念入手，多用图示教学。",
    hasLagWarning: true,
  },
  {
    id: 3,
    name: "王五",
    cohortId: 2,
    cohortName: "2025届",
    gradeId: 3,
    gradeName: "高三",
    contactInfo: "电话: 13700137000",
    tags: ["冲刺型", "自律", "目标明确"],
    memo: "目标985，数学是弱项，需重点突破。",
    hasLagWarning: false,
  },
];

export const MOCK_COURSES: Course[] = [
  {
    id: 1,
    studentIds: [1],
    studentNames: ["张三"],
    planId: 1,
    planName: "高二数学冲刺",
    content: "导数基础与练习",
    status: "completed",
    date: "2026-04-07",
    startTime: "09:00",
    endTime: "11:00",
  },
  {
    id: 2,
    studentIds: [2],
    studentNames: ["李四"],
    content: "三角函数复习",
    status: "planned",
    date: "2026-04-08",
    startTime: "14:00",
    endTime: "16:00",
  },
  {
    id: 3,
    studentIds: [1, 3],
    studentNames: ["张三", "王五"],
    content: "月考讲解",
    status: "planned",
    date: "2026-04-09",
    startTime: "10:00",
    endTime: "12:00",
  },
];

export const MOCK_PLANS: TeachingPlan[] = [
  {
    id: 1,
    name: "高二数学冲刺计划",
    steps: [
      {
        id: 1,
        description: "导数基础",
        knowledgePointIds: [1, 2],
        estimatedDays: 3,
        completed: true,
        completedDate: "2026-04-05",
      },
      {
        id: 2,
        description: "导数应用",
        knowledgePointIds: [3, 4],
        estimatedDays: 5,
        completed: false,
      },
      {
        id: 3,
        description: "综合练习",
        knowledgePointIds: [5],
        estimatedDays: 4,
        completed: false,
      },
    ],
  },
  {
    id: 2,
    name: "高三一轮复习",
    steps: [
      {
        id: 4,
        description: "集合与逻辑",
        knowledgePointIds: [6],
        estimatedDays: 2,
        completed: true,
        completedDate: "2026-03-28",
      },
      {
        id: 5,
        description: "函数与方程",
        knowledgePointIds: [7, 8],
        estimatedDays: 7,
        completed: false,
      },
      {
        id: 6,
        description: "三角函数",
        knowledgePointIds: [9, 10],
        estimatedDays: 5,
        completed: false,
      },
    ],
  },
];

export const MOCK_ASSIGNMENTS: PlanAssignment[] = [
  {
    id: 1,
    planId: 1,
    studentId: 1,
    studentName: "张三",
    startDate: "2026-04-01",
    currentStep: 2,
    totalSteps: 3,
    isLagging: false,
    lagDays: 0,
  },
  {
    id: 2,
    planId: 2,
    studentId: 3,
    studentName: "王五",
    startDate: "2026-03-20",
    currentStep: 2,
    totalSteps: 3,
    isLagging: true,
    lagDays: 3,
  },
];

export const MOCK_EXAMS: Exam[] = [
  {
    id: 1,
    name: "4月月考",
    date: "2026-04-05",
    maxScore: 150,
    typeId: 1,
    typeName: "阶段测验",
    knowledgePointScores: [
      { knowledgePointId: 1, knowledgePointName: "导数概念", pointTotal: 30 },
      { knowledgePointId: 2, knowledgePointName: "导数计算", pointTotal: 40 },
      { knowledgePointId: 3, knowledgePointName: "导数应用", pointTotal: 80 },
    ],
  },
];

export const MOCK_GRADE_RECORDS: GradeRecord[] = [
  {
    id: 1,
    examId: 1,
    studentId: 1,
    studentName: "张三",
    score: 125,
    isAbsent: false,
    status: "submitted",
  },
  {
    id: 2,
    examId: 1,
    studentId: 2,
    studentName: "李四",
    score: 98,
    isAbsent: false,
    status: "submitted",
  },
  {
    id: 3,
    examId: 1,
    studentId: 3,
    studentName: "王五",
    score: 135,
    isAbsent: false,
    status: "submitted",
  },
];

export const MOCK_KNOWLEDGE_POINTS: KnowledgePoint[] = [
  {
    id: 1,
    parentId: null,
    name: "数学",
    children: [
      {
        id: 2,
        parentId: 1,
        name: "代数",
        children: [
          { id: 3, parentId: 2, name: "一元二次方程", mastery: 85 },
          { id: 4, parentId: 2, name: "函数", mastery: 72 },
        ],
      },
      {
        id: 5,
        parentId: 1,
        name: "几何",
        children: [
          { id: 6, parentId: 5, name: "平面几何", mastery: 90 },
          { id: 7, parentId: 5, name: "立体几何", mastery: 68 },
        ],
      },
      {
        id: 8,
        parentId: 1,
        name: "微积分",
        children: [
          { id: 9, parentId: 8, name: "导数概念", mastery: 88 },
          { id: 10, parentId: 8, name: "导数应用", mastery: 75 },
        ],
      },
    ],
  },
];

export const MOCK_MATERIALS: MaterialUsageLog[] = [
  {
    id: 1,
    filePath: "D:\\TeachingMaterials\\math_worksheet_01.pdf",
    fileName: "数学练习卷01.pdf",
    cohortId: 3,
    cohortName: "2026届",
    date: "2026-04-07",
    period: "morning",
    gradeId: 2,
    gradeName: "高二",
    typeId: 1,
    typeName: "练习卷",
    studentIds: [1, 2],
    studentNames: ["张三", "李四"],
    isDangling: false,
  },
  {
    id: 2,
    filePath: "D:\\TeachingMaterials\\old_exam_2025.docx",
    fileName: "2025年期中试卷.docx",
    cohortId: 2,
    cohortName: "2025届",
    date: "2026-03-15",
    period: "afternoon",
    gradeId: 3,
    gradeName: "高三",
    typeId: 2,
    typeName: "试卷",
    studentIds: [3],
    studentNames: ["王五"],
    isDangling: true,
  },
];

export const MOCK_MEMOS_TODOS: MemoTodo[] = [
  {
    id: 1,
    type: "todo",
    title: "准备下周月考试卷",
    content: "需要涵盖导数和三角函数内容",
    dueDate: "2026-04-15",
    isRecurring: false,
    isCompleted: false,
    isOverdue: false,
    createdAt: "2026-04-01",
  },
  {
    id: 2,
    type: "memo",
    title: "教学心得",
    content: "张三对图形化教学反应很好，可以多采用这种方式。",
    isRecurring: false,
    isCompleted: false,
    isOverdue: false,
    createdAt: "2026-04-07",
  },
  {
    id: 3,
    type: "todo",
    title: "检查并备份数据",
    content: "每周例行备份",
    isRecurring: true,
    recurringRule: "weekly",
    isCompleted: false,
    isOverdue: true,
    createdAt: "2026-04-01",
  },
];

export const MOCK_EXAM_TYPES: ExamType[] = [
  { id: 1, name: "课堂练习", weight: 1 },
  { id: 2, name: "阶段测验", weight: 2 },
  { id: 3, name: "期中考试", weight: 3 },
  { id: 4, name: "期末考试", weight: 3 },
];

export const MOCK_MATERIAL_TYPES: MaterialType[] = [
  { id: 1, name: "练习卷" },
  { id: 2, name: "试卷" },
  { id: 3, name: "教案" },
  { id: 4, name: "课件" },
  { id: 5, name: "其他" },
];

// ===== API 函数 (Mock 实现) =====

const DEBUG = true; // 生产环境设为 false 关闭调试日志

let nextStudentId = 4;
let nextCourseId = 4;
let nextExamId = 2;

function log(tag: string, ...args: any[]) {
  if (DEBUG) console.log(`[API:${tag}]`, ...args);
}

export async function getStudents(): Promise<Student[]> {
  log("getStudents");
  return Promise.resolve(MOCK_STUDENTS);
}

export async function createStudent(
  student: Omit<Student, "id">,
): Promise<Student> {
  log("createStudent", student.name);
  const newStudent: Student = { ...student, id: nextStudentId++ };
  MOCK_STUDENTS.push(newStudent);
  return Promise.resolve(newStudent);
}

export async function updateStudent(
  id: number,
  data: Partial<Student>,
): Promise<Student> {
  log("updateStudent", id, data);
  const index = MOCK_STUDENTS.findIndex((s) => s.id === id);
  if (index === -1) throw new Error("学生不存在");
  MOCK_STUDENTS[index] = { ...MOCK_STUDENTS[index], ...data };
  return Promise.resolve(MOCK_STUDENTS[index]);
}

export async function deleteStudent(id: number): Promise<void> {
  log("deleteStudent", id);
  const index = MOCK_STUDENTS.findIndex((s) => s.id === id);
  if (index !== -1) MOCK_STUDENTS.splice(index, 1);
  return Promise.resolve();
}

export async function getCourses(_weekStart: string): Promise<Course[]> {
  log("getCourses", _weekStart);
  return Promise.resolve(MOCK_COURSES);
}

export async function createCourse(
  course: Omit<Course, "id">,
): Promise<Course> {
  log("createCourse", course.studentNames, course.date);
  const newCourse: Course = { ...course, id: nextCourseId++ };
  MOCK_COURSES.push(newCourse);
  return Promise.resolve(newCourse);
}

export async function updateCourse(
  id: number,
  data: Partial<Course>,
): Promise<Course> {
  const index = MOCK_COURSES.findIndex((c) => c.id === id);
  if (index === -1) throw new Error("课程不存在");
  MOCK_COURSES[index] = { ...MOCK_COURSES[index], ...data };
  return Promise.resolve(MOCK_COURSES[index]);
}

export async function deleteCourse(id: number): Promise<void> {
  const index = MOCK_COURSES.findIndex((c) => c.id === id);
  if (index !== -1) MOCK_COURSES.splice(index, 1);
  return Promise.resolve();
}

export async function getPlans(): Promise<TeachingPlan[]> {
  return Promise.resolve(MOCK_PLANS);
}

export async function getAssignments(): Promise<PlanAssignment[]> {
  return Promise.resolve(MOCK_ASSIGNMENTS);
}

export async function getExams(): Promise<Exam[]> {
  return Promise.resolve(MOCK_EXAMS);
}

export async function createExam(exam: Omit<Exam, "id">): Promise<Exam> {
  const newExam: Exam = { ...exam, id: nextExamId++ };
  MOCK_EXAMS.push(newExam);
  return Promise.resolve(newExam);
}

export async function getGradeRecords(examId: number): Promise<GradeRecord[]> {
  return Promise.resolve(MOCK_GRADE_RECORDS.filter((r) => r.examId === examId));
}

export async function saveGradeRecords(records: GradeRecord[]): Promise<void> {
  records.forEach((r) => {
    const index = MOCK_GRADE_RECORDS.findIndex((gr) => gr.id === r.id);
    if (index !== -1) {
      MOCK_GRADE_RECORDS[index] = r;
    }
  });
  return Promise.resolve();
}

export async function submitGradeRecords(examId: number): Promise<void> {
  MOCK_GRADE_RECORDS.forEach((r) => {
    if (r.examId === examId && r.status === "draft") {
      r.status = "submitted";
    }
  });
  return Promise.resolve();
}

export async function getKnowledgePoints(): Promise<KnowledgePoint[]> {
  return Promise.resolve(MOCK_KNOWLEDGE_POINTS);
}

export async function getMaterials(): Promise<MaterialUsageLog[]> {
  return Promise.resolve(MOCK_MATERIALS);
}

export async function getMemosTodos(): Promise<MemoTodo[]> {
  return Promise.resolve(MOCK_MEMOS_TODOS);
}

export async function createMemoTodo(
  item: Omit<MemoTodo, "id" | "createdAt">,
): Promise<MemoTodo> {
  const newItem: MemoTodo = {
    ...item,
    id: Date.now(),
    createdAt: new Date().toISOString().split("T")[0],
  };
  MOCK_MEMOS_TODOS.push(newItem);
  return Promise.resolve(newItem);
}

export async function completeMemoTodo(id: number): Promise<void> {
  const item = MOCK_MEMOS_TODOS.find((i) => i.id === id);
  if (item) item.isCompleted = true;
  return Promise.resolve();
}

export async function getCohorts(): Promise<Cohort[]> {
  return Promise.resolve(MOCK_COHORTS);
}

export async function getGrades(): Promise<Grade[]> {
  return Promise.resolve(MOCK_GRADES);
}

export async function getExamTypes(): Promise<ExamType[]> {
  return Promise.resolve(MOCK_EXAM_TYPES);
}

export async function getMaterialTypes(): Promise<MaterialType[]> {
  return Promise.resolve(MOCK_MATERIAL_TYPES);
}

// 检查课程冲突
export async function checkCourseConflict(
  studentId: number,
  date: string,
  startTime: string,
  endTime: string,
): Promise<boolean> {
  const hasConflict = MOCK_COURSES.some(
    (c) =>
      c.studentIds.includes(studentId) &&
      c.date === date &&
      c.status !== "cancelled" &&
      ((c.startTime <= startTime && c.endTime > startTime) ||
        (c.startTime < endTime && c.endTime >= endTime)),
  );
  return Promise.resolve(hasConflict);
}
