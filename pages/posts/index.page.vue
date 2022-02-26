<template>
  <Preview :html-str="props.htmlStr" :md-meta="props.data" />
</template>

<script lang="ts" setup>
import Preview from '../../renderer/components/Preview.vue';
import IMdMeta from '../../types/IMdMeta';
const props = defineProps<{ htmlStr: string; data: IMdMeta }>();
</script>
