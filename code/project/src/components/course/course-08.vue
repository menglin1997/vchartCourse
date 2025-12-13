<template>
  <div>
    <h2>创建一个带有标题和坐标轴的折线图，具体如下：</h2>
    <br />
    <ul>
      <li>标题：月度销售额趋势,居中显示</li>
      <li>副标题：2024年第一季度,居中显示</li>
      <li>X轴、y轴鼠标经过时候字体变黑色，背景红色</li>
      <li>X轴、y轴选中时字体变白色，背景蓝色</li>
    </ul>
  </div>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
// https://visactor.com/vchart/option/lineChart-axes-linear#background.style
const axesConfig = {
  hover: true,
  select: true,
  background: {
    visible: true,
    state: {
      hover: {
        fill: 'red'
      },
      selected: {
        fill: 'blue'
      }
    }
  },
  label: {
    state: {
      hover_reverse: {
        fill: 'black'
      },
      selected_reverse: {
        fill: '#fff'
      }
    }
  }
}
const spec = {
  type: 'line',
  data: [
    {
      id: 'area',
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
      ]
    }
  ],
  xField: 'month',
  yField: 'value',
  seriesField: 'type',
  title: {
    text: "月度销售额趋势",
    align: 'center',
    subtext: "2024年第一季度",
    textStyle: {
      fontSize: 18
    },
    subTextStyle: {
      fontSize: 14,
      fill: '#666'
    }
  },
  axes: [
    {
      orient: "left",
      ...axesConfig
    },
    {
      orient: "bottom",
      ...axesConfig
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
