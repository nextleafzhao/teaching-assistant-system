<template>
  <n-layout has-sider class="app-layout">
    <!-- 左侧导航栏 -->
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="220" :native-scrollbar="false"
      show-trigger @collapse="collapsed = true" @expand="collapsed = false">
      <div class="logo">
        <h2 v-if="!collapsed">教学助手</h2>
        <h2 v-else>助教</h2>
      </div>
      <n-menu :options="menuOptions" :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22"
        :icon-size="20" :value="activeKey" @update:value="handleMenuUpdate" />
    </n-layout-sider>

    <!-- 中间主内容区 -->
    <n-layout-content class="main-content">
      <router-view />
    </n-layout-content>

    <!-- 右侧抽屉 -->
    <n-drawer v-model:show="showDrawer" :width="500" placement="right">
      <n-drawer-content :title="drawerTitle" closable>
        <slot name="drawer" />
      </n-drawer-content>
    </n-drawer>
  </n-layout>
</template>

<script setup lang="ts">
import { ref, h, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  PeopleOutline,
  CalendarOutline,
  BookOutline,
  FolderOutline,
  BarChartOutline,
  SettingsOutline,
  HomeOutline,
} from '@vicons/ionicons5'

const router = useRouter()
const route = useRoute()

const collapsed = ref(false)
const showDrawer = ref(false)
const drawerTitle = ref('')

const activeKey = computed(() => route.name as string)

// 打开抽屉
function openDrawer(title: string) {
  drawerTitle.value = title
  showDrawer.value = true
}

// 关闭抽屉
function closeDrawer() {
  showDrawer.value = false
}

// 暴露给子组件使用
defineExpose({
  openDrawer,
  closeDrawer,
  showDrawer,
})

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '工作台',
    key: 'Dashboard',
    icon: renderIcon(HomeOutline),
  },
  {
    label: '学生管理',
    key: 'Students',
    icon: renderIcon(PeopleOutline),
  },
  {
    label: '排课日历',
    key: 'Schedule',
    icon: renderIcon(CalendarOutline),
  },
  {
    label: '教学计划',
    key: 'Plans',
    icon: renderIcon(BookOutline),
  },
  {
    label: '教学资源库',
    key: 'Resources',
    icon: renderIcon(FolderOutline),
  },
  {
    label: '成绩管理',
    key: 'Grades',
    icon: renderIcon(BarChartOutline),
  },
  {
    label: '学情分析',
    key: 'Analytics',
    icon: renderIcon(BarChartOutline),
  },
  {
    label: '系统设置',
    key: 'Settings',
    icon: renderIcon(SettingsOutline),
  },
]

// 菜单点击事件处理
function handleMenuUpdate(key: string) {
  console.log('[Menu] Navigate to:', key)
  router.push({ name: key }).catch(err => {
    console.error('[Menu] Navigation failed:', err)
  })
}
</script>

<style scoped>
.app-layout {
  height: 100vh;
}

.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  color: #333;
  font-weight: bold;
}

.logo h2 {
  margin: 0;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main-content {
  background-color: #F5F7FA;
  padding: 20px;
  overflow: auto;
}
</style>
