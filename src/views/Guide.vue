<template>
  <div class="guide">
    <!-- <GuideIndex /> -->
    <iframe
      src="/html/guide.html"
      frameborder="0"
      style="width: 100%; height: 100%"
      id="iframeBox"
    ></iframe>
  </div>
</template>
<script>
// import GuideIndex from "@/components/guide/GuideIndex.vue";

export default {
  name: "Guide",
  components: {
    // GuideIndex,
  },
};
</script>

<style scoped>
.guide {
  height: calc(100% - 70px);
}
.footer {
  display: none;
}
</style>
