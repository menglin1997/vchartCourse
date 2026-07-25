<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { default as VChart } from "@visactor/vchart";

// 需要手动注册后才能使用，注册和使用方式如下：
import { registerCandlestickChart } from '@visactor/vchart-extension';
/**
 * // CDN方式如下：
// < src="https://cdn.jsdelivr.net/npm/@visactor/vchart@2.1.1/build/index.min.js"></>
// src="https://cdn.jsdelivr.net/npm/@visactor/vchart-extension@2.1.1/build/index.min.js">

 * 
 */

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
  type: 'candlestick', // 类型
  data: [{
    values: data
  }],
  xField: 'time', // 时间轴字段
  openField: 'open', // 开盘价字段
  closeField: 'close', // 收盘价字段
  highField: 'high', // 最高价字段
  lowField: 'low', // 最低价字段
  candlestick:{
    style:{
        lineWidth: 2, //边框宽度
        boxWidth: 20, //盒子宽度
    }
  },
  rising:{ // 上涨
    style:{
        boxFill: 'yellow', //盒子填充色
        stroke: 'yellow', //边框颜色
    }
  },
  falling:{ // 下跌
  },
  doji:{

  },
  animationAppear:{
    duration: 1000, // 动画持续时间
    type: 'candlestickScaleIn', // 动画类型 必填 candlestickScaleIn \ candlestickScaleOut
    easing: 'easeOut', // 动画缓动函数
  }

};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
    animation: true,   // 加在 spec 根对象，一键全关
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
