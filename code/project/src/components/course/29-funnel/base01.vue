<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
    //   四要素 类型-数据-X-Y
    type: "funnel",
    data: [
      {
        id: 'funnel',
        values: [
          {
            value: 100,
            name: 'Step1'
          },
          {
            value: 80,
            name: 'Step2'
          },
          {
            value: 60,
            name: 'Step3'
          },
          {
            value: 40,
            name: 'Step4'
          },
          {
            value: 20,
            name: 'Step5'
          }
        ]
      }
    ],
    categoryField: 'name', // 分类字段
    valueField: 'value', // 数值字段
    label: {
      visible: true,
    },
    // isTransform: true, // 是否开启数据转换  转换率=下层数据 /上层数据
    // transformLabel: {
    //   visible: true,
    // },

    // 设置朝向
    funnelAlign: 'right', // left/right/center 默认从center开始  对齐方式
    funnelOrient: 'top', // left right bottom top  方向 默认top

    // 图元和样式
    shape: 'trapezoid', // rect  trapezoid  梯形图(trapezoid 默认) 
    isCone: true, // 是否开启锥形图  默认false
    gap: 20, // 间距  默认20
    maxSize: 400, // 最大宽度  默认200
    minSize: 100, // 最小宽度  默认100



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
