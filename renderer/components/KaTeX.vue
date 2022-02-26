<template><div v-html="katex.renderToString(latex, { displayMode: true })" /></template>
<script lang="ts" setup>
import katex from 'katex';
import 'katex/dist/katex.css';
defineProps<{ latex: string }>();
</script>
<style></style>
