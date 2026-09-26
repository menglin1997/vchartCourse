<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

onMounted(() => {
  // 定义自定义主题
  const customTheme = {
    /**
     * 第 1 种配置：主题信息
     */
    /** 主题命名 */
    name: "customTheme",
    /**
     * 第 2 种配置：图表层级的样式属性
     */
    /** 图表背景色 */
    background: "yellow",
    /** 图表内边距 */
    padding: 20,
    /** 图表字体配置 */
    fontFamily: "Arial",
    /**
     * 第 3 种配置：色板
     */
    /** 全局色板 */
    colorScheme: {
      default: [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#FFA07A",
        "#98D8C8",
        "#F7DC6F",
        "#BB8FCE",
        "#85C1E2",
      ],
      // wordCloud: [
      //   "#FF6B6B",
      //   "#4ECDC4",
      //   "#45B7D1",
      //   "#FFA07A",
      //   "#98D8C8",
      //   "#F7DC6F",
      //   "#BB8FCE",
      //   "#85C1E2",
      // ],
    },
    /**
     * 第 4 种配置：全局 mark 属性配置
     */
    // mark

    /** 全局 mark 样式属性，按 mark 名称索引，优先级更高 */
    // markByName:

    /**
     * 第 5 种配置：系列属性配置
     */
    /** 系列样式属性 */
    series: {
      bar: {
        barMaxWidth: 20,
        label: {
          visible: true,
          position: "top",
        },
      },
    },
    /**
     * 第 6 种配置：组件属性配置
     */
    /** 组件样式属性 */
    component: {
      axis: {
        label: {
          style: {
            fill: "#666",
            fontSize: 12,
          },
        },
      },
    },
  };
  VChart.ThemeManager.registerTheme("myCustomTheme", customTheme);
  // VChart.ThemeManager.setCurrentTheme("myCustomTheme");

  const spec = {
    type: "bar",
    data: [
      {
        id: "barData",
        values: [
          { type: "A", value: 120 },
          { type: "B", value: 200 },
          { type: "C", value: 150 },
          { type: "D", value: 80 },
        ],
      },
    ],
    xField: "type",
    yField: "value",
    // theme: customTheme,
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
