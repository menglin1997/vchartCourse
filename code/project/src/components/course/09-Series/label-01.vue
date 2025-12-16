<template>
  <div>Label 数据标签</div>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
  type: "line",
  title: {
    text: "月度销售额趋势",
    subtext: "2024年第一季度",
    textStyle: {
      fontSize: 18,
      fontWeight: "bold",
      fill: "#333",
    },
    subtextStyle: {
      fontSize: 14,
      fill: "#666",
    },
    align: "center",
  },
  data: [
    {
      id: "area",
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
  xField: "month",
  yField: "value",
  seriesField: "type",
  // label: {
  //   visible: true, // 显示数据标签
  //   offset: 2, // 数据标签与数据点的偏移量
  //   style: {
  //     fill: "#333", // 数据标签文本颜色
  //     fontSize: "14", // 数据标签文本字体大小
  //     fontWeight: "bold", // 数据标签文本字体粗细
  //   },
  // },
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
