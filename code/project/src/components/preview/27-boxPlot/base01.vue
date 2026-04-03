<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const data = [
  {
    name: 'boxPlot',
    values: [
      {
        x: 'Sub-Saharan Africa',
        y1: 8.72,
        y2: 9.73,
        y3: 10.17,
        y4: 10.51,
        y5: 11.64
      },
      {
        x: 'South Asia',
        y1: 9.4,
        y2: 10.06,
        y3: 10.75,
        y4: 11.56,
        y5: 12.5
      },
      {
        x: 'Middle East & North Africa',
        y1: 9.54,
        y2: 10.6,
        y3: 11.05,
        y4: 11.5,
        y5: 11.92
      },
      {
        x: 'Latin America & Caribbean',
        y1: 8.74,
        y2: 9.46,
        y3: 10.35,
        y4: 10.94,
        y5: 12.21
      },
      {
        x: 'East Asia & Pacific',
        y1: 7.8,
        y2: 8.95,
        y3: 10.18,
        y4: 11.57,
        y5: 13.25
      },
      {
        x: 'Europe & Central Asia',
        y1: 9.52,
        y2: 10.39,
        y3: 10.93,
        y4: 11.69,
        y5: 12.63
      }
    ]
  }
];

const spec = {
  type: 'boxPlot',
  data: data,
  xField: 'x',

  minField: 'y1',
  q1Field: 'y2',
  medianField: 'y3',
  q3Field: 'y4',
  maxField: 'y5',
  direction: 'vertical'
};

onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
