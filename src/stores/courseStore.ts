import { defineStore } from 'pinia'
import type { Course } from '../types'
import * as api from '../api/mockApi'

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [] as Course[],
    loading: false,
    currentWeekStart: '',
  }),
  
  getters: {
    getCoursesByDate: (state) => (date: string) => {
      return state.courses.filter(c => c.date === date)
    },
    
    getCourseById: (state) => (id: number) => {
      return state.courses.find(c => c.id === id)
    },
  },
  
  actions: {
    async fetchCourses(weekStart: string) {
      this.currentWeekStart = weekStart
      this.loading = true
      try {
        this.courses = await api.getCourses(weekStart)
      } finally {
        this.loading = false
      }
    },
    
    async addCourse(course: Omit<Course, 'id'>) {
      const newCourse = await api.createCourse(course)
      this.courses.push(newCourse)
      return newCourse
    },
    
    async updateCourse(id: number, data: Partial<Course>) {
      const updated = await api.updateCourse(id, data)
      const index = this.courses.findIndex(c => c.id === id)
      if (index !== -1) {
        this.courses[index] = updated
      }
      return updated
    },
    
    async removeCourse(id: number) {
      await api.deleteCourse(id)
      this.courses = this.courses.filter(c => c.id !== id)
    },
    
    async checkConflict(studentId: number, date: string, startTime: string, endTime: string): Promise<boolean> {
      return api.checkCourseConflict(studentId, date, startTime, endTime)
    },
  },
})
