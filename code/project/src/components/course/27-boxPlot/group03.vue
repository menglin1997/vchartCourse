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
      values:  [
        { "class": "Class1", "gender": "Male",   "min": 45, "q1": 62, "median": 74, "q3": 85, "max": 96 },
        { "class": "Class1", "gender": "Female", "min": 52, "q1": 68, "median": 79, "q3": 90, "max": 98 },
        { "class": "Class2", "gender": "Male",   "min": 38, "q1": 55, "median": 68, "q3": 80, "max": 92 },
        { "class": "Class2", "gender": "Female", "min": 48, "q1": 65, "median": 76, "q3": 88, "max": 95 }
      ]
    }],
    xField: ["class", "gender"],
    minField: 'min',
    q1Field: 'q1',
    medianField: 'median',
    q3Field: 'q3',
    maxField: 'max',
    boxPlot:{
      style:{
        boxWidth: 20, // 不指定就是自适应宽度
        shaftShape: 'line'
      }
    },
    seriesField:"gender"

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
