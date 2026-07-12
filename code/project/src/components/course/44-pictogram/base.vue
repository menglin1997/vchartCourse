<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
import { registerPictogramChart } from '@visactor/vchart-extension';
registerPictogramChart();

onMounted(async() => {
  const response = await fetch('https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/pictogram/cow.svg');
  const shape = await response.text();
  console.log(shape);
  const spec = {
    type: 'pictogram',
    data: {
      id: 'data',
      values: [{ name: 'Yes', value: 'Love This' }, { name: 'So-so' }, { name: 'Forbidden' }, { name: 'Horror' }]
    },
    seriesField: 'name',
    nameField: 'name',
    valueField: 'value',
    svg: 'cat',
  }
  VChart.registerSVG('cat', shape);
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
