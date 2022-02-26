<template>
  <n-a :href="friend.url" :class="$style.friendCard">
    <n-card hoverable :class="$style.friendCard">
      <n-thing :title="friend.title" :description="friend.description">
        <template #avatar>
          <n-avatar :src="props.friend.avatar" />
        </template>
      </n-thing>
    </n-card>
  </n-a>
</template>
<script lang="ts" setup>
import { NThing, NAvatar, NA, NCard, NGridItem } from "naive-ui";
import IFriend from "../../types/IFriend";
const props = defineProps<{ friend: IFriend }>();
</script>
<style module>
.friendCard {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
