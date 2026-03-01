<template>
    <div id="bar-chart"></div>
</template>
<script setup lang="ts">

import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  type: 'bar',
  data: [{
    values: [
      { product: '手机', sales: 1560 },
      { product: '电脑', sales: 2340 },
      { product: '平板', sales: 1890 }
    ]
  }],
  xField: 'product',  // X轴：产品名称
  yField: 'sales',     // Y轴：销售额
};

onMounted(() => {
  const vchart = new VChart(spec, {
    dom: 'bar-chart'
  });
  vchart.renderSync();
});
</script>
<style scoped>
#bar-chart {
    width: 600px;
    height: 400px;
}
</style>