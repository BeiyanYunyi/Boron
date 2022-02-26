<template>
  <Container max-width="768px">
    <n-h1 prefix="bar">{{ props.mdMeta.title }}</n-h1>
    <n-text tag="div">
      <div v-if="props?.htmlStr" v-html="props.htmlStr" :class="$style.md" />
    </n-text>
  </Container>
</template>

<script lang="ts" setup>
import { NH1, NText } from 'naive-ui';
import Container from './Container.vue';
import 'highlight.js/styles/github.css';
import IMdMeta from '../../types/IMdMeta';
const props = defineProps<{ htmlStr: string; mdMeta: IMdMeta }>();
</script>

<style module>
.md {
  font-family: 'quote', 'Helvetica Neue', 'Luxi Sans', 'DejaVu Sans', 'Hiragino Sans GB',
    'Microsoft Yahei', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji',
    'Segoe UI Symbol', 'Android Emoji', 'EmojiSymbols';
}
.md blockquote {
  border-left: 4px solid rgb(224, 224, 230);
  padding-left: 12px;
  margin-left: 0px;
  color: rgb(51, 54, 57);
}
</style>
