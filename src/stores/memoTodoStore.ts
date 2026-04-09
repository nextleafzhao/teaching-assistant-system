import { defineStore } from "pinia";
import type { MemoTodo } from "../types";
import * as api from "../api/mockApi";

export const useMemoTodoStore = defineStore("memoTodo", {
  state: () => ({
    items: [] as MemoTodo[],
    loading: false,
  }),

  getters: {
    todos: (state) =>
      state.items.filter(
        (i: MemoTodo) => i.type === "todo" && !i.isCompleted,
      ) as MemoTodo[],
    memos: (state) =>
      state.items.filter((i: MemoTodo) => i.type === "memo") as MemoTodo[],
    overdueTodos: (state) =>
      state.items.filter(
        (i: MemoTodo) => i.type === "todo" && !i.isCompleted && i.isOverdue,
      ) as MemoTodo[],
  },

  actions: {
    async fetchItems() {
      console.log("[MemoTodoStore] fetchItems - start");
      this.loading = true;
      try {
        this.items = await api.getMemosTodos();
        console.log(
          "[MemoTodoStore] fetchItems - success, count:",
          this.items.length,
        );
      } catch (err) {
        console.error("[MemoTodoStore] fetchItems - error:", err);
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async addItem(item: Omit<MemoTodo, "id" | "createdAt">) {
      console.log("[MemoTodoStore] addItem:", item.type, item.title);
      const newItem = await api.createMemoTodo(item);
      this.items.push(newItem);
      console.log("[MemoTodoStore] addItem - success, id:", newItem.id);
      return newItem;
    },

    async completeItem(id: number) {
      console.log("[MemoTodoStore] completeItem - id:", id);
      await api.completeMemoTodo(id);
      const item = this.items.find((i) => i.id === id);
      if (item) item.isCompleted = true;
      console.log("[MemoTodoStore] completeItem - success");
    },
  },
});
