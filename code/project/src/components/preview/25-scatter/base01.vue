<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  type: 'scatter',
  xField: 'x',
  yField: 'y',
  seriesField: 'type',
  data: [
    {
      name: 'data',
      values: [
        {
          y: 10,
          x: '用户1',
          type: 'A'
        },
        {
          y: 31,
          x: '用户2',
          type: 'B'
        },
        {
          y: 15,
          x: '用户3',
          type: 'C'
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
