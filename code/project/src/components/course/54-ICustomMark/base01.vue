<template>
  <!-- 图表容器，VChart 将渲染到这个 DOM 节点中 -->
  <div id="chart"></div>
</template>
<script lang="ts" setup>
// 引入 VChart 核心库，用于创建图表实例
import { default as VChart } from "@visactor/vchart";
// 引入 Vue 的 onMounted 生命周期钩子，确保 DOM 挂载后再初始化图表
import { onMounted } from "vue";

onMounted(() => {
  // ==================== 第一部分：数据准备 ====================
  // goldenMedals 是一个以年份为 key 的对象，存储了 2000-2020 年奥运会各国金牌数
  // 每年的数据是一个数组，包含 country（国家）和 value（金牌数）字段
  const goldenMedals = {
    2000: [
      { country: "USA", value: 37 },
      { country: "Russia", value: 32 },
      { country: "China", value: 28 },
      { country: "Australia", value: 16 },
      { country: "Germany", value: 13 },
      { country: "France", value: 13 },
      { country: "Italy", value: 13 },
      { country: "Netherlands", value: 12 },
      { country: "古巴", value: 11 },
      { country: "U.K.", value: 11 },
    ],
    2004: [
      { country: "USA", value: 36 },
      { country: "China", value: 32 },
      { country: "Russia", value: 28 },
      { country: "Australia", value: 17 },
      { country: "Japan", value: 16 },
      { country: "Germany", value: 13 },
      { country: "France", value: 11 },
      { country: "Italy", value: 10 },
      { country: "South Korea", value: 9 },
      { country: "U.K.", value: 9 },
    ],
    2008: [
      { country: "China", value: 48 },
      { country: "USA", value: 36 },
      { country: "Russia", value: 24 },
      { country: "U.K.", value: 19 },
      { country: "Germany", value: 16 },
      { country: "Australia", value: 14 },
      { country: "South Korea", value: 13 },
      { country: "Japan", value: 9 },
      { country: "Italy", value: 8 },
      { country: "France", value: 7 },
    ],
    2012: [
      { country: "USA", value: 46 },
      { country: "China", value: 39 },
      { country: "U.K.", value: 29 },
      { country: "Russia", value: 19 },
      { country: "South Korea", value: 13 },
      { country: "Germany", value: 11 },
      { country: "France", value: 11 },
      { country: "Australia", value: 8 },
      { country: "Italy", value: 8 },
      { country: "Hungary", value: 8 },
    ],
    2016: [
      { country: "USA", value: 46 },
      { country: "U.K.", value: 27 },
      { country: "China", value: 26 },
      { country: "Russia", value: 19 },
      { country: "Germany", value: 17 },
      { country: "Japan", value: 12 },
      { country: "France", value: 10 },
      { country: "South Korea", value: 9 },
      { country: "Italy", value: 8 },
      { country: "Australia", value: 8 },
    ],
    2020: [
      { country: "USA", value: 39 },
      { country: "China", value: 38 },
      { country: "Japan", value: 27 },
      { country: "U.K.", value: 22 },
      { country: "Russian Olympic Committee", value: 20 },
      { country: "Australia", value: 17 },
      { country: "Netherlands", value: 10 },
      { country: "France", value: 10 },
      { country: "Germany", value: 10 },
      { country: "Italy", value: 10 },
    ],
  };

  // ==================== 第二部分：构建 player 所需的数据规格数组 ====================
  // 将 goldenMedals 转换为 player 组件需要的 dataSpecs 格式
  // 每个元素包含两组 data：
  //   - id 为 "id" 的数据：该年份的各国金牌数，按 value 降序排列（柱状图从上到下由大到小）
  //   - id 为 "year" 的数据：该年份本身，供 customMark 文本标记使用
  const dataSpecs = Object.keys(goldenMedals).map((year) => {
    return {
      data: [
        {
          id: "id",
          values: goldenMedals[year].sort((a, b) => b.value - a.value),
        },
        {
          id: "year",
          values: [{ year }],
        },
      ],
    };
  });

  // 动画持续时间（毫秒），控制每年数据切换时的过渡动画时长
  const duration = 2000;

  // ==================== 第三部分：图表 spec 配置 ====================
  const spec = {
    // 图表类型：柱状图
    type: "bar",

    // 内边距：右侧留 100px 给年份大字显示空间
    padding: {
      top: 12,
      right: 100,
      bottom: 12,
    },

    // 初始数据取第一年（2000年）的数据
    data: dataSpecs[0].data,

    // 水平方向柱状图（条形图），country 在 y 轴，value 在 x 轴
    direction: "horizontal",

    // y 轴字段：国家名称
    yField: "country",
    // x 轴字段：金牌数量
    xField: "value",
    // 按 country 分组着色，不同国家显示不同颜色
    seriesField: "country",

    // ==================== 坐标轴配置 ====================
    axes: [
      {
        // 底部 x 轴：线性轴，显示网格线，开启动画
        animation: true,
        orient: "bottom",
        type: "linear",
        visible: true,
        grid: {
          visible: true,
        },
      },
      {
        // 左侧 y 轴：离散轴（band），宽度 130px，隐藏刻度线，显示标签
        animation: true,
        id: "axis-left",
        orient: "left",
        width: 130,
        tick: { visible: false },
        label: { visible: true },
        type: "band",
      },
    ],

    // 图表标题
    title: {
      visible: true,
      text: "Top 10 Olympic Gold Medals by Country Since 2000",
    },

    // ==================== 更新动画配置 ====================
    // 当 player 切换数据时，控制柱子和坐标轴的过渡动画效果
    animationUpdate: {
      bar: [
        {
          // 第一阶段：柱子"变形"动画（颜色、宽度等通道变化），排除 x/y 位置通道
          type: "update",
          options: { excludeChannels: ["x", "y"] },
          duration,
        },
        {
          // 第二阶段：柱子"位移"动画（x/y 通道变化，即排名变动时的上下移动），排除 width 通道
          channel: ["x", "y"],
          options: { excludeChannels: ["width"] },
          duration: 500,
        },
      ],
      // 坐标轴更新动画：500ms，线性缓动
      axis: {
        duration: 500,
        easing: "linear",
      },
    },

    // ==================== customMark 自定义标记（核心知识点） ====================
    // customMark 允许在图表上叠加自定义的图形元素
    // 这里用 customMark 在图表右下角绘制一个大号年份文字，随 player 切换而变化
    customMark: [
      {
        // 标记类型：文本
        type: "text",
        // 绑定数据源为 id="year" 的数据，即当前年份
        dataId: "year",
        style: {
          // 文本基线对齐方式
          textBaseline: "bottom",
          // 字号 200，形成大号背景年份效果
          fontSize: 200,
          // 右对齐
          textAlign: "right",
          fontFamily: "PingFang SC",
          fontWeight: 600,
          // 文本内容：从 datum 中取 year 字段，即当前年份
          text: (datum) => datum.year,
          // x 坐标：画布宽度 - 50，让文字靠右显示
          // 注意：这里通过 vchart 实例获取画布尺寸，所以 vchart 必须在此之前已声明
          x: () => {
            return vchart.getChart().getCanvasRect()?.width - 50;
          },
          // y 坐标：画布高度 - 50，让文字靠下显示
          y: () => {
            return vchart.getChart().getCanvasRect()?.height - 50;
          },
          // 填充颜色：灰色，半透明，作为背景水印效果
          fill: "grey",
          fillOpacity: 0.5,
        },
      },
    ],

    // ==================== player 播放器配置 ====================
    // player 是 VChart 内置的数据轮播组件，可按时间序列自动切换数据，实现"动态条形图"效果
    player: {
      // 播放器类型：continuous（连续播放）
      type: "continuous",
      // 播放器方向：底部
      orient: "bottom",
      // 自动播放
      auto: true,
      // 循环播放
      loop: true,
      // 水平偏移 80px
      dx: 80,
      // 位置：居中
      position: "middle",
      // 每帧间隔时间，与动画 duration 一致
      interval: duration,
      // 数据规格数组，每一项对应一个年份的数据快照
      specs: dataSpecs,
      // 滑块样式
      slider: {
        railStyle: {
          height: 6,
        },
      },
      // 控制按钮配置
      controller: {
        // 后退按钮
        backward: {
          style: {
            size: 12,
          },
        },
        // 前进按钮
        forward: {
          style: {
            size: 12,
          },
        },
        // 开始/暂停按钮：order=1 排在最后，position="end" 放在末尾
        start: {
          order: 1,
          position: "end",
        },
      },
    },
  };

  // ==================== 第四部分：创建并渲染图表 ====================
  // 创建 VChart 实例，传入 spec 配置和选项
  const vchart = new VChart(spec, {
    // 指定渲染的 DOM 容器 id
    dom: "chart",
  });

  // 同步渲染图表到 DOM
  vchart.renderSync();
});
</script>
<style scoped>
/* 图表容器尺寸 */
#chart {
  width: 600px;
  height: 400px;
}
</style>