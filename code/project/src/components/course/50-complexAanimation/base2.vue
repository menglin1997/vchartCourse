<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { default as VChart } from "@visactor/vchart";
// https://www.visactor.com/vchart/demo/combination/easing-visualization // 缓动函数
const spec = {
  type: 'bar',
  data: [
    {
      id: 'id0',
      values: [
        { x: '1', y: 22 },
        { x: '2', y: 43 },
        { x: '3', y: 33 },
        { x: '4', y: 22 },
        { x: '5', y: 10 },
        { x: '6', y: 30 },
        { x: '7', y: 46 },
        { x: '8', y: 21 },
        { x: '9', y: 33 },
        { x: '10', y: 43 },
        { x: '11', y: 42 },
        { x: '12', y: 30 },
        { x: '13', y: 9 },
        { x: '14', y: 46 }
      ]
    }
  ],
  
  xField: ['x'],
  yField: 'y',
  axes: [
    { orient: 'bottom', type: 'band' },
    { orient: 'left', type: 'linear' }
  ],
  animationNormal: {
    bar: [
      {
        loop: true,
        startTime: 100,
        oneByOne: 100,
        timeSlices: [
          {
            delay: 1000,
            effects: {
              channel: {
                fillOpacity: { to: 0.5 }
              },
              easing: 'linear'
            },
            duration: 500
          },
          {
            effects: {
              channel: {
                fillOpacity: { to: 1 }
              },
              easing: 'linear'
            },
            duration: 500
          }
        ]
      }
    ]
  }
};
let vchart;
function show() {
  vchart = new VChart(spec, {
    dom: "chart",
    animation: true, // 加在 spec 根对象，一键全关
  });
  vchart.renderSync();
}
onMounted(() => {
  show();
});
</script>
<style scoped>
#chart {
  width: 600px;
  height: 400px;
}
</style>
