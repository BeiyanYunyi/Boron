<template>
  <div :class="$style.heroDivParent">
    <div :style="heroStyle" :class="$style.heroDiv"></div>
    <n-image :src="avatar" preview-disabled style="height: 25vh; justify-content: center" />
    <n-h1 :class="$style.title" style="margin-top: 16px; margin-bottom: 0">黎想的博客</n-h1>
    <n-h2 :class="$style.title" style="margin-top: 16px"> 把信拿去吧，你可以假戏真做。</n-h2>
  </div>
  <Container>
    <PostList :md-list="props.mdList" />
  </Container>
</template>

<script lang="ts" setup>
import { NH1, NH2, NImage } from 'naive-ui';
import avatar from '../../renderer/assets/头像圆.png';
import backgroundImg from '../../renderer/assets/hero.jpg';
import Container from '../../renderer/components/Container.vue';
import { IMdInfo } from '../../renderer/utils/listMd';
import PostList from '../../renderer/components/PostList.vue';
import { StyleValue } from 'vue';
const props = defineProps<{ mdList: IMdInfo[] }>();
const heroStyle: StyleValue = {
  background: `rgba(0,0,0,0) url(${backgroundImg}) no-repeat scroll center center / cover`,
};
</script>

<style module>
.heroDiv {
  position: absolute;
  height: 50vh;
  width: 100%;
  top: 4rem;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
.heroDivParent {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50vh;
  margin-top: -8px;
  margin-bottom: 8px;
}
.title {
  color: white;
}
</style>
