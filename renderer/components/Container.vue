<template>
  <div :class="$style.outerContainer">
    <div :style="{ maxWidth: maxWidth || '80vw' }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ maxWidth?: string }>();
</script>

<style module>
.outerContainer {
  display: flex;
  justify-content: center;
}
</style>
