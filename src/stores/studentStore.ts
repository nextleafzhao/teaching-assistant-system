import { defineStore } from 'pinia'
import type { Student } from '../types'
import * as api from '../api/mockApi'

export const useStudentStore = defineStore('student', {
  state: () => ({
    students: [] as Student[],
    loading: false,
  }),
  
  getters: {
    getStudentById: (state) => (id: number) => {
      return state.students.find(s => s.id === id)
    },
    
    studentsWithLagWarning: (state) => {
      return state.students.filter(s => s.hasLagWarning)
    },
  },
  
  actions: {
    async fetchStudents() {
      this.loading = true
      try {
        this.students = await api.getStudents()
      } finally {
        this.loading = false
      }
    },
    
    async addStudent(student: Omit<Student, 'id'>) {
      const newStudent = await api.createStudent(student)
      this.students.push(newStudent)
      return newStudent
    },
    
    async updateStudent(id: number, data: Partial<Student>) {
      const updated = await api.updateStudent(id, data)
      const index = this.students.findIndex(s => s.id === id)
      if (index !== -1) {
        this.students[index] = updated
      }
      return updated
    },
    
    async removeStudent(id: number) {
      await api.deleteStudent(id)
      this.students = this.students.filter(s => s.id !== id)
    },
  },
})
