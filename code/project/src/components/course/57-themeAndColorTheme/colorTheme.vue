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
    default: [
      {
        maxDomainLength: 3, // 可选 适合此色板的最大domain数量
        scheme: ["#1f77b4", "#2ca02c", "#9467bd"], // 适用于 3 个数据项的色板
      },
      {
        maxDomainLength: 5,
        scheme: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"], // 适用于 5 个数据项的色板，在相邻色值之间插入了其他色值
      },
      {
        isAvailable: (domain) => domain.length > 5, // 可选 更加灵活的自定义回调 返回是否应用此色板 会覆盖maxDomainLength 等配置
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
