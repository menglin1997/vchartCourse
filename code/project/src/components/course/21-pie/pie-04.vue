<template>
    <div id="chart"></div>
</template>
<script lang="ts" setup>
    import { default as VChart } from '@visactor/vchart'
    import { onMounted } from 'vue'

const spec = {
 type: 'pie',
  data: [
    {
      values: [
        { department: '研发部', budget: 150 },
        { department: '市场部', budget: 80 },
        { department: '销售部', budget: 120 },
        { department: '行政部', budget: 30 },
        { department: '财务部', budget: 20 }
      ]
    }
  ],
  categoryField: 'department',
  valueField: 'budget',
  label: { visible: true,

        position: 'outside',
        formatMethod:(text,datum)=>{
            return `${datum["department"]}:${datum["budget"]}万`
        }
  },
  legends: {
    visible: true,
    orient: 'top',
  },
  
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
