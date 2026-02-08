<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted, ref } from "vue";
let vchart = null;
const spec = {
};

onMounted(() => {
  vchart = new VChart(spec, {
    dom: "chart",
    animation: false,
  });
  vchart.renderSync();
});
</script>
<style></style>
