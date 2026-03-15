<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const data = [
  {
    value: "159",
    type: "Tradition Industries",
  },
  {
    value: "50",
    type: "Business Companies",
  },
  {
    value: "13",
    type: "Customer-facing Companies",
  },
];
const spec = {
  type: "rose",
  data: [
    {
      values: data,
    },
  ],
  seriesField: 'type',
  categoryField: 'type',
  valueField: 'value',
  // outerRadius: 0.8,
  // innerRadius: 0.2,
  tooltip: { visible: true },
  legends: { visible: true }

};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
<style scoped>
#chart {
  width: 600px;
  height: 400px;
}
</style>
