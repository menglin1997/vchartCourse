<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart, ACustomAnimate } from "@visactor/vchart";
import { onMounted } from "vue";
import { AttributeUpdateType } from '@visactor/vrender-core';

// 在 from 和 to 之间按 ratio 做线性插值，返回每帧的属性快照
// keys: 参与插值的属性名；ratio: 缓动后的进度 [0,1]
function buildInterpolatedAttrs(keys: string[], from: Record<string, any>, to: Record<string, any>, ratio: number) {
  const attrs: Record<string, any> = {};
  keys.forEach((key) => {
    attrs[key] = from[key] + (to[key] - from[key]) * ratio;
  });
  return attrs;
}

// 自定义动画：柱子从底部基线向上"生长"
// - 起点：y = y1（顶部贴住底部，高度为 0）
// - 终点：y = toY（顶部回到最终位置，完整高度）
class BarGrowFromBase extends ACustomAnimate<Record<string, any>> {
  // 动画绑定阶段：确定起止状态并设置初始帧
  onBind(): void {
    if (!this.target) return;
    // 读取图形的最终属性（数据驱动计算出的目标位置/尺寸）
    const attrs = this.target.getFinalAttribute();
    const toY = attrs.y ?? 0;    // 柱子顶部最终 y
    const toY1 = attrs.y1 ?? 0;  // 柱子底部最终 y（即基线）
    // from: 顶部=底部 → 高度 0；to: 完整高度
    const from = { y: toY1, y1: toY1 };
    const to = { y: toY, y1: toY1 };
    // 这四个字段必须设置，否则 ACustomAnimate.update 的守卫会拦截 onUpdate
    this.from = from;
    this.to = to;
    this.props = to;
    this.propKeys = ['y', 'y1'];
    // 用 ANIMATE_BIND 上下文写入起始瞬态属性，不破坏最终属性
    this.target.setAttributes(from, false, { type: AttributeUpdateType.ANIMATE_BIND });
  }

  // 每帧调用：根据 ratio 插值并写入图形
  onUpdate(end: boolean, ratio: number, out: Record<string, any>): void {
    const attrs = buildInterpolatedAttrs(this.propKeys, this.from, this.to, ratio);
    // ANIMATE_PLAY 告诉图形这是动画播放期间的帧更新，动画结束后会恢复最终属性
    this.target.setAttributes(attrs, false, {
      type: AttributeUpdateType.ANIMATE_PLAY,
      animationState: { ratio, end }
    });
    // 标记位置/形状/边界需重绘
    this.target.addUpdatePositionTag();
    this.target.addUpdateShapeAndBoundsTag();
  }
}

onMounted(() => {
  const spec = {
    type: 'bar',
    data: [
      {
        id: 'barData',
        values: [
          { month: 'Monday', sales: 22 },
          { month: 'Tuesday', sales: 13 },
          { month: 'Wednesday', sales: 25 },
          { month: 'Thursday', sales: 29 },
          { month: 'Friday', sales: 38 }
        ]
      }
    ],
    animationAppear: {
      bar: {
        custom: BarGrowFromBase,  // 使用上面的自定义动画类
        duration: 1500,           // 单根柱子生长时长（ms）
        easing: 'cubicOut',      // 先快后慢，有"生长"的收尾感
        oneByOne: true            // 5 根柱子从左到右依次播放
      }
    },
    xField: 'month',
    yField: 'sales'
  };
  const vchart = new VChart(spec, { dom: "chart" });
  vchart.renderSync();
});
</script>
<style scoped>
#chart {
  width: 600px;
  height: 400px;
}
</style>