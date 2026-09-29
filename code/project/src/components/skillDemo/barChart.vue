<template>
  <div id="bar-chart"></div>
  <p class="chart-tip">提示：点击柱子可查看该月销售额</p>

  <!-- 点击柱子后的销售额弹框：遮罩层 + 居中卡片 -->
  <div v-if="dialogVisible" class="chart-dialog-mask" @click.self="closeDialog">
    <div class="chart-dialog" role="dialog" aria-modal="true">
      <h3 class="chart-dialog__title">{{ activeDatum?.month }}销售额</h3>
      <p class="chart-dialog__value">
        {{ activeDatum?.sales }}<span class="chart-dialog__unit">万元</span>
      </p>
      <button class="chart-dialog__close" type="button" @click="closeDialog">关闭</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted, onUnmounted, ref } from "vue";

// 高亮阈值（万元）：销售额严格大于该值的柱子改用红色渐变强调。
// 边界说明：恰好等于 280 的数据（如 4 月）不满足「大于」，仍为蓝色。
const HIGHLIGHT_THRESHOLD = 280;

// 两套渐变配色。结构必须与静态渐变完全一致（gradient/x0/y0/x1/y1/stops），
// 否则渲染层无法识别；回调的返回值会被直接用作柱子 fill 属性，不再做二次加工。
const BLUE_GRADIENT = {
  gradient: "linear",
  x0: 0.5,
  y0: 0,
  x1: 0.5,
  y1: 1,
  stops: [
    { offset: 0, color: "#1890ff" },
    { offset: 1, color: "#096dd9" },
  ],
};

const RED_GRADIENT = {
  gradient: "linear",
  x0: 0.5,
  y0: 0,
  x1: 0.5,
  y1: 1,
  stops: [
    { offset: 0, color: "#ff7875" },
    { offset: 1, color: "#cf1322" },
  ],
};

// 四要素：类型(type) - 数据(data) - X 轴字段(xField) - Y 轴字段(yField)
const spec = {
  type: "bar",

  // data 必须声明 id，VChart 靠它把数据与图元绑定，缺失会影响更新/动画
  data: [
    {
      id: "barData",
      values: [
        { month: "1月", sales: 220 },
        { month: "2月", sales: 180 },
        { month: "3月", sales: 350 },
        { month: "4月", sales: 280 },
        { month: "5月", sales: 420 },
        { month: "6月", sales: 380 },
      ],
    },
  ],

  // 字段名必须与 values 里的键名完全一致，否则轴为空、柱子不渲染
  xField: "month",
  yField: "sales",

  // 柱子样式：纵向柱的圆角顺序为 [左上, 右上, 右下, 左下]
  bar: {
    style: {
      cornerRadius: [4, 4, 0, 0],
      // 按数值条件着色：回调收到当前数据行，返回值即该柱子的 fill
      fill: (datum: any) =>
        datum?.sales > HIGHLIGHT_THRESHOLD ? RED_GRADIENT : BLUE_GRADIENT,
    },
  },

  barWidth: "40%",

  label: {
    visible: true,
    position: "top",
    style: {
      fill: "#333",
      fontSize: 12,
    },
  },

  title: {
    visible: true,
    text: "上半年销售额",
    subtext: "单位：万元",
  },

  tooltip: {
    mark: {
      // 自定义 tooltip 内容，展示「月份：金额」而非默认的字段名
      title: { value: (datum: any) => datum?.month },
      content: [{ key: "销售额", value: (datum: any) => `${datum?.sales} 万元` }],
    },
  },

  axes: [
    { orient: "bottom", label: { visible: true } },
    { orient: "left", label: { visible: true }, title: { visible: true, text: "销售额" } },
  ],
};

// 弹框只需要业务字段，单独声明类型便于取值处获得提示
type ActiveDatum = { month: string; sales: number };

// 实例需要在 onMounted 外持有，供点击回调与组件卸载时释放使用
let vchart: VChart | null = null;

const dialogVisible = ref(false);
const activeDatum = ref<ActiveDatum | null>(null);

const closeDialog = () => {
  dialogVisible.value = false;
  activeDatum.value = null;
};

// ESC 关闭是弹框的常规预期，仅在弹框打开时响应
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && dialogVisible.value) closeDialog();
};

onMounted(() => {
  vchart = new VChart(spec, {
    dom: "bar-chart",
  });
  vchart.renderSync();

  // level: mark 限定只响应图元事件；
  // type: bar 过滤的是系列 model.type（柱图图元本身是 rect mark，用 rect 过滤反而命中不到）
  vchart.on("click", { level: "mark", type: "bar" }, (params) => {
    const datum = params?.datum as ActiveDatum | undefined;
    // 点击到图元之外的空白区域时 datum 为空，忽略即可
    if (!datum?.month) return;
    activeDatum.value = { month: datum.month, sales: datum.sales };
    dialogVisible.value = true;
  });

  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
  // 释放实例，避免热更新或路由切换后 canvas 与事件监听残留
  vchart?.release();
  vchart = null;
});
</script>
<style scoped>
#bar-chart {
  width: 600px;
  height: 400px;
}

.chart-tip {
  margin: 4px 0 0;
  font-size: 12px;
  color: #999;
}

/* 弹框固定定位，不随图表容器滚动/裁剪 */
.chart-dialog-mask {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
}

.chart-dialog {
  min-width: 240px;
  padding: 20px 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.chart-dialog__title {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.chart-dialog__value {
  margin: 0 0 20px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
  color: #1890ff;
}

.chart-dialog__unit {
  margin-left: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #666;
}

.chart-dialog__close {
  padding: 6px 20px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  color: #333;
  cursor: pointer;
}

.chart-dialog__close:hover {
  border-color: #1890ff;
  color: #1890ff;
}
</style>
