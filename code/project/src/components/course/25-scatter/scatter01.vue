<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
    //   四要素 类型-数据-X-Y
    type: "scatter",
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
  ],
  xField: 'x',
  yField: 'y',
  seriesField:"type"

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
