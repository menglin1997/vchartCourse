<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

onMounted(() => {
  const data = [
    { type: "oxygen", value: "46.60", formula: "O", texture: "circle" },
    {
      type: "silicon",
      value: "27.72",
      formula: "Si",
      texture: "horizontal-line",
    },
    {
      type: "aluminum",
      value: "8.13",
      formula: "Al",
      texture: "vertical-line",
    },
    { type: "iron", value: "5", formula: "Fe", texture: "rect" },
    { type: "calcium", value: "3.63", formula: "Ca", texture: "grid" },
  ];
  const colorScheme = {
    /** 默认渐进式色板 */
    // 数据色板
    default: {
      dataScheme: [
        {
          maxDomainLength: 3,
          scheme: ["#1f77b4", "#2ca02c", "#9467bd"], // 适用于 3 个数据项的色板
        },
        {
          maxDomainLength: 5,
          scheme: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"], // 适用于 5 个数据项的色板，在相邻色值之间插入了其他色值
        },
        {
          isAvailable: (domain) => domain.length > 5,
          scheme: [
            "#1f77b4",
            "#8c564b",
            "#ff7f0e",
            "#e377c2",
            "#2ca02c",
            "#7f7f7f",
            "#d62728",
            "#bcbd22",
            "#9467bd",
          ], // 完整色板
        },
      ],
      // 语义色板，用 key-value 形式定义图表结构性元素的颜色，不直接关联数据，而是关联到图表的视觉组件（标签、网格、轴线等）。
      palette: {
        labelFontColor: "red", //标签文字颜色，控制图表中所有标签（如数据标签、轴标签等）的字体颜色，此处设为红色
        primaryFontColor: "red", // 主要文字颜色，控制图表中主要文本（如标题、图例文字等）的字体颜色，此处设为红色
        axisGridColor: "red", // 坐标轴网格线颜色，控制坐标轴网格线的颜色，此处设为红色
        axisDomainColor: "#D9DDE4", //坐标轴轴线颜色，控制坐标轴的轴线（domain line）颜色，此处设为浅灰色
      },
    },
  };
  const spec = {
    type: "pie",
    data: [
      {
        id: "id0",
        values: data,
      },
    ],
    theme: { colorScheme },
    outerRadius: 0.8,
    padAngle: 0.6,
    valueField: "value",
    categoryField: "type",
    title: {
      visible: true,
      text: "Surface element content statistics",
    },
    legends: {
      visible: true,
      orient: "bottom",
      item: {
        shape: {
          style: {
            symbolType: "circle",
            texture: (datum) => datum["texture"],
          },
        },
      },
    },
    tooltip: {
      mark: {
        content: [
          {
            key: (datum) => datum["type"],
            value: (datum) => datum["value"] + "%",
          },
        ],
      },
    },
  };

  // 创建 VChart 实例并渲染
  const vchart = new VChart(spec, { dom: "richtext-chart" });

  vchart.renderSync();
  vchart.setCurrentTheme("myCustomTheme");
});
</script>
<style scoped>
#richtext-chart {
  width: 600px;
  height: 400px;
}
</style>
