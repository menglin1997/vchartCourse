<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted, ref } from "vue";
let vchart = null;
const spec = {
  type: 'line', //  line 折线图， area 面积图
  data: {
    values: [
      { city: '杭州', value: 8 },
      { city: '上海', value: null },
      { city: '重庆', value: 9 },
      { city: '北京', value: 2 },
      { city: '贵阳', value: 6 },
    ]
  },
  xField: 'city', //  映射X轴（时间/类别）
  yField: 'value', //   映射Y轴（数值）
  axes: [{ orient: 'bottom', type: 'band' }],
  tooltip: { visible: true },
  invalidType: 'break', // link 忽略该点保持连续  \break 在该数据点处断开 \zero 该点默认数值为 0 \ignore不处理
  point: {
    style: {
      shape: 'triangle', // 形状：圆、方、三角等
      size: 7,           // 大小
      fill: '#FF6B6B'    // 颜色
    }
  },
  // point: { visible: false }, // 隐藏标记点
  line: {
    style: {
      // stroke: { 
      //   gradient: 'linear', // 线性渐变
      //   stops: [
      //     { offset: 0, color: '#FF6B6B' },
      //     { offset: 1, color: '#4ECDC4' }
      //   ]
      // }

      stroke: { // 渐变色划分
        gradient: 'linear',
        stops: [
          { offset: 0, color: 'green' },
          { offset: 0.7, color: 'green' },
          { offset: 0.7, color: 'red' },
          { offset: 1, color: 'red' }
        ]
      },
      // curveType: 'monotone' // 平滑曲线
      curveType: 'step' // 或 'stepAfter'、'stepBefore'
    }
  },
  stroke: {
    gradient: 'linear',
    stops: [
      { offset: 0, color: 'green' },
      { offset: 0.7, color: 'green' },
      { offset: 0.7, color: 'red' },
      { offset: 1, color: 'red' }
    ]
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
