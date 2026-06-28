<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart,registerLiquidChart } from "@visactor/vchart";
import { onMounted } from "vue";
registerLiquidChart()
const spec = {
  //   四要素 类型-数据-X-Y
  type: 'liquid',
  data: {
    values: [{
      value: 0.8
    }]
  },
  valueField:"value",
  maskShape: 'drop', // 声明为轮廓形状 
  outlineMargin: 1, // 外轮廓和region边界的paddign
  outlinePadding: 10, // 外轮廓和region边界的padding
  indicatorSmartInvert: true,// 是否开启只能反射
  liquidBackground:{ // 水波背景图元
    style:{
      fill:'#f409eff'
    }
  },
  indicator:{
    visible:true,
    title:{
      visible:true,
      style:{
        text:'进度'
      }
    },
    content:[{
      visible:true,
      style:{
        fill:'black',
        text:'50%'
      }
    }]
  }
 
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
