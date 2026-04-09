import { defineStore } from "pinia";
import type { Student } from "../types";
import * as api from "../api/mockApi";

export const useStudentStore = defineStore("student", {
  state: () => ({
    students: [] as Student[],
    loading: false,
  }),

  getters: {
    getStudentById: (state) => (id: number) => {
      return state.students.find((s) => s.id === id);
    },

    studentsWithLagWarning: (state) => {
      return state.students.filter((s) => s.hasLagWarning);
    },
  },

  actions: {
    async fetchStudents() {
      console.log("[StudentStore] fetchStudents - start");
      this.loading = true;
      try {
        this.students = await api.getStudents();
        console.log(
          "[StudentStore] fetchStudents - success, count:",
          this.students.length,
        );
      } catch (err) {
        console.error("[StudentStore] fetchStudents - error:", err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async addStudent(student: Omit<Student, "id">) {
      console.log("[StudentStore] addStudent:", student.name);
      const newStudent = await api.createStudent(student);
      this.students.push(newStudent);
      console.log("[StudentStore] addStudent - success, id:", newStudent.id);
      return newStudent;
    },

    async updateStudent(id: number, data: Partial<Student>) {
      console.log("[StudentStore] updateStudent - id:", id, data);
      const updated = await api.updateStudent(id, data);
      const index = this.students.findIndex((s) => s.id === id);
      if (index !== -1) {
        this.students[index] = updated;
      }
      return updated;
    },

    async removeStudent(id: number) {
      console.log("[StudentStore] removeStudent - id:", id);
      await api.deleteStudent(id);
      this.students = this.students.filter((s) => s.id !== id);
      console.log("[StudentStore] removeStudent - success");
    },
  },
});
