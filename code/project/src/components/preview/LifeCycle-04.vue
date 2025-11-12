<template>
	<button @click="renderChart">渲染图表</button>
	<button @click="updateData">查看下半年数据</button>
	<button @click="updateSpec">更新配置</button>
	<button @click="destroyChart">销毁图表</button>
	<div id="chart"></div>
</template>
<script lang="ts" setup>
	import { default as VChart } from '@visactor/vchart'
	import { onMounted } from 'vue'

	let data = [
		{
			id: 'barData',
			values: [
				{ type: 'A', month: '01', value: 129, sales: 220 },
				{ type: 'B', month: '01', value: 110, sales: 210 },
				{ type: 'A', month: '02', value: 130, sales: 220 },
				{ type: 'B', month: '02', value: 123, sales: 230 },
				{ type: 'A', month: '03', value: 126, sales: 260 },
				{ type: 'B', month: '03', value: 133, sales: 270 },
				{ type: 'A', month: '04', value: 117, sales: 280 },
				{ type: 'B', month: '04', value: 133, sales: 280 },
				{ type: 'A', month: '05', value: 114, sales: 270 },
				{ type: 'B', month: '05', value: 133, sales: 280 },
				{ type: 'A', month: '06', value: 111, sales: 290 },
				{ type: 'B', month: '06', value: 133, sales: 290 }
			]
		}
	]
	// 实现A组和B组上半年的销售数据对比-Compare the sales data of A group and B group in recent years
	const spec = {
		// 1.声明图表类型-Declare the type of chart
		type: 'bar',
		// 2.声明数据-Declare the data
		data: data,
		// 3.声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
		xField: ['month', 'type'],
		// 4.声明 y 轴字段-Declare the y axis field
		yField: 'value',
		// 5.用于颜色映射-Declare the series field for color mapping
		seriesField: 'type',
		// 6.系列配置: 图元样式-Declare the style of the bar element, set the corner radius
		bar: {
			style: {
				cornerRadius: 4
			}
		}
		// 7.系列配置: 图元标签-Declare the label of the bar element
		// label: {
		//   visible: true,
		//   position: 'top'
		// },
		// // 8.配置图例-Declare the legend
		// legends: {
		//   visible: true,
		//   orient: 'top',
		//   position: 'start'
		// },
		// // 9.配置 十字准星 crosshair-Declare the crosshair
		// crosshair: {
		//   xField: { visible: true },
		//   yField: { visible: true }
		// },
		// // 10.配置坐标轴，对于 type 不为 'common'(即组合图)的图表，轴的配置会默认生成，所以如果不需要特殊的定制，也可以不声明-Declare the axes,
		// // 声明 x 轴字段，当存在分组时-Declare the x axis field when there is grouping
		// // 声明 y 轴字段-Declare the y axis field
		// axes: [{ orient: 'bottom' }, { orient: 'left', domainLine: { visible: true } }]
	}
	let vchart
	onMounted(() => {
		vchart = new VChart(spec, {
			dom: 'chart',
			interactive: true, // 交互开关
			beforeRender: (stage) => {
				/* 渲染前回调 */
				// console.log('beforeRender', stage);
			},
			afterRender: (stage) => {
				/* 渲染后回调 */
				// console.log('afterRender', stage);
			}
		})

		// 图表初始化完成回调-Chart initialized callback
		// vchart.on('initialized', (event) => {
		// 	console.log('图表初始化完成')
		// })

		// // 图表渲染完成回调-Chart rendered callback
		// vchart.on('renderFinished', (event) => {
		// 	console.log('图表渲染完成')
		// })

		vchart.renderSync()
	})

	// 渲染图表函数-Function to render the chart
	const renderChart = () => {
		if (!vchart) {
			vchart = new VChart(spec, {
				dom: 'chart',
				interactive: true, // 交互开关
				beforeRender: (stage) => {
					/* 渲染前回调 */
					// console.log('beforeRender', stage);
				},
				afterRender: (stage) => {
					/* 渲染后回调 */
					// console.log('afterRender', stage);
				}
			})
		}

		vchart.renderSync()
	}

	const data1 = [
		{ type: 'A', month: '07', value: 100, sales: 200 },
		{ type: 'B', month: '07', value: 126, sales: 200 },
		{ type: 'A', month: '08', value: 112, sales: 210 },
		{ type: 'B', month: '08', value: 122, sales: 210 },
		{ type: 'A', month: '09', value: 156, sales: 220 },
		{ type: 'B', month: '09', value: 159, sales: 240 },
		{ type: 'A', month: '10', value: 156, sales: 310 },
		{ type: 'B', month: '10', value: 189, sales: 300 }
	]
	const updateData = () => {
		vchart.updateData('barData', data1)
	}

	const updateSpec = () => {
		// vchart.updateSpec({
		// 	// 新的配置项
		// 	title: {
		// 		visible: true,
		// 		text: '销售额统计'
		// 	},
		// 	// 可以只更新部分配置
		// 	yField: 'sales'
		// },true)
		spec['title'] = {
			visible: true,
			text: '销售额统计'
		}
		vchart.updateSpec(spec)
	}

	const destroyChart = () => {
		vchart.release()
		vchart = null
	}
</script>
