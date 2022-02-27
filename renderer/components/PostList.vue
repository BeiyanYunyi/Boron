<template>
  <n-space vertical>
    <n-a v-for="md in props.mdList" :href="`/posts/${md.name}`" :class="$style.aStyle">
      <n-card :title="md.info.title" hoverable size="small">
        <div>
          {{ md.info.description.replaceAll('\r\n', '\n') }}
        </div>
        <template #footer>{{ getTimeStr(md.info.date) }}</template>
        <template #action>
          <n-space v-if="md.info.tag && md.info.tag.length !== 0">
            <n-tag v-for="tag in md.info.tag">{{ tag }}</n-tag>
          </n-space>
        </template>
      </n-card>
    </n-a>
  </n-space>
</template>

<script lang="ts" setup>
import { NSpace, NCard, NA, NTag } from 'naive-ui';
import { IMdInfo } from '../utils/listMd';
import getTimeStr from '../../renderer/utils/getTimeStr';

const props = defineProps<{ mdList: IMdInfo[] }>();
</script>

<style module>
.aStyle {
  text-decoration: none;
}
</style>
