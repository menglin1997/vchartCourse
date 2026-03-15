<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const data = {
  id: '0',
  values: [
    {
      time: '2:00',
      value: 27,
      type: 'sales'
    },
    {
      time: '6:00',
      value: 25,
      type: 'sales'
    },
    {
      time: '10:00',
      value: 18,
      type: 'sales'
    },
    {
      time: '14:00',
      value: 15,
      type: 'sales'
    },
    {
      time: '18:00',
      value: 10,
      type: 'sales'
    },
    {
      time: '22:00',
      value: 5,
      type: 'sales'
    },
    {
      time: '2:00',
      value: 7,
      type: 'count'
    },
    {
      time: '6:00',
      value: 5,
      type: 'count'
    },
    {
      time: '10:00',
      value: 38,
      type: 'count'
    },
    {
      time: '14:00',
      value: 5,
      type: 'count'
    },
    {
      time: '18:00',
      value: 20,
      type: 'count'
    },
    {
      time: '22:00',
      value: 15,
      type: 'count'
    }
  ]
};

const spec = {
  type: 'rose',
  data,
  categoryField: 'time',
  valueField: 'value',
  seriesField: 'type',
  outerRadius: 0.9,
  stack: true,
  axes: [
    {
      orient: 'angle',
      domainLine: { visible: true },
      grid: { visible: true, alignWithLabel: false },
      label: {
        visible: true
      }
    },
    {
      orient: 'radius',
      grid: { visible: true, smooth: true }
    }
  ],
  // crosshair: {
  //   categoryField: {
  //     visible: true,
  //     line: {
  //       type: 'rect'
  //     }
  //   }
  // }
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
