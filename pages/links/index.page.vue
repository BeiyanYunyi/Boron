<template>
  <Container>
    <n-h1 prefix="bar" align-text>
      <n-text type="primary">友链及他人文章收藏</n-text>
    </n-h1>
    <Friends />
  </Container>
</template>
<script lang="ts" setup>
import { NH1, NText } from 'naive-ui';
import Friends from '../../renderer/components/Friends.vue';
import Container from '../../renderer/components/Container.vue';
</script>
<style module></style>
