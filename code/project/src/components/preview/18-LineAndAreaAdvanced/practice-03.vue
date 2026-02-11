<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted, ref } from "vue";
let vchart = null;
const spec = {
  type: "area",
  data: {
    values: [
      // 淘宝 2019-2023
      { type: "淘宝", year: "2019", value: 56230 },
      { type: "淘宝", year: "2020", value: 68540 },
      { type: "淘宝", year: "2021", value: 78920 },
      { type: "淘宝", year: "2022", value: 84560 },
      { type: "淘宝", year: "2023", value: 91280 },

      // 京东 2019-2023
      { type: "京东", year: "2019", value: 32150 },
      { type: "京东", year: "2020", value: 42580 },
      { type: "京东", year: "2021", value: 52340 },
      { type: "京东", year: "2022", value: 59870 },
      { type: "京东", year: "2023", value: 65420 },

      // 拼多多 2019-2023
      { type: "拼多多", year: "2019", value: 18740 },
      { type: "拼多多", year: "2020", value: 28960 },
      { type: "拼多多", year: "2021", value: 43210 },
      { type: "拼多多", year: "2022", value: 36780 },
      { type: "拼多多", year: "2023", value: 68950 },
    ],
  },
  stack: true, // 开启堆叠
  xField: "year",
  yField: "value",
  seriesField: "type", // 分类字段
  legends: [
    {
      visible: true,
      position: "middle",
      orient: "bottom",
      padding: { top: 30 },
    },
  ],
  line: {
    style: {
      curveType: 'monotone' // 曲线类型
    }
  }
  // percent: true, // 开启百分比堆叠
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
