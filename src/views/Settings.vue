<template>
  <div class="settings-page">
      <n-card :bordered="false" title="系统设置">
        <n-tabs type="line">
          <!-- 数据备份 -->
          <n-tab-pane name="backup" tab="数据备份">
            <n-space vertical :size="16">
              <n-alert type="info" :bordered="false">
                定期备份您的数据，防止数据丢失。
              </n-alert>
              
              <n-card title="完整数据库备份" size="small">
                <n-space align="center">
                  <span>导出完整的 SQLite 数据库文件 (.db)</span>
                  <n-button type="primary" @click="exportDatabase">
                    <template #icon>
                      <n-icon><DownloadOutline /></n-icon>
                    </template>
                    导出完整数据库
                  </n-button>
                </n-space>
              </n-card>

              <n-card title="监视目录配置" size="small">
                <n-list>
                  <n-list-item v-for="dir in watchedDirectories" :key="dir">
                    <n-space justify="space-between">
                      <span>{{ dir }}</span>
                      <n-button size="small" @click="removeDirectory(dir)">移除</n-button>
                    </n-space>
                  </n-list-item>
                </n-list>
                <n-button class="mt-8" @click="addDirectory">添加监视目录</n-button>
              </n-card>
            </n-space>
          </n-tab-pane>

          <!-- 系统信息 -->
          <n-tab-pane name="about" tab="关于系统">
            <n-descriptions :column="1" label-placement="left" bordered>
              <n-descriptions-item label="系统名称">教学助手系统</n-descriptions-item>
              <n-descriptions-item label="版本号">v0.1.0</n-descriptions-item>
              <n-descriptions-item label="技术栈">Tauri + Vue 3 + Rust + SQLite</n-descriptions-item>
              <n-descriptions-item label="数据库状态">
                <n-tag type="success">正常</n-tag>
              </n-descriptions-item>
              <n-descriptions-item label="数据库位置">
                %APPDATA%/teaching-assistant/data.db
              </n-descriptions-item>
            </n-descriptions>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DownloadOutline } from '@vicons/ionicons5'

const watchedDirectories = ref<string[]>([
  'D:\\TeachingMaterials',
])

function exportDatabase() {
  // Mock: 导出数据库
  console.log('Export database')
}

function addDirectory() {
  // Mock: 添加目录
  const newDir = prompt('请输入目录路径:')
  if (newDir && !watchedDirectories.value.includes(newDir)) {
    watchedDirectories.value.push(newDir)
  }
}

function removeDirectory(dir: string) {
  watchedDirectories.value = watchedDirectories.value.filter(d => d !== dir)
}
</script>

<style scoped>
.settings-page {
  max-width: 1000px;
}

.mt-8 {
  margin-top: 8px;
}
</style>
