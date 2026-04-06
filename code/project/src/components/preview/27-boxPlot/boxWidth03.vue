<template>
	<div id="chart"></div>
</template>
<script lang="ts" setup>
	import { default as VChart } from '@visactor/vchart'
	import { onMounted } from 'vue'
	const spec = {
		type: 'boxPlot',
		data: [
			{
				values: [
					{ x: 'A', min: 5, q1: 8, median: 10, q3: 12, max: 20 },
					{ x: 'B', min: 5, q1: 8, median: 10, q3: 12, max: 20 },
					{ x: 'C', min: 5, q1: 8, median: 10, q3: 12, max: 20 }
				]
			}
		],
		xField: 'x',
		minField: 'min',
		q1Field: 'q1',
		medianField: 'median',
		q3Field: 'q3',
		maxField: 'max',
		boxPlot: {
			style: {
				boxWidth: 150 // 不指定则自适应宽度
			}
		}
	}

	onMounted(() => {
		const vchart = new VChart(spec, {
			dom: 'chart'
		})
		vchart.renderSync()
	})
</script>
