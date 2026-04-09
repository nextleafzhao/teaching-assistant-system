import { defineStore } from 'pinia'
import type { MemoTodo } from '../types'
import * as api from '../api/mockApi'

export const useMemoTodoStore = defineStore('memoTodo', {
  state: () => ({
    items: [] as MemoTodo[],
    loading: false,
  }),
  
  getters: {
    todos: (state) => state.items.filter((i: MemoTodo) => i.type === 'todo' && !i.isCompleted) as MemoTodo[],
    memos: (state) => state.items.filter((i: MemoTodo) => i.type === 'memo') as MemoTodo[],
    overdueTodos: (state) => state.items.filter((i: MemoTodo) => i.type === 'todo' && !i.isCompleted && i.isOverdue) as MemoTodo[],
  },
  
  actions: {
    async fetchItems() {
      this.loading = true
      try {
        this.items = await api.getMemosTodos()
      } finally {
        this.loading = false
      }
    },
    
    async addItem(item: Omit<MemoTodo, 'id' | 'createdAt'>) {
      const newItem = await api.createMemoTodo(item)
      this.items.push(newItem)
      return newItem
    },
    
    async completeItem(id: number) {
      await api.completeMemoTodo(id)
      const item = this.items.find(i => i.id === id)
      if (item) item.isCompleted = true
    },
  },
})
