<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

/**
 * 实现A组和B组上半年的销售数据对比-Compare the sales data of A group and B group in recent years
 [
        { type: 'A', month: '01', value: 129 },
        { type: 'B', month: '01', value: 110 },
        { type: 'A', month: '02', value: 130 },
        { type: 'B', month: '02', value: 123 },
        { type: 'A', month: '03', value: 126 },
        { type: 'B', month: '03', value: 133 },
        { type: 'A', month: '04', value: 117 },
        { type: 'B', month: '04', value: 133 },
        { type: 'A', month: '05', value: 114 },
        { type: 'B', month: '05', value: 133 },
        { type: 'A', month: '06', value: 111 },
        { type: 'B', month: '06', value: 133 },
      ]
 */

const spec = {
  // 1.声明图表类型-Declare the type of chart 
  // type
  // type: 'bar',
  type: 'bar',

  // 2.声明数据-Declare the data
  // data:[{id:xxx,values:[xxx]}]
  data: [{
    id: 'barData',
    values: [
      { type: 'A', month: '01', value: 129 },
      { type: 'B', month: '01', value: 110 },
      { type: 'A', month: '02', value: 130 },
      { type: 'B', month: '02', value: 123 },
      { type: 'A', month: '03', value: 126 },
      { type: 'B', month: '03', value: 133 },
      { type: 'A', month: '04', value: 117 },
      { type: 'B', month: '04', value: 133 },
      { type: 'A', month: '05', value: 114 },
      { type: 'B', month: '05', value: 133 },
      { type: 'A', month: '06', value: 111 },
      { type: 'B', month: '06', value: 133 },
    ]
  }],
 
  // 3.声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
  // xField: ['xxx', ''],

  xField: ['month', 'type'],
  // 4.声明 y 轴字段-Declare the y axis field
  // yField: ['xxx'],
  yField: 'value',
  // 5.用于颜色映射-Declare the series field for color mapping
  // seriesField: ['xxx']
  seriesField: 'type',

  // 6.系列配置: 图元样式,设置柱状图圆角样式-Declare the style of the bar element, set the corner radius
  bar: {
    style: {
      cornerRadius: 4
    }
  },
  // 7.系列配置: 显示图元标签,设置标签位置为顶部-Declare the label of the bar element
  label: {
    visible: true,
    position: 'top'
  },
  
  // 8.配置图例-Declare the legend

  legends: {
    visible:true
  },
  // 9.配置 十字准星 crosshair-Declare the crosshair
  crosshair: {
    xField: { visible: true },
    yField: { visible: true }
  },
  // 10.配置坐标轴，对于 type 不为 'common'(即组合图)的图表，轴的配置会默认生成，所以如果不需要特殊的定制，也可以不声明-Declare the axes,
  // 声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
  // 声明 y 轴字段-Declare the y axis field
  // axes: [
  // ]
  axes: [
    {
      orient: 'bottom'
    },
    {
      orient: 'left',
      domainLine: {
        visible: true
      }
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
