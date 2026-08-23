<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { default as VChart } from "@visactor/vchart";
// https://www.visactor.com/vchart/demo/combination/easing-visualization // 缓动函数
const spec = {
  type: 'common',
  seriesField: 'color',
  data: [
    {
      id: 'id0',
      values: [
        { x: 'Monday', type: 'breakfast', y: 15 },
        { x: 'Monday', type: 'lunch', y: 25 },
        { x: 'Tuesday', type: 'breakfast', y: 12 },
        { x: 'Tuesday', type: 'lunch', y: 30 },
        { x: 'Wednesday', type: 'breakfast', y: 15 },
        { x: 'Wednesday', type: 'lunch', y: 24 },
        { x: 'Thursday', type: 'breakfast', y: 10 },
        { x: 'Thursday', type: 'lunch', y: 25 },
        { x: 'Friday', type: 'breakfast', y: 13 },
        { x: 'Friday', type: 'lunch', y: 20 },
        { x: 'Saturday', type: 'breakfast', y: 10 },
        { x: 'Saturday', type: 'lunch', y: 22 },
        { x: 'Sunday', type: 'breakfast', y: 12 },
        { x: 'Sunday', type: 'lunch', y: 19 }
      ]
    },
    {
      id: 'id1',
      values: [
        { x: 'Monday', type: 'drinks', y: 22 },
        { x: 'Tuesday', type: 'drinks', y: 43 },
        { x: 'Wednesday', type: 'drinks', y: 33 },
        { x: 'Thursday', type: 'drinks', y: 22 },
        { x: 'Friday', type: 'drinks', y: 10 },
        { x: 'Saturday', type: 'drinks', y: 30 },
        { x: 'Sunday', type: 'drinks', y: 46 }
      ]
    }
  ],
  series: [
    {
      type: 'bar',
      dataIndex: 0,
      seriesField: 'type',
      dataIndex: 0,
      xField: ['x', 'type'],
      yField: 'y',
      animationAppear: {
        bar: {
          type: 'moveIn', // 
          options:{ // moveIn配置  移入移出动画
            direction: 'x', // 缩放入动画方向 默认xy
            orient: 'negative', // 默认 positive 正方向 negative 负方向
            offset: 100, // 移动距离 默认0
            point:{
              x:0,y:0 
            }

          },
          // options:{ scaleIn配置
          //   direction: 'x', // 缩放入动画方向 默认xy
          // },
          oneByOne: true,
          duration: 500,
          totalTime: 3500
        }
      }
    },
    {
      type: 'line',
      dataIndex: 1,
      seriesField: 'type',
      xField: 'x',
      yField: 'y',
      stack: false,
      point:{
        style:{
          shape: 'star',
          angle: 180,
          size: 20
        }
      },
      animationAppear: {
        // 点图元动画配置
        point: {
           type: 'rotateIn', // 
          delay: 3500,
          duration: 500
        },
        // 线图元动画配置
        line: {
           type: 'scaleIn', // 
          duration: 1500,
          delay: 4000,
          easing: 'cubicOut'
        }
      }
    }
  ],
  axes: [{ orient: 'left' }, { orient: 'bottom', label: { visible: true }, type: 'band' }],
  legends: {
    visible: true,
    orient: 'bottom'
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
