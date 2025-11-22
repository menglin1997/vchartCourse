<template>
  <div class="flattened-data">
    <div class="flattened-data-header">
      <h2>CSV</h2>
    </div>
    <div id="chart"></div>
  </div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
   type: 'bar',
  data: [
    {
      id: 'barData',
      values: `date,class No.1,class No.2
Monday,20,30
Tuesday,25,28`,
      parser: {
        type: 'csv'
      },
      transforms: [
        {
          type: 'fold',
          options: {
            key: 'class',
            value: 'score',
            fields: ['class No.1', 'class No.2']
          }
        }
      ]
    }
  ],
  seriesField: 'class',
  xField: ['date', 'class'],
  yField: 'score'
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
<style>
#chart {
  width: 900px;
  height: 600px;
}
</style>