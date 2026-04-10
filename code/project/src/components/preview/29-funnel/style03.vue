<template>
	<div id="chart"></div>
</template>
<script lang="ts" setup>
	import { default as VChart } from '@visactor/vchart'
	import { onMounted } from 'vue'
	const spec = {
		type: 'funnel',
		// isTransform: true,
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
		valueField: 'value',
		shape: 'trapezoid', // 漏斗图形状，默认为'trapezoid'梯形，可选'rect' 矩形
		isCone: false, // 漏斗图是否为圆锥形，默认为false，仅当shape为'trapezoid'时有效
		gap: 12, // 漏斗相邻图元之间的间距，默认为0
		maxSize: '100%', // 最大/最小宽度 支持像素值或百分比
		minSize: '10%' // 最大/最小宽度支持像素值或百分比

	}

	onMounted(() => {
		const vchart = new VChart(spec, {
			dom: 'chart'
		})
		vchart.renderSync()
	})
</script>
