<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

onMounted(() => {
  const spec = {
    type: "pie",
    data: [
      {
        values: [
          {
            value: "159",
            type: "Tradition Industries",
            percentage: "71.6%",
          },
          {
            value: "50",
            type: "Business Companies",
            percentage: "22.5%",
          },
          {
            value: "13",
            type: "Customer-facing Companies",
            percentage: "5.9%",
          },
        ],
      },
    ],
    radius: 0.8,
    innerRadius: 0.5,
    valueField: "value",
    categoryField: "type",
    label: {
      visible: true,
      style: {
        fontSize: 16,
      },
      line: {
        style: {},
        line1MinLength: 30,
      },
      layout: {
        align: "edge",
      },
    },
    pie: {
      state: {
        selected: {
          outerRadius: 0.85,
        },
      },
    },
    indicator: {
      visible: true,
      fixed: false,
      trigger: "select",
      gap: 10,
      title: {
        style: {
          fontSize: 16,
          text: (datum) => {
            if (!datum) {
              return "";
            }
            return {
              type: "rich",
              text: [
                {
                  text: "type:",
                  fontWeight: "bold",
                  fontSize: 20,
                  fill: "#3f51b5",
                },
                {
                  text: datum.type,
                  fontStyle: "italic",
                  textDecoration: "underline",
                  fill: "#3f51b5",
                },
              ],
            };
          },
        },
      },
      content: [
        {
          field: "value",
          style: {
            fontSize: 42,
            fontWeight: "bolder",
          },
        },
        {
          field: "percentage",
          style: {
            fontSize: 20,
          },
        },
      ],
    },
  };
  // 创建 VChart 实例并渲染
  const vchart = new VChart(spec, { dom: "richtext-chart" });
  vchart.renderSync();
});
</script>
<style scoped>
#richtext-chart {
  width: 600px;
  height: 400px;
}
</style>
