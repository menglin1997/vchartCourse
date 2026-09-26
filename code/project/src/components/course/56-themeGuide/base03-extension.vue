<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

// 1、安装 yarn add @visactor/vchart-theme
// 2、引入主题
import * as VChartTheme from '@visactor/vchart-theme';
// 导入扩展主题包
// Import extension theme package
// import { allThemeMap } from '@visactor/vchart-theme';

// The VChartTheme object is already mounted on the window object in the editor environment

// 注册所有扩展主题
VChartTheme.allThemeMap.forEach((theme, name) => {
  VChart.ThemeManager.registerTheme(name, theme);
});

// 3、全局应用扩展主题
// VChart.ThemeManager.setCurrentTheme('vScreenVolcanoBlue');


onMounted(() => {
 
const spec = {
  type: 'bar',
  data: [
    {
      id: 'barData',
      values: [
        { type: 'A', value: 120 },
        { type: 'B', value: 200 },
        { type: 'C', value: 150 },
        { type: 'D', value: 80 }
      ]
    }
  ],
  xField: 'type',
  yField: 'value',
    // 在 spec 中指定主题名称
  theme: 'vScreenVolcanoBlue'
};

  // 创建 VChart 实例并渲染
  const vchart = new VChart(spec, { dom: "richtext-chart" });
  vchart.renderSync();
});
</script>
<style scoped>
#richtext-chart {
  width: 600px;
  height: 400px;
}
</style>
