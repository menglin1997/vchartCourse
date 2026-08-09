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
      id: 'barData',
      values: [
        { month: 'Monday', sales: 22 },
        { month: 'Tuesday', sales: 13 },
        { month: 'Wednesday', sales: 25 },
        { month: 'Thursday', sales: 29 },
        { month: 'Friday', sales: 38 }
      ]
    }
  ],
  xField: 'month',
  yField: 'sales',
  animationAppear: {
    // duration: 3000, // 动画持续时间 ms
    // delay: 2000, // 延迟时间 ms
    easing: 'bounceOut', // 缓动函数
    oneByOne: 1000, // 每个数据项的动画间隔时间 ms
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
