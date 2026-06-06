<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  type: "sankey",
  data:[
  {
    name: "data",
    values: [
      {
        nodes: [
          {
            value: 100,
            name: "A",
            children: [
              {
                name: "top",
                value: 40,
                children: [
                  { name: "00", value: 15 },
                  { name: "01", value: 10 },
                  { name: "02", value: 10 },
                ],
              },
              {
                name: "middle",
                value: 30,
                children: [
                  { name: "00", value: 10 },
                  { name: "01", value: 10 },
                  { name: "02", value: 10 },
                ],
              },
              {
                name: "bottom",
                value: 30,
              },
            ],
          },
          {
            value: 80,
            name: "B",
            children: [
              {
                name: "top",
                value: 40,
                children: [
                  { name: "00", value: 100 },
                  { name: "01", value: 40 },
                ],
              },
              {
                name: "middle",
                value: 10,
              },
              {
                name: "bottom",
                value: 30,
              },
            ],
          },
          {
            value: 50,
            name: "C",
            children: [
              {
                name: "top",
                value: 20,
              },
              {
                name: "middle",
                value: 20,
              },
              {
                name: "bottom",
                value: 10,
              },
            ],
          },
        ],
      },
    ],
  },
],
  categoryField: "name",
  valueField: "value",
  // sourceField:"source",
  // targetField:"target",
  nodeAlign: "left",
  nodeGap: 8,
  nodeWidth: 10,
  minNodeHeight: 4,
  nodeKey: "name",

  label: {
    visible: true,
    state: {
      blur: {
        fill: "#e8e8e8",
        fillOpacity: 0.15,
      },
    },
  },

  node: {
    state: {
      hover: {
        fill: "red",
      },
      blur: {
        fill: "#e8e8e8",
        fillOpacity: 0.15,
      },
    },
  },

  link: {
    backgroundStyle: { fill: "#ccc", fillOpacity: 0.2 },
    fillOpacity: 0.8,
    state: {
      hover: {
        stroke: "#000000",
      },
      blur: {
        fill: "#e8e8e8",
      },
    },
  },

  emphasis: {
    enable: true,
    effect: "adjacency",
  },
};
onMounted(async () => {
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
