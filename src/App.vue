<template>
  <div id="app">
    <!-- <Examples/> -->
    <Index />
  </div>
</template>

<script>
import "@/assets/scss/common/common.scss";
import Index from "@/views/index";
import Examples from "@/views/example";
export default {
  name: "app",
  components: {
    Index,
    Examples
  }
};
</script>

<style>
</style>
