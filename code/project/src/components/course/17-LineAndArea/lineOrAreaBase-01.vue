<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted, ref } from "vue";
let vchart = null;

// 数据

const spec = {
  type: 'area',
  data:{
    values:[
      { city: '杭州', value: 8 },
      { city: '上海', value: 10 },
      { city: '重庆', value: 9 },
      { city: '北京', value: 2 },
      { city: '贵阳', value: 6 },
    ]
  },
  xField: 'city',
  yField: 'value',
  
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
