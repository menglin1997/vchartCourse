<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart, StreamLight } from "@visactor/vchart";
import { onMounted } from "vue";


onMounted(() => {
const spec = {
  type: 'bar',
  data: [
    {
      id: 'bar-data ',
      values: [
        { x: '283', y: '0', y2: '0', type: 'A', type2: 'A' },
        { x: '191', y: '1', y2: '0', type: 'A', type2: 'A' },
        { x: '280', y: '2', y2: '0', type: 'A', type2: 'A' },
        { x: '79', y: '3', y2: '0', type: 'A', type2: 'A' },
        { x: '36', y: '4', y2: '0', type: 'A', type2: 'A' },
        { x: '255', y: '0', y2: '0', type: 'B', type2: 'D' },
        { x: '213', y: '1', y2: '0', type: 'B', type2: 'D' },
        { x: '285', y: '2', y2: '0', type: 'B', type2: 'D' },
        { x: '263', y: '3', y2: '0', type: 'B', type2: 'D' },
        { x: '20', y: '4', y2: '0', type: 'B', type2: 'D' }
      ]
    }
  ],
  direction: 'horizontal',
  xField: 'x',
  yField: ['y', 'type'],
  seriesField: 'type',
  axes: [
    { orient: 'left', type: 'band' },
    { orient: 'bottom', label: { visible: true }, type: 'linear' }
  ],
  animationNormal: {
    bar:{
      loop: 100,
      duration: 1500,
      easing: 'quadIn',
      custom: StreamLight,
      customParameters: {
        attribute: {
          fillColor: 'white',
          opacity: 0.6,
          blur: 5,
          shadowColor: 'white',
          width: 20
        }
      }
    }
  }
};
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