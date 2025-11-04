<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

// 实现A组和B组近年的销售数据对比-Compare the sales data of A group and B group in recent years
const spec = {
  // 1.声明图表类型-Declare the type of chart
  type: 'bar',
  // 2.声明数据-Declare the data
  data: [
    {
      id: 'barData',
      values: [
        { type: 'A', year: '1930', value: 129 },
        { type: 'A', year: '1940', value: 133 },
        { type: 'A', year: '1950', value: 130 },
        { type: 'A', year: '1960', value: 126 },
        { type: 'A', year: '1970', value: 117 },
        { type: 'A', year: '1980', value: 114 },
        { type: 'A', year: '1990', value: 111 },
        { type: 'A', year: '2000', value: 89 },
        { type: 'A', year: '2010', value: 80 },
        { type: 'A', year: '2018', value: 80 },
        { type: 'B', year: '1930', value: 22 },
        { type: 'B', year: '1940', value: 13 },
        { type: 'B', year: '1950', value: 25 },
        { type: 'B', year: '1960', value: 29 },
        { type: 'B', year: '1970', value: 38 },
        { type: 'B', year: '1980', value: 41 },
        { type: 'B', year: '1990', value: 57 },
        { type: 'B', year: '2000', value: 87 },
        { type: 'B', year: '2010', value: 98 },
        { type: 'B', year: '2018', value: 99 }
      ]
    }
  ],
  // 3.声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
  xField: ['year', 'type'],
  // 4.声明 y 轴字段-Declare the y axis field
  yField: 'value',
  // 5.用于颜色映射-Declare the series field for color mapping
  seriesField: 'type',
  // 6.系列配置: 图元样式-Declare the style of the bar element, set the corner radius
  bar: {
    style: {
      cornerRadius: 4
    }
  },
  // 7.系列配置: 图元标签-Declare the label of the bar element
  label: {
    visible: true,
    position: 'top'
  },
  // 8.配置图例-Declare the legend
  legends: {
    visible: true,
    orient: 'top',
    position: 'start'
  },
  // 9.配置 十字准星 crosshair-Declare the crosshair
  crosshair: {
    xField: { visible: true },
    yField: { visible: true }
  },
  // 10.配置坐标轴，对于 type 不为 'common'(即组合图)的图表，轴的配置会默认生成，所以如果不需要特殊的定制，也可以不声明-Declare the axes,
  // 声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
  // 声明 y 轴字段-Declare the y axis field
  axes: [{ orient: 'bottom' }, { orient: 'left', domainLine: { visible: true } }]
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
