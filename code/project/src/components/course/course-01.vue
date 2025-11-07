<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from '@visactor/vchart';
import { onMounted } from 'vue';

  const spec = {
    data: [
      {
        id: "barData",
        values: [
          { month: "Monday", sales: 22 },
          { month: "Tuesday", sales: 13 },
          { month: "Wednesday", sales: 25 },
          { month: "Thursday", sales: 29 },
          { month: "Friday", sales: 38 },
        ],
      },
    ],
    type: "bar",
    xField: "month",
    yField: "sales",
  };
onMounted(()=>{
  const vchart = new VChart(spec,{
    dom:'chart'
  })
  vchart.renderSync()
})
</script>