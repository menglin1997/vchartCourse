<template>
  <div class="flattened-data">
    <div class="flattened-data-header">
      <h2>案例研究-06</h2>
    </div>
    <!--  1. 创建DOM容器-用于渲染图表 -->
    <div id="chart"></div>
  </div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
// 2. 原始数据（非展平格式）
const rawData = [
  { month: 'Jan', productA: 10, productB: 15, productC: 20 },
  { month: 'Feb', productA: 12, productB: 18, productC: 22 },
  { month: 'Mar', productA: 15, productB: 20, productC: 25 },
  { month: 'Apr', productA: 18, productB: 22, productC: 28 }
];
// 使用transforms进行数据展平
const spec = {
  type: 'bar',
  data: [{
    id: "barData",
    values: rawData,
    transforms: [
      {
      type: 'fold',
      options: {
        key: 'product',
        value: 'sales',
        fields: ['productA', 'productB', 'productC']
      }
    }
    ]
  }],
  xField: ['month', 'product'],
  yField: 'sales',
  seriesField: 'product',
  legend: {
    visible: true
  },
  tooltip: {
    visible: true
  }
};
onMounted(() => {
  // 3. 创建VChart实例并渲染
  const vchart = new VChart(spec,{
    dom:"chart"
  })
  vchart.renderSync();
  
});
</script>
<style>
#chart {
  width: 900px;
  height: 600px;
}
</style>