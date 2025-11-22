<template>
  <div class="flattened-data">
    <div class="flattened-data-header">
      <h2>Transform</h2>
    </div>
    <div id="chart"></div>
  </div>
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
        { date: 'Monday', classNo1: 20, classNo2: 30 },
        { date: 'Tuesday', classNo1: 25, classNo2: 28 }
      ],
      transforms: [
        {
          type: 'fold',
          options: {
            key: 'class',      // 新字段名，用于存储原始键名
            value: 'score',    // 新字段名，用于存储原始值
            fields: ['classNo1', 'classNo2'] // 需要展开的字段
          }
        }
      ]
    }
  ],
  seriesField: 'class',
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
<style>
#chart {
  width: 900px;
  height: 600px;
}
</style>