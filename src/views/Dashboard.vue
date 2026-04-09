<template>
  <div class="dashboard">
      <n-grid :cols="2" :x-gap="20">
        <!-- 待办事项 -->
        <n-grid-item>
          <n-card title="待办事项" :bordered="false">
            <template #header-extra>
              <n-button type="primary" size="small" @click="showAddTodo = true">
                新增待办
              </n-button>
            </template>
            
            <n-empty v-if="todoStore.todos.length === 0" description="暂无待办事项" />
            
            <n-list v-else>
              <n-list-item v-for="todo in todoStore.todos" :key="todo.id">
                <div class="todo-item" :class="{ overdue: todo.isOverdue }">
                  <n-checkbox
                    :checked="todo.isCompleted"
                    @update:checked="todoStore.completeItem(todo.id)"
                  />
                  <div class="todo-content">
                    <div class="todo-title">{{ todo.title }}</div>
                    <div v-if="todo.dueDate" class="todo-date">截止: {{ todo.dueDate }}</div>
                    <div v-if="todo.isOverdue" class="todo-overdue">已逾期</div>
                  </div>
                </div>
              </n-list-item>
            </n-list>
          </n-card>
        </n-grid-item>

        <!-- 备忘录 -->
        <n-grid-item>
          <n-card title="备忘录" :bordered="false">
            <template #header-extra>
              <n-button type="primary" size="small" @click="showAddMemo = true">
                新增备忘
              </n-button>
            </template>
            
            <n-empty v-if="todoStore.memos.length === 0" description="暂无备忘录" />
            
            <n-list v-else>
              <n-list-item v-for="memo in todoStore.memos" :key="memo.id">
                <div class="memo-item">
                  <div class="memo-title">{{ memo.title }}</div>
                  <div class="memo-content">{{ memo.content }}</div>
                  <div class="memo-date">{{ memo.createdAt }}</div>
                </div>
              </n-list-item>
            </n-list>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>

    <!-- 新增待办模态框 -->
    <n-modal v-model:show="showAddTodo" preset="dialog" title="新增待办事项">
      <n-form :model="newTodo" label-placement="left" label-width="80">
        <n-form-item label="标题">
          <n-input v-model:value="newTodo.title" placeholder="请输入标题" />
        </n-form-item>
        <n-form-item label="内容">
          <n-input v-model:value="newTodo.content" type="textarea" placeholder="请输入内容" />
        </n-form-item>
        <n-form-item label="截止日期">
          <n-date-picker v-model:value="newTodo.dueDate" type="date" />
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="showAddTodo = false">取消</n-button>
          <n-button type="primary" @click="addTodo">确定</n-button>
        </n-space>
      </template>
    </n-modal>

    <!-- 新增备忘录模态框 -->
    <n-modal v-model:show="showAddMemo" preset="dialog" title="新增备忘录">
      <n-form :model="newMemo" label-placement="left" label-width="80">
        <n-form-item label="标题">
          <n-input v-model:value="newMemo.title" placeholder="请输入标题" />
        </n-form-item>
        <n-form-item label="内容">
          <n-input v-model:value="newMemo.content" type="textarea" placeholder="请输入内容" :rows="4" />
        </n-form-item>
      </n-form>
      <template #action>
        <n-space>
          <n-button @click="showAddMemo = false">取消</n-button>
          <n-button type="primary" @click="addMemo">确定</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMemoTodoStore } from '../stores/memoTodoStore'
import type { MemoTodo } from '../types'

const todoStore = useMemoTodoStore()

const showAddTodo = ref(false)
const showAddMemo = ref(false)

const newTodo = ref({
  title: '',
  content: '',
  dueDate: 0,
})

const newMemo = ref({
  title: '',
  content: '',
})

onMounted(() => {
  todoStore.fetchItems()
})

async function addTodo() {
  if (!newTodo.value.title) return
  
  const item: Omit<MemoTodo, 'id' | 'createdAt'> = {
    type: 'todo',
    title: newTodo.value.title,
    content: newTodo.value.content,
    dueDate: newTodo.value.dueDate ? new Date(newTodo.value.dueDate).toISOString().split('T')[0] : undefined,
    isRecurring: false,
    isCompleted: false,
    isOverdue: false,
  }
  
  await todoStore.addItem(item)
  showAddTodo.value = false
  newTodo.value = { title: '', content: '', dueDate: 0 }
}

async function addMemo() {
  if (!newMemo.value.title) return
  
  const item: Omit<MemoTodo, 'id' | 'createdAt'> = {
    type: 'memo',
    title: newMemo.value.title,
    content: newMemo.value.content,
    isRecurring: false,
    isCompleted: false,
    isOverdue: false,
  }
  
  await todoStore.addItem(item)
  showAddMemo.value = false
  newMemo.value = { title: '', content: '' }
}
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
}

.todo-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.todo-item.overdue {
  border-left: 3px solid #D03050;
  padding-left: 8px;
}

.todo-content {
  flex: 1;
}

.todo-title {
  font-weight: 500;
  margin-bottom: 4px;
}

.todo-date {
  font-size: 12px;
  color: #666;
}

.todo-overdue {
  font-size: 12px;
  color: #D03050;
  font-weight: bold;
}

.memo-item {
  padding: 8px 0;
}

.memo-title {
  font-weight: 500;
  margin-bottom: 4px;
}

.memo-content {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.memo-date {
  font-size: 12px;
  color: #999;
}
</style>
