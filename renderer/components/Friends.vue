<template>
  <n-grid item-responsive x-gap="8" y-gap="8" cols="1 400:2 800:3">
    <n-grid-item v-for="friend in friends">
      <Friend :friend="friend" />
    </n-grid-item>
  </n-grid>
</template>
<script lang="ts" setup>
import { NGrid, NGridItem } from 'naive-ui';
import friends from '../../Boron/data/friends.json';
import Friend from './Friend.vue';
</script>
<style module></style>
