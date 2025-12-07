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
            id: 'id0',
            values: [
                { x: 'Monday', y: 15 },
                { x: 'Tuesday', y: 12 },
                { x: 'Wednesday', y: 15 },
                { x: 'Thursday', y: 10 },
                { x: 'Friday', y: 13 },
                { x: 'Saturday', y: 10 },
                { x: 'Sunday', y: 20 }
            ]
        },
        {
            id: 'id1',
            values: [
                { x: 'Monday', y: -52 },
                { x: 'Tuesday', y: -43 },
                { x: 'Wednesday', y: -33 },
                { x: 'Thursday', y: -22 },
                { x: 'Friday', y: -10 },
                { x: 'Saturday', y: -30 },
                { x: 'Sunday', y: -50 }
            ]
        }
    ],
    series: [
        {
            type: 'bar',
            id: 'bar',
            dataIndex: 0,
            stack: false,
            label: { visible: true },
            xField: 'x',
            yField: 'y'
        },
        {
            type: 'line',
            id: 'line',
            dataIndex: 1,
            label: { visible: true },
            seriesField: 'type',
            xField: 'x',
            yField: 'y',
            stack: false
        }
    ],
    axes: [
        { orient: 'left', seriesIndex: [0], id: 'axisLeft', nice: true, zero: false },
        {
            orient: 'right',
            seriesId: ['line'],
            grid: { visible: false },
            nice: false,
            zero: false,
            sync: {
                axisId: 'axisLeft', // 配置参照的轴id, 同步左侧轴的零对齐
                zeroAlign: true, // 是否同步左侧轴的零对齐
                // tickAlign: true // 是否同步左侧轴的刻度对齐
            }
        },
        { orient: 'bottom', label: { visible: true }, type: 'band' }
    ]
};

onMounted(() => {
    const vchart = new VChart(spec, {
        dom: "chart",
    });
    vchart.renderSync();
});
</script>
