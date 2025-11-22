<template>
  <div class="flattened-data">
    <div class="flattened-data-header">
      <h2>展平的数据(Flattened Data)</h2>
    </div>
    <div id="chart"></div>
  </div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
  data: [
    {
      id: "barData",
      values: [
        { month: "Monday", sales: 22 },
        { month: "Tuesday", sales: 13 },
        { month: "Wednesday", sales: 25 },
        { month: "Thursday", sales: 29 },
        { month: "Friday", sales: 38 },
      ],
    },
  ],
  type: "bar",
  xField: "month",
  yField: "sales",
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
<style>
#chart {
  width: 900px;
  height: 600px;
}
</style>