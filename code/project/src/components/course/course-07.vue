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
const axisConfig = {
  hover: true, // 开启 hover 交互
  select: true, // 开启 select 交互
  background: {
    visible: true,
    style: {
      fillOpacity: 1
    },
    state: {
      // hover时，改变背景颜色为红色
      hover: {
        fillOpacity: 0.65,
        fill: 'red',
        cursor: 'pointer'
      },
      // selected时，改变背景颜色为蓝色
      selected: {
        fillOpacity: 0.65,
        fill: 'blue',
        cursor: 'pointer'
      }
    }
  },
  label: {
    style: {
      pickable: false // 为了不影响背景的拾取，先把 label 的拾取关闭，即不响应事件
    },
    state: {
      // hover时，改变字体颜色为黑色
      // hover_reverse: {
      //   fill: '#000'
      // },
      // selected时，改变字体颜色为白色
      // selected_reverse: {
      //   fill: '#fff'
      // }
    }
  }
};

const spec = {
  type: 'line',
  // title: {
  //   text: '月度销售额趋势',
  //   subtext: '2024年第一季度',
  //   textStyle: {
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //     fill: '#333'
  //   },
  //   subtextStyle: {
  //     fontSize: 14,
  //     fill: '#666'
  //   },
  //   align: 'center'
  // },
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
  // axes: [ ]
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
