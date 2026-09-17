<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

onMounted(() => {
  // 定义图表配置对象
  const spec = {
    // 图表类型为 common（组合图表），支持多 region 多 series
    type: "common",
    // 内边距为 0，不预留额外空白
    padding: 0,
    // region 数组，存放各个图表区域配置
    region: [],
    // series 数组，存放各个系列配置
    series: [],
  };

  // 循环 12 次，随机生成 12 组饼图（对应钟表的 12 个刻度位置）
  for (let i = 0; i < 12; i++) {
    // 向 region 数组中添加一个区域，id 为 "clock0" ~ "clock11"
    spec.region.push({ id: "clock" + i });
    // 定义每个饼图系列的配置
    const series = {
      // 指定该系列所属的 region，与上方 region id 对应
      regionId: "clock" + i,
      // 系列类型为饼图
      type: "pie",
      // 数值字段名，对应数据中的 value 属性
      valueField: "value",
      // 分类字段名，对应数据中的 type 属性
      categoryField: "type",
      // 颜色分组字段，按 type 区分颜色
      seriesField: "type",
      // 标签配置
      label: {
        // 标签样式
        style: {
          // 隐藏标签，不显示饼图上的文字
          visible: false,
        },
      },
    };
    // 为该系列绑定数据对象
    series.data = {
      // 数据集 id，为 "data0" ~ "data11"
      id: "data" + i,
      // 数据值数组，初始为空
      values: [],
    };
    // 每个饼图生成 4 个数据项（4 个扇区）
    for (let d = 0; d < 4; d++) {
      // 随机生成 0~100 的数值，类型为 "type0" ~ "type3"
      series.data.values.push({ value: Math.random() * 100, type: "type" + d });
    }
    // 将配置好的系列添加到 spec.series 数组中
    spec.series.push(series);
  }
  // 创建 VChart 实例，传入 spec 配置和选项
  const vchart = new VChart(spec, {
    // 指定渲染的 DOM 容器 id
    dom: "chart",
    // 网格排列
    // layout: (chart, item, chartLayoutRect, chartViewBox) => {
    //   const cols = 3; // 每行 3 个
    //   const gap = 10; // 间距
    //   const cellW = (chartLayoutRect.width - gap * (cols - 1)) / cols;
    //   const rows = Math.ceil(item.length / cols);
    //   const cellH = (chartLayoutRect.height - gap * (rows - 1)) / rows;

    //   item.forEach((i, index) => {
    //     const col = index % cols;
    //     const row = Math.floor(index / cols);
    //     i.setLayoutStartPosition({
    //       x: col * (cellW + gap),
    //       y: row * (cellH + gap),
    //     });
    //     i.setLayoutRect({ width: cellW, height: cellH });
    //     i.updateLayoutAttribute?.();
    //   });
    // },

    // // 自定义布局函数，控制每个 region 在画布中的位置和大小 圆形排列
    // layout: (chart, item, chartLayoutRect, chartViewBox) => {
    //   // chart 是图表对象
    //   // item 是参与布局的图表模块（region 数组）
    //   // chartLayoutRect 是图表减去 padding 后的可用布局空间
    //   // chartViewBox 是图表在画布中的位置，包含图表的 padding

    //   // 取可用空间宽高一半的较小值作为外接圆半径，确保圆形布局不超出画布
    //   const radius = Math.min(
    //     chartLayoutRect.width / 2, // 宽度的一半
    //     chartLayoutRect.height / 2, // 高度的一半
    //   );
    //   // 计算圆心坐标，位于可用布局空间的正中心
    //   const center = {
    //     x: chartLayoutRect.width / 2, // 圆心 x = 宽度的一半
    //     y: chartLayoutRect.height / 2, // 圆心 y = 高度的一半
    //   };
    //   // 每个 region 为正方形，边长为半径的 20%
    //   const regionSize = radius * 0.2;
    //   // 计算 region 中心点所在的排列半径：从外圆向内缩进半个对角线长度（1.415 ≈ √2）
    //   const regionPosRadius = radius - regionSize * 0.5 * 1.415;
    //   // 遍历每个布局元素，计算其在圆周上的位置
    //   item.forEach((i, index) => {
    //     // 计算当前元素的角度：均分 12 份，每份 30°（index/12 × 2π）
    //     const angle = (index / 12) * Math.PI * 2;
    //     // 设置该元素的左上角起始位置
    //     i.setLayoutStartPosition({
    //       // x 坐标 = 圆心x + sin(角度)×排列半径 - 半边长（中心点转左上角）
    //       x: center.x + Math.sin(angle) * regionPosRadius - regionSize * 0.5,
    //       // y 坐标 = 圆心y + cos(角度)×排列半径 - 半边长（中心点转左上角）
    //       y: center.y + Math.cos(angle) * regionPosRadius - regionSize * 0.5,
    //     });
    //     // 设置该元素的宽高（正方形）
    //     i.setLayoutRect({ width: regionSize, height: regionSize });
    //     // 调用 updateLayoutAttribute 将布局结果应用到渲染属性上（必须调用）
    //     i.updateLayoutAttribute && i.updateLayoutAttribute();
    //   });
    // },

    // 按条件区分布局（部分默认 + 部分自定义）
    layout: (chart, item, chartLayoutRect, chartViewBox) => {
      item.forEach((i, index) => {
        // 通过 getModelId 或其他属性区分不同元素
        const id = i.getModelId();
        
        if (id === "specialRegion") {
          // 特殊元素：放在右上角
          i.setLayoutStartPosition({ x: chartLayoutRect.width - 200, y: 0 });
          i.setLayoutRect({ width: 200, height: 200 });
        } else {
          // 其他元素：均匀排列
          const h = chartLayoutRect.height / (item.length - 1);
          i.setLayoutStartPosition({ x: 0, y: index * h });
          i.setLayoutRect({ width: chartLayoutRect.width - 200, height: h });
        }
        i.updateLayoutAttribute?.();
      });
    },
  });
  

  // 同步渲染图表到 DOM
  vchart.renderSync();
});
</script>
<style scoped>
#chart {
  width: 600px;
  height: 400px;
}
</style>