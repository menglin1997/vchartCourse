<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  type: "sankey",
  data: [
  {
    values: [
      {
        nodes: [
          { nodeName: "A" },
          { nodeName: "B" },
          { nodeName: "C" },
          { nodeName: "D" },
          { nodeName: "E" },
          { nodeName: "F" },
          { nodeName: "G" },
        ],
        links: [
          { source: "A", target: "D", value: 400 },
          { source: "B", target: "D", value: 400 },
          { source: "C", target: "D", value: 500 },
          { source: "D", target: "F", value: 800 },
          { source: "C", target: "E", value: 100 },
          { source: "E", target: "G", value: 100 },
          { source: "D", target: "G", value: 500 },
        ],
      },
    ],
  },
],
  categoryField: "nodeName",
  valueField: "value",
  sourceField:"source",
  targetField:"target",
  nodeAlign: "left",
  nodeGap: 8,
  nodeWidth: 10,
  minNodeHeight: 4,
  nodeKey: "nodeName",

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
