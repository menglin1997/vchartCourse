<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  type: 'histogram',
  xField: 'from',
  x2Field: 'to',
  yField: 'profit',
  seriesField: 'type',
  data: [
    {
      name: 'data1',
      values: [
        {
          from: 0,
          to: 10,
          profit: 2,
          type: 'A'
        },
        {
          from: 10,
          to: 16,
          profit: 3,
          type: 'B'
        },
        {
          from: 16,
          to: 18,
          profit: 15,
          type: 'C'
        },
        {
          from: 18,
          to: 26,
          profit: 12,
          type: 'D'
        },
        {
          from: 26,
          to: 32,
          profit: 22,
          type: 'E'
        },
        {
          from: 32,
          to: 56,
          profit: 7,
          type: 'F'
        },
        {
          from: 56,
          to: 62,
          profit: 17,
          type: 'G'
        }
      ]
    }
  ]
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
