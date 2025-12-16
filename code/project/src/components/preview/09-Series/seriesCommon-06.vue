<template>
  <div>
     </div>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  type: 'common',
  seriesField: 'type',
  data: [
    {
      id: 'dataBar',
      values: [
        { year: '1990', group: '18-34', value: 11.125 },
        { year: '1991', group: '18-34', value: 12.4 },
        { year: '1993', group: '18-34', value: 18.425 },
        { year: '1990', group: '35-64', value: 10.125 },
        { year: '1991', group: '35-64', value: 11.4 },
        { year: '1993', group: '35-64', value: 17.425 }
      ]
    },
    {
      id: 'dataLine',
      values: [
        { year: '1990', avg: 11.125 },
        { year: '1991', avg: 12.4 },
        { year: '1993', avg: 18.425 }
      ]
    }
  ],
  series: [
    {
      type: 'bar',
      dataId: 'dataBar',
      xField: 'year',
      yField: 'value',
      seriesField: 'group'
    },
    {
      type: 'line',
      dataId: 'dataLine',
      xField: 'year',
      yField: 'avg'
    }
  ],
  axes: [{ orient: 'left' }, { orient: 'bottom', type: 'band' }]
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
