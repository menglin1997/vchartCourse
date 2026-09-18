<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

onMounted(() => {
  const iconUrl = (week) =>
    `https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/${week}-icon-vchart-demo.svg`;
  const iconMap = {
    Monday: iconUrl("Monday"),
    Tuesday: iconUrl("Tuesday"),
    Wednesday: iconUrl("Wednesday"),
    Thursday: iconUrl("Thursday"),
    Friday: iconUrl("Friday"),
  };

  const spec = {
    type: "bar",
    width: 835,
    data: [
      {
        id: "barData",
        values: [
          { day: "Monday", sales: 22 },
          { day: "Tuesday", sales: 13 },
          { day: "Wednesday", sales: 25 },
          { day: "Thursday", sales: 29 },
          { day: "Friday", sales: 38 },
        ],
      },
    ],
    label: {
      visible: true,
      position: "top",
      interactive: true,
      id: "label",
      style: {
        singleLine: true,
        ellipsis: true,
      },
      formatMethod: (value, data) => {
        return {
          type: "rich",
          text: [
            {
              image: iconMap[data.day],
              width: 18,
              height: 18,
            },
            {
              text: ` ${data.day}`,
              fontSize: 12,
              underline: true,
            },
            {
              text: `: `,
              fontSize: 12,
            },
            {
              text: `${value} `,
              fontSize: 14,
              fontStyle: "italic",
              fill: "black",
              fontWeight: "bold",
            },
          ],
        };
      },
    },
    xField: "day",
    yField: "sales",
    seriesField: "day",
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
