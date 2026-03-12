<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
  type: "pie",
  data: [
    {
      values: [
        { product: "数码", sales: 20, texture: "bias-lr" },
        { product: "日用品", sales: 50, texture: "horizontal-line" },
        { product: "食品", sales: 80, texture: "diamond" },
      ],
    },
  ],
  categoryField: "product",
  valueField: "sales",
  label: { visible: true }, // 显示标签
  legends: { visible: true }, // 显示图例
  innerRadius: 0.6, // 环图必需
  outerRadius: 1,
  indicator: {
    visible: true,
    title: {
      visible: true,
      style: {
        text: "标题",
      },
    },
    content: [
      {
        visible: true,
        style: {
          fontSize: 18,
          fill: "orange",
          fontFamily: "Times New Roman",
          text: (datum) => {
            return "234";
          },
        },
      },
    ],
  },
  pie: {
    style: {
      cornerRadius: 5,
      texture: (datum) => datum["texture"],
    },
    state: {
      hover: {
        outerRadius: 0.85,
        stroke: "#000",
        lineWidth: 1,
      },
      selected: {
        outerRadius: 0.85,
        stroke: "#000",
        lineWidth: 1,
      },
    },
  },
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
