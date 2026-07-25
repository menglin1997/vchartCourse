<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { default as VChart } from "@visactor/vchart";

// 需要手动注册后才能使用，注册和使用方式如下：
import { registerCandlestickChart } from '@visactor/vchart-extension';

// CDN方式如下：
// <script src="https://cdn.jsdelivr.net/npm/@visactor/vchart@2.1.1/build/index.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/@visactor/vchart-extension@2.1.1/build/index.min.js"></script>

registerCandlestickChart();
const data = [
  { time: '2024-07-01', open: 100, close: 130, high: 135, low: 90 },
  { time: '2024-07-02', open: 130, close: 80, high: 140, low: 75 },
  { time: '2024-07-03', open: 80, close: 150, high: 155, low: 70 },
  { time: '2024-07-04', open: 150, close: 140, high: 160, low: 105 },
  { time: '2024-07-05', open: 140, close: 170, high: 180, low: 115 },
  { time: '2024-07-06', open: 170, close: 170, high: 175, low: 95 },
  { time: '2024-07-07', open: 170, close: 100, high: 175, low: 95 },
  { time: '2024-07-08', open: 100, close: 160, high: 210, low: 90 }
];

const spec = {
  type: 'candlestick',
  xField: 'time',
  openField: 'open',
  closeField: 'close',
  highField: 'high',
  lowField: 'low',
  data: [
    {
      values: data
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
