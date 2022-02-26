<template>
  <div>
    <Header />
    <slot />
  </div>
  <!--<n-page-header subtitle="拿去吧！"></n-page-header>-->
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';
</script>

<style module></style>
