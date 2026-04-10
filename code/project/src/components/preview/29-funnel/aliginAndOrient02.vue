<template>
	<div id="chart"></div>
</template>
<script lang="ts" setup>
	import { default as VChart } from '@visactor/vchart'
	import { onMounted } from 'vue'
	const spec = {
		type: 'funnel',
		isTransform: true,
		funnelAlign: 'left',
		funnelOrient: 'right',
		transformLabel: {
			visible: true
		},
		label: {
			visible: true
		},
		legends: {
			visible: true,
			orient: 'bottom',
			padding: {
				top: 20
			}
		},
		data: [
			{
				id: 'funnel',
				values: [
					{
						value: 100,
						name: 'Step1'
					},
					{
						value: 80,
						name: 'Step2'
					},
					{
						value: 60,
						name: 'Step3'
					},
					{
						value: 40,
						name: 'Step4'
					},
					{
						value: 20,
						name: 'Step5'
					}
				]
			}
		],
		categoryField: 'name',
		valueField: 'value'
	}

	onMounted(() => {
		const vchart = new VChart(spec, {
			dom: 'chart'
		})
		vchart.renderSync()
	})
</script>
