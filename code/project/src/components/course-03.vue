<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

// 实现A组和B组近年的销售数据对比-Compare the sales data of A group and B group in recent years
const spec = {
  // 1.声明图表类型-Declare the type of chart

  // 2.声明数据-Declare the data
 
  // 3.声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping

  // 4.声明 y 轴字段-Declare the y axis field

  // 5.用于颜色映射-Declare the series field for color mapping

  // 6.系列配置: 图元样式,设置圆角样式-Declare the style of the bar element, set the corner radius
  
  // 7.系列配置: 图元标签-Declare the label of the bar element

  // 8.配置图例-Declare the legend

  // 9.配置 十字准星 crosshair-Declare the crosshair
  
  // 10.配置坐标轴，对于 type 不为 'common'(即组合图)的图表，轴的配置会默认生成，所以如果不需要特殊的定制，也可以不声明-Declare the axes,
  // 声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
  // 声明 y 轴字段-Declare the y axis field

};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
