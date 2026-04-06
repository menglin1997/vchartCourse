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
					{ "class": "Class1", "gender": "Male",   "min": 45, "q1": 62, "median": 74, "q3": 85, "max": 96 },
					{ "class": "Class1", "gender": "Female", "min": 52, "q1": 68, "median": 79, "q3": 90, "max": 98 },
					{ "class": "Class2", "gender": "Male",   "min": 38, "q1": 55, "median": 68, "q3": 80, "max": 92 },
					{ "class": "Class2", "gender": "Female", "min": 48, "q1": 65, "median": 76, "q3": 88, "max": 95 }
				]
			}
		],
		xField: ['class', 'gender'],
		minField: 'min',
		q1Field: 'q1',
		medianField: 'median',
		q3Field: 'q3',
		maxField: 'max',
		seriesField: 'gender'
	}

	onMounted(() => {
		const vchart = new VChart(spec, {
			dom: 'chart'
		})
		vchart.renderSync()
	})
</script>
