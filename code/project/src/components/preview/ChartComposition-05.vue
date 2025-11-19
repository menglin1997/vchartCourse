<template>

  <div>
    1- 实现A组和B组上半年的销售数据对比折线图-Compare the sales data of A group and B group in recent years
    
  </div>
  <div>
    2- 给图表添加标题、标签、图例-Add a title, label, and legend to the chart
  </div>
  <div>
    3- 给图表添加边框-Add a border to the chart
  </div>
  <div>
    4- 鼠标经过折线图，当前图元变绿色 其他图元变灰色-Add interaction, when the mouse hovers over the line chart, the current element changes to green, and other elements change to gray 
  </div>

  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
  // 声明图表类型-Declare the type of chart
  type: "line",

  // 声明数据-Declare the data
  // data:[{id:xxx,values:[xxx]}]
  data: [
    {
      id: "lineData",
      values: [
        { type: "A", month: "01", value: 129 },
        { type: "B", month: "01", value: 110 },
        { type: "A", month: "02", value: 130 },
        { type: "B", month: "02", value: 123 },
        { type: "A", month: "03", value: 126 },
        { type: "B", month: "03", value: 133 },
        { type: "A", month: "04", value: 117 },
        { type: "B", month: "04", value: 133 },
        { type: "A", month: "05", value: 114 },
        { type: "B", month: "05", value: 133 },
        { type: "A", month: "06", value: 111 },
        { type: "B", month: "06", value: 133 },
      ],
    },
  ],

  // 声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
  // xField: ['xxx', ''],

  xField: ["month", "type"],
  // 声明 y 轴字段-Declare the y axis field
  // yField: ['xxx'],
  yField: "value",
  // 用于颜色映射-Declare the series field for color mapping
  // seriesField: ['xxx']
  seriesField: "type",
  title: {
    text: "A组和B组上半年的销售数据对比",
  },

  // 系列配置: 显示图元标签,设置标签位置为顶部-Declare the label of the bar element
  label: {
    visible: true,
    position: "top",
  },


  region: [
    {
      style: {
        stroke: '#1971c2',
        lineWidth: 2
      }
    }
  ],

  point: {
    state: {
      dimension_hover: {
        fill: "green",
      },
      dimension_hover_reverse: {
        fill: "gray",
      },
    },
  },
  // 配置图例-Declare the legend

  legends: {
    visible: true,
  },
  
  // 配置坐标轴，对于 type 不为 'common'(即组合图)的图表，轴的配置会默认生成，所以如果不需要特殊的定制，也可以不声明-Declare the axes,
  // 声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
  // 声明 y 轴字段-Declare the y axis field
  // axes: [
  // ]
  // axes: [
  //   {
  //     orient: "bottom",
  //   },
  //   {
  //     orient: "left",
  //     domainLine: {
  //       visible: true,
  //     },
  //   },
  // ],
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
