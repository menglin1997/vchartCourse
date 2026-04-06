<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { median } from "@visactor/vchart/esm/util";
import { onMounted } from "vue";
const spec = {
    //   四要素 类型-数据-X-Y
    type: "boxPlot",
    data: [{
      values: [
        { x: 'A', min: 5, q1: 8, median: 10, q3: 12, max: 20 },
        { x: 'B', min: 5, q1: 8, median: 10, q3: 12, max: 20 },
        { x: 'C', min: 5, q1: 8, median: 10, q3: 12, max: 20 }
      ]
    }],
    xField: "x",
    minField: 'min',
    q1Field: 'q1',
    medianField: 'median',
    q3Field: 'q3',
    maxField: 'max',
    boxPlot:{
      style:{
        boxWidth: 20, // 不指定就是自适应宽度
        shaftShape: 'bar'
      }
    }

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
