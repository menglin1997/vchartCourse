<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
// https://www.visactor.com/vchart/api/API/function
onMounted(() => {
 function labelFormat(key) {
  return key + 'test';
}

// Global registration function
// VChart.registerFunction('labelFormat', labelFormat);

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
  xField: 'month',
  yField: 'sales',
  label: {
    visible: true,
    formatMethod: 'labelFormat'
  }
};

  // 创建 VChart 实例并渲染
  const vchart = new VChart(spec, { dom: "richtext-chart" });
  vchart.registerFunction('labelFormat', labelFormat);

  vchart.renderSync();
});
</script>
<style scoped>
#richtext-chart {
  width: 600px;
  height: 400px;
}
</style>
