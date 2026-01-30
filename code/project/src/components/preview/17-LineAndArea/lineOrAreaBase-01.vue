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
      { city: '上海', value: 10 },
      { city: '重庆', value: 9 },
      { city: '北京', value: 2 },
      { city: '贵阳', value: 6 },
    ]
  },
  xField: 'city', //  映射X轴（时间/类别）
  yField: 'value', //   映射Y轴（数值）
  axes: [{ orient: 'bottom', type: 'band' }],
  tooltip: { visible: true },
  point: { // 点的样式
    style: {
      shape: 'triangle',
      size: 7
    }
  },
  line: {
    style: {
      lineDash: data => {
        if (data.value>8) {
          return [5, 5];
        }
        return [0];
      }
    }
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
