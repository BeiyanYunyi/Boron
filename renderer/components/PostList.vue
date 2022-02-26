<template>
  <n-space vertical>
    <n-a v-for="md in props.mdList" :href="`/posts/${md.name}`" :class="$style.aStyle">
      <n-card :title="md.info.title" hoverable>
        <div v-if="md.info.description">
          {{ md.info.description }}
        </div>
        <template #footer>{{ getTimeStr(md.info.date) }}</template>
      </n-card>
    </n-a>
  </n-space>
</template>

<script lang="ts" setup>
import { NSpace, NCard, NA } from 'naive-ui';
import { IMdInfo } from '../utils/listMd';
import getTimeStr from '../../renderer/utils/getTimeStr';

const props = defineProps<{ mdList: IMdInfo[] }>();
</script>

<style module>
.aStyle {
  text-decoration: none;
}
</style>
