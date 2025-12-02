<template>
    <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
    type: 'area',
    data: [
        {
            id: 'area',
            values: [
                { x: '1990', y: 110, from: 'video ad' },
                { x: '1995', y: 160, from: 'video ad' },
                { x: '2000', y: 230, from: 'video ad' },
                { x: '2005', y: 300, from: 'video ad' },
                { x: '2010', y: 448, from: 'video ad' },
                { x: '2015', y: 500, from: 'video ad' },
                { x: '1990', y: 120, from: 'email marketing' },
                { x: '1995', y: 150, from: 'email marketing' },
                { x: '2000', y: 200, from: 'email marketing' },
                { x: '2005', y: 210, from: 'email marketing' },
                { x: '2010', y: 300, from: 'email marketing' },
                { x: '2015', y: 320, from: 'email marketing' }
            ]
        }
    ],
    xField: 'x',
    yField: 'y',
    seriesField: 'from',
    axes: [
        {
            orient: 'bottom'
        },
        {
            orient: 'left',
            type: 'linear'
        },
        {
            orient: 'right',
            type: 'linear'
        }
    ]
};

onMounted(() => {
    const vchart = new VChart(spec, {
        dom: "chart",
    });
    vchart.renderSync();
});
</script>
