<template>
  <div class="guide">
    <GuideIndex />
  </div>
</template>
<script>
import GuideIndex from "@/components/guide/GuideIndex.vue";

export default {
  name: "Guide",
  components: {
    GuideIndex,
  },
};
</script>

<style scoped>
.guide {
  height: calc(100% - 126px);
}
</style>
