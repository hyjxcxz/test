<template>
  <div class="example">
    <ExampleIndex />
  </div>
</template>
<script>
import ExampleIndex from "@/components/example/ExampleIndex.vue";
export default {
  components: {
    ExampleIndex,
  },
};
</script>
<style scoped>
.example {
  /* height: calc(100% - 126px); */
  height: calc(100% - 72px);
}
/* .footer {
  display: none;
} */
</style>
