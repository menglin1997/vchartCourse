<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

// 实现A组和B组上半年的销售数据对比-Compare the sales data of A group and B group in recent years
const spec = {
  type: "bar",
  data: [
    {
      id: "barData",
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
  xField: ["month", "type"],
  yField: "value",
  seriesField: "type",
  bar: {
    style: {
      cornerRadius: 4,
    },
  },
  // 01-Title标题组件基础
  title: {
    text: "A组和B组销售数据对比", // 主标题文本
    subtext: "2024年第一季度", // 副标题文本
    visible: true, // 是否显示标题
  },

  // 02-Title标题布局与位置调整
  // title: {
  //   text: "销售数据对比",
  //   orient: "top", // 标题位置：'top', 'bottom', 'left', 'right'
  //   x: 100, // 标题左上角x坐标
  //   y: 20, // 标题左上角y坐标
  //   width: 400, // 标题宽度
  //   height: 100, // 标题高度
  //   align: "center", // 水平对齐方式：'left', 'center', 'right'
  //   verticalAlign: "middle", // 垂直对齐方式：'top', 'middle', 'bottom'
  //   innerPadding: 10, // 内边距
  // },
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
