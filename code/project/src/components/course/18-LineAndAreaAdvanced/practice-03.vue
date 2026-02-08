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
  xField: "year",
  yField: "value",
  seriesField: "type",
  line: {
    style: {
      curveType: 'monotone'
    }
  },
  color: {
    type: 'ordinal',
    range: ['#000', 'red', 'yellow']
  }
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
