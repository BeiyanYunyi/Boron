<template>
  <n-page-header :class="$style.header">
    <template #title>
      <a href="/" :class="$style.homeLink">黎想的博客</a>
    </template>
    <template #avatar>
      <a href="/" :class="$style.homeLink" :style="{ paddingLeft: '8px' }">
        <NAvatar round :src="logo" size="large" />
      </a>
    </template>
    <template #subtitle>
      <n-space>
        <n-a href="/links" :style="{ 'text-decoration': 'none' }">
          <n-icon :component="LinkIcon" />
          友链
        </n-a>
        <n-a href="/about" :style="{ 'text-decoration': 'none' }">
          <n-icon :component="InfoIcon" />
          关于
        </n-a>
      </n-space>
    </template>
  </n-page-header>
</template>

<script lang="ts" setup>
import { NPageHeader, NAvatar, NSpace, NA, NIcon } from 'naive-ui';
import LinkIcon from '@vicons/fa/Link';
import InfoIcon from '@vicons/fa/InfoCircle';
import logo from '../assets/favicon.ico';
const isBrowser = typeof window !== 'undefined';
</script>

<style module>
.header {
  position: sticky;
  top: 0;
  height: 3rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  z-index: 1000;
}
.homeLink {
  text-decoration: none;
  color: inherit;
}
</style>
