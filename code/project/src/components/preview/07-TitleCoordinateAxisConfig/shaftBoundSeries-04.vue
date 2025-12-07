<template>
    <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
    type: 'common',
    seriesField: 'color',
    data: [
        {
            id: 'data0',
            values: [
                { x: 'Monday', type: 'Breakfast', y: 15 },
                { x: 'Monday', type: 'Lunch', y: 25 },
                { x: 'Tuesday', type: 'Breakfast', y: 12 },
                { x: 'Tuesday', type: 'Lunch', y: 30 },
                { x: 'Wednesday', type: 'Breakfast', y: 15 },
                { x: 'Wednesday', type: 'Lunch', y: 24 },
                { x: 'Thursday', type: 'Breakfast', y: 10 },
                { x: 'Thursday', type: 'Lunch', y: 25 },
                { x: 'Friday', type: 'Breakfast', y: 13 },
                { x: 'Friday', type: 'Lunch', y: 20 },
                { x: 'Saturday', type: 'Breakfast', y: 10 },
                { x: 'Saturday', type: 'Lunch', y: 22 },
                { x: 'Sunday', type: 'Breakfast', y: 12 },
                { x: 'Sunday', type: 'Lunch', y: 19 }
            ]
        },
        {
            id: 'data1',
            values: [
                { x: 'Monday', type: 'Wine', y: 22 },
                { x: 'Tuesday', type: 'Wine', y: 23 },
                { x: 'Wednesday', type: 'Wine', y: 13 },
                { x: 'Thursday', type: 'Wine', y: 12 },
                { x: 'Friday', type: 'Wine', y: 10 },
                { x: 'Saturday', type: 'Wine', y: 20 },
                { x: 'Sunday', type: 'Wine', y: 10 }
            ]
        },
        {
            id: 'data2',
            values: [
                { x: 'Monday', type: 'Beverages', y: 132 },
                { x: 'Tuesday', type: 'Beverages', y: 143 },
                { x: 'Wednesday', type: 'Beverages', y: 143 },
                { x: 'Thursday', type: 'Beverages', y: 132 },
                { x: 'Friday', type: 'Beverages', y: 130 },
                { x: 'Saturday', type: 'Beverages', y: 130 },
                { x: 'Sunday', type: 'Beverages', y: 150 }
            ]
        }
    ],
    series: [
        {
            type: 'bar',
            id: 'bar0',
            dataIndex: 0,
            seriesField: 'type',
            dataIndex: 0,
            xField: ['x', 'type'],
            yField: 'y'
        },
        {
            type: 'line',
            id: 'line0',
            dataId: 'data1',
            seriesField: 'type',
            xField: 'x',
            yField: 'y',
            stack: false
        },
        {
            type: 'line',
            id: 'line1',
            dataId: 'data2',
            seriesField: 'type',
            xField: 'x',
            yField: 'y',
            stack: false
        }
    ],
    axes: [
        { orient: 'left', seriesId: ['bar0'] }, // 声明绑定系列
        { orient: 'right', seriesIndex: [1, 2] }, // 声明绑定系列
        { orient: 'bottom', label: { visible: true }, type: 'band' }
    ],
    legends: {
        visible: true,
        orient: 'bottom'
    }
};

onMounted(() => {
    const vchart = new VChart(spec, {
        dom: "chart",
    });
    vchart.renderSync();
});
</script>
