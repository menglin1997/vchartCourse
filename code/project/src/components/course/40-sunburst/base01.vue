<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

onMounted(() => {
  const data = [
    {
      name: "Country A",
      children: [
        {
          name: "Region1",
          children: [
            { name: "Office Supplies", value: 824 },
            { name: "Furniture", value: 920 },
            { name: "Electronic equipment", value: 936 },
          ],
        },
        {
          name: "Region2",
          children: [
            { name: "Office Supplies", value: 1270 },
            { name: "Furniture", value: 1399 },
            { name: "Electronic equipment", value: 1466 },
          ],
        },
        {
          name: "Region3",
          children: [
            { name: "Office Supplies", value: 1408 },
            { name: "Furniture", value: 1676 },
            { name: "Electronic equipment", value: 1559 },
          ],
        },
        {
          name: "Region4",
          children: [
            { name: "Office Supplies", value: 745 },
            { name: "Furniture", value: 919 },
            { name: "Electronic equipment", value: 781 },
          ],
        },
        {
          name: "Region5",
          children: [
            { name: "Office Supplies", value: 267 },
            { name: "Furniture", value: 316 },
            { name: "Electronic equipment", value: 230 },
          ],
        },
        {
          name: "Region6",
          children: [
            { name: "Office Supplies", value: 347 },
            { name: "Furniture", value: 501 },
            { name: "Electronic equipment", value: 453 },
          ],
        },
      ],
    },
    {
      name: "Country B",
      children: [
        {
          name: "Region1",
          children: [
            { name: "Office Supplies", value: 824 },
            { name: "Furniture", value: 920 },
            { name: "Electronic equipment", value: 936 },
          ],
        },
        {
          name: "Region2",
          children: [
            { name: "Office Supplies", value: 1270 },
            { name: "Furniture", value: 1399 },
            { name: "Electronic equipment", value: 1466 },
          ],
        },
        {
          name: "Region3",
          children: [
            { name: "Office Supplies", value: 1408 },
            { name: "Furniture", value: 1676 },
            { name: "Electronic equipment", value: 1559 },
          ],
        },
        {
          name: "Region4",
          children: [
            { name: "Office Supplies", value: 745 },
            { name: "Furniture", value: 919 },
            { name: "Electronic equipment", value: 781 },
          ],
        },
        {
          name: "Region5",
          children: [
            { name: "Office Supplies", value: 267 },
            { name: "Furniture", value: 316 },
            { name: "Electronic equipment", value: 230 },
          ],
        },
        {
          name: "Region6",
          children: [
            { name: "Office Supplies", value: 347 },
            { name: "Furniture", value: 501 },
            { name: "Electronic equipment", value: 453 },
          ],
        },
      ],
    },
    {
      name: "Country C",
      children: [
        {
          name: "Region1",
          children: [
            { name: "Office Supplies", value: 824 },
            { name: "Furniture", value: 920 },
            { name: "Electronic equipment", value: 936 },
          ],
        },
        {
          name: "Region2",
          children: [
            { name: "Office Supplies", value: 1270 },
            { name: "Furniture", value: 1399 },
            { name: "Electronic equipment", value: 1466 },
          ],
        },
        {
          name: "Region3",
          children: [
            { name: "Office Supplies", value: 1408 },
            { name: "Furniture", value: 1676 },
            { name: "Electronic equipment", value: 1559 },
          ],
        },
        {
          name: "Region4",
          children: [
            { name: "Office Supplies", value: 745 },
            { name: "Furniture", value: 919 },
            { name: "Electronic equipment", value: 781 },
          ],
        },
        {
          name: "Region5",
          children: [
            { name: "Office Supplies", value: 267 },
            { name: "Furniture", value: 316 },
            { name: "Electronic equipment", value: 230 },
          ],
        },
        {
          name: "Region6",
          children: [
            { name: "Office Supplies", value: 347 },
            { name: "Furniture", value: 501 },
            { name: "Electronic equipment", value: 453 },
          ],
        },
      ],
    },
  ];

  const spec = {
    type: "sunburst",
    categoryField: "name",
    valueField: "value",
    sunburst: {
      visible: true,
      style: {
        fillOpacity: (datum) => {
          return datum.isLeaf ? 0.4 : 0.8;
        },
      },
    },
    label: {
      visible: true,
      style: {
        fontSize: 12,
        fillOpacity: (datum) => {
          return datum.isLeaf ? 0.4 : 0.8;
        },
      },
    },
    data: [
      {
        id: "data",
        values: data,
      },
    ],
    // centerX: 300,
    // centerY: 300,
    // offsetX: 100,
    // offsetY: 100,
    // endAngle: 180,
    // startAngle: 0,
    // innerRadius: [0.5,0.6,0.6],
    // outerRadius: 1,
    gap: 50,
    drill: true,
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
  height: 500px;
}
</style>
