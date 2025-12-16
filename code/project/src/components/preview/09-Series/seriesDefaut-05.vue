<template>
  <div>
     </div>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
  type: 'bar',
  data: [
    {
      id: 'barData',
      values: [
        { date: 'Monday', class: 'classNo.1', score: 20 },
        { date: 'Monday', class: 'classNo.2', score: 30 },

        { date: 'Tuesday', class: 'classNo.1', score: 25 },
        { date: 'Tuesday', class: 'classNo.2', score: 28 }
      ]
    }
  ],
  seriesField: 'class', // 有明确图表类型的情况下，只需要配置好数据和映射关系即可
  xField: ['date', 'class'],
  yField: 'score'
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
