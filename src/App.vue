<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

// 主题配置：中性色为主，状态色仅用于状态传达
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2080F0',
    primaryColorHover: '#4098FC',
    successColor: '#18A058',
    warningColor: '#F0A020',
    errorColor: '#D03050',
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #F5F7FA;
}
</style>
