<template>
  <!-- 
    1- 实现A组和B组上半年的销售数据对比折线图-Compare the sales data of A group and B group in recent years
    2- 给图表添加标题：(A组和B组上半年的销售数据对比)、标签、图例-Add a title, rounded corners, and legend to the chart
    3- 给图表添加边框-Add a border to the chart
    4- 鼠标经过折线图，当前图元变绿色 其他图元变灰色-Add interaction, when the mouse hovers over the line chart, the current element changes to green, and other elements change to gray 
  -->

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
  // 1- 实现A组和B组上半年的销售数据对比折线图-Compare the sales data of A group and B group in recent years
  // 1.1 声明图表类型-Declare the type of chart
  // type: "xxx",
  type: "line",

  // 1.2 一些图表正常显示的必要条件-some necessary conditions for the chart to display normally
  // 1.2.1 声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
  // xField: ['xxx', ''],
  xField: ["month", "type"],

  //  1.2.2 声明 y 轴字段-Declare the y axis field
  // // yField: ['xxx'],
  yField: "value",

  // 1.2.3 声明用于颜色映射的字段-Declare the series field for color mapping
  // seriesField: ['xxx']
  seriesField: ["type"],

  // 1.2.3 声明数据-Declare the data
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

  // 2- 给图表添加标题：A组和B组上半年的销售数据对比、圆角和图例-Add a title, rounded corners, and legend to the chart


  // 2.1 声明标题：A组和B组上半年的销售数据对比-Declare the title
  // title: {
  //   text: "xxx",
  // },
    title:{
    text: 'A组和B组上半年的销售数据对比'
  },

  // 2.2 声明标签：显示图元标签,设置标签位置为顶部-Declare the label of the line element
  // label: {
  //   visible: Boolean,
  //   position: "",
  // },
  label: {
    visible: true,
    position: "top",
  },

  // 2.3 配置图例-Declare the legend
  // legends: {
  //   visible: Boolean,
  // },
  legends: {
    visible: true,
  },

  // 3 声明边框-Declare the border
  // region: [
  //   {
  //     style: {
  //       stroke: 'xxx',
  //       lineWidth: xxx
  //     }
  //   }
  // ]
  region: [
    {
      style:{
        stroke: '#1971c2',
        lineWidth: 2
      }
    }
  ],

  // 4 声明标记点：当鼠标悬停在点上时，显示该月的销售数据-Declare the point
  // point: {
  //   state: {
  //     dimension_hover: {
  //       fill: "xxx",
  //     },
  //     dimension_hover_reverse: {
  //       fill: "xxx",
  //     },
  //   },
  // },
  point: {
    state: {
      dimension_hover:{
        fill:"green"
      },
      dimension_hover_reverse:{
        fill:"gray"
      }
    }
  }
};
onMounted(() => {
  const vchart = new VChart(spec,{
    dom:"chart"
  })
  vchart.renderSync();
  // const vchart = new VChart(spec, {
  //   dom: "chart",
  // });
  // vchart.renderSync();
});
</script>
