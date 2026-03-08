<template>
    <div id="chart"></div>
</template>
<script lang="ts" setup>
    import { default as VChart } from '@visactor/vchart'
    import { onMounted } from 'vue'

const spec = {
 
};
    onMounted(() => {
        const vchart = new VChart(spec, {
            dom: 'chart'
        })
        vchart.renderSync()
    })
</script>
<style scoped>
    #chart {
        width: 600px;
        height: 400px;
    }
</style>
