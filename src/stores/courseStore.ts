import { defineStore } from "pinia";
import type { Course } from "../types";
import * as api from "../api/mockApi";

export const useCourseStore = defineStore("course", {
  state: () => ({
    courses: [] as Course[],
    loading: false,
    currentWeekStart: "",
  }),

  getters: {
    getCoursesByDate: (state) => (date: string) => {
      return state.courses.filter((c) => c.date === date);
    },

    getCourseById: (state) => (id: number) => {
      return state.courses.find((c) => c.id === id);
    },
  },

  actions: {
    async fetchCourses(weekStart: string) {
      console.log("[CourseStore] fetchCourses - weekStart:", weekStart);
      this.currentWeekStart = weekStart;
      this.loading = true;
      try {
        this.courses = await api.getCourses(weekStart);
        console.log(
          "[CourseStore] fetchCourses - success, count:",
          this.courses.length,
        );
      } catch (err) {
        console.error("[CourseStore] fetchCourses - error:", err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async addCourse(course: Omit<Course, "id">) {
      console.log("[CourseStore] addCourse:", course.studentNames, course.date);
      const newCourse = await api.createCourse(course);
      this.courses.push(newCourse);
      console.log("[CourseStore] addCourse - success, id:", newCourse.id);
      return newCourse;
    },

    async updateCourse(id: number, data: Partial<Course>) {
      console.log("[CourseStore] updateCourse - id:", id, data);
      const updated = await api.updateCourse(id, data);
      const index = this.courses.findIndex((c) => c.id === id);
      if (index !== -1) {
        this.courses[index] = updated;
      }
      return updated;
    },

    async removeCourse(id: number) {
      console.log("[CourseStore] removeCourse - id:", id);
      await api.deleteCourse(id);
      this.courses = this.courses.filter((c) => c.id !== id);
      console.log("[CourseStore] removeCourse - success");
    },

    async checkConflict(
      studentId: number,
      date: string,
      startTime: string,
      endTime: string,
    ): Promise<boolean> {
      console.log(
        "[CourseStore] checkConflict - student:",
        studentId,
        date,
        startTime,
        endTime,
      );
      const result = await api.checkCourseConflict(
        studentId,
        date,
        startTime,
        endTime,
      );
      console.log("[CourseStore] checkConflict - result:", result);
      return result;
    },
  },
});
