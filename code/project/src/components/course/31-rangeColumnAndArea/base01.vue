<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  //   四要素 类型-数据-X-Y
  type: "rangeColumn",
  data: [
    {
      id: "data0",
      values: [
        { type: "分类一", min: 76, max: 100 },
        { type: "分类二", min: 56, max: 108 },
        { type: "分类三", min: 38, max: 129 },
        { type: "分类四", min: 58, max: 155 },
        { type: "分类五", min: 45, max: 120 },
        { type: "分类六", min: 23, max: 99 },
        { type: "分类七", min: 18, max: 56 },
        { type: "分类八", min: 18, max: 34 },
      ],
    },
  ],
  xField: ['min', 'max'],
  yField: 'type', // 数值字段的分组 映射图元上边界和下边界
  label: {
    visible: true,
    position: 'bothEnd', // bothEnd 两端都显示标签 start 开始位置 end 结束位置 middle: 中间位置 默认middle
  },
  direction: 'horizontal',
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
