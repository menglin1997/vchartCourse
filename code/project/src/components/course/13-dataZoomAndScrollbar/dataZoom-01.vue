<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted, ref } from "vue";
let vchart = null;
const spec = {
  color: ['#1ac7c2', '#6f40aa', '#ccf59a', '#D4ADFC'],
  type: 'bar',
  dataId: 'bar',
  xField: 'Date',
  yField: 'Close',
  seriesField: 'Symbol',
  legends: {
    visible: true,
    orient: 'top'
  },
  data: [
    {
      id: 'bar',
      values: [
        { Symbol: 'AMZN', Date: '2016-01-04', Close: 636.98999 },
        { Symbol: 'AMZN', Date: '2016-01-05', Close: 633.789978 },
        { Symbol: 'AMZN', Date: '2016-01-06', Close: 632.650024 },
        { Symbol: 'AMZN', Date: '2016-01-07', Close: 607.940002 },
        { Symbol: 'AMZN', Date: '2016-01-08', Close: 607.049988 },
        { Symbol: 'AMZN', Date: '2016-01-11', Close: 617.73999 },
        { Symbol: 'AMZN', Date: '2016-01-12', Close: 617.890015 },
        { Symbol: 'AMZN', Date: '2016-01-13', Close: 581.809998 },
        { Symbol: 'AMZN', Date: '2016-01-14', Close: 593 },
        { Symbol: 'AMZN', Date: '2016-01-15', Close: 570.179993 },
        { Symbol: 'AMZN', Date: '2016-01-19', Close: 574.47998 },
        { Symbol: 'AMZN', Date: '2016-01-20', Close: 571.77002 },
        { Symbol: 'AMZN', Date: '2016-01-21', Close: 575.02002 },
        { Symbol: 'AMZN', Date: '2016-01-22', Close: 596.380005 },
        { Symbol: 'AMZN', Date: '2016-01-25', Close: 596.530029 },
        { Symbol: 'AMZN', Date: '2016-01-26', Close: 601.25 },
        { Symbol: 'AMZN', Date: '2016-01-27', Close: 583.349976 },
        { Symbol: 'AMZN', Date: '2016-01-28', Close: 635.349976 },
        { Symbol: 'AMZN', Date: '2016-01-29', Close: 587 },
        { Symbol: 'GOOG', Date: '2016-01-04', Close: 741.840027 },
        { Symbol: 'GOOG', Date: '2016-01-05', Close: 742.580017 },
        { Symbol: 'GOOG', Date: '2016-01-06', Close: 743.619995 },
        { Symbol: 'GOOG', Date: '2016-01-07', Close: 726.390015 },
        { Symbol: 'GOOG', Date: '2016-01-08', Close: 714.469971 },
        { Symbol: 'GOOG', Date: '2016-01-11', Close: 716.030029 },
        { Symbol: 'GOOG', Date: '2016-01-12', Close: 726.070007 },
        { Symbol: 'GOOG', Date: '2016-01-13', Close: 700.559998 },
        { Symbol: 'GOOG', Date: '2016-01-14', Close: 714.719971 },
        { Symbol: 'GOOG', Date: '2016-01-15', Close: 694.450012 },
        { Symbol: 'GOOG', Date: '2016-01-19', Close: 701.789978 },
        { Symbol: 'GOOG', Date: '2016-01-20', Close: 698.450012 },
        { Symbol: 'GOOG', Date: '2016-01-21', Close: 706.590027 },
        { Symbol: 'GOOG', Date: '2016-01-22', Close: 725.25 },
        { Symbol: 'GOOG', Date: '2016-01-25', Close: 711.669983 },
        { Symbol: 'GOOG', Date: '2016-01-26', Close: 713.039978 },
        { Symbol: 'GOOG', Date: '2016-01-27', Close: 699.98999 },
        { Symbol: 'GOOG', Date: '2016-01-28', Close: 730.960022 },
        { Symbol: 'GOOG', Date: '2016-01-29', Close: 742.950012 },
        { Symbol: 'IBM', Date: '2016-01-04', Close: 135.949997 },
        { Symbol: 'IBM', Date: '2016-01-05', Close: 135.850006 },
        { Symbol: 'IBM', Date: '2016-01-06', Close: 135.169998 },
        { Symbol: 'IBM', Date: '2016-01-07', Close: 132.860001 },
        { Symbol: 'IBM', Date: '2016-01-08', Close: 131.630005 },
        { Symbol: 'IBM', Date: '2016-01-11', Close: 133.229996 },
        { Symbol: 'IBM', Date: '2016-01-12', Close: 132.899994 },
        { Symbol: 'IBM', Date: '2016-01-13', Close: 131.169998 },
        { Symbol: 'IBM', Date: '2016-01-14', Close: 132.910004 },
        { Symbol: 'IBM', Date: '2016-01-15', Close: 130.029999 },
        { Symbol: 'IBM', Date: '2016-01-19', Close: 128.110001 },
        { Symbol: 'IBM', Date: '2016-01-20', Close: 121.860001 },
        { Symbol: 'IBM', Date: '2016-01-21', Close: 122.910004 },
        { Symbol: 'IBM', Date: '2016-01-22', Close: 122.5 },
        { Symbol: 'IBM', Date: '2016-01-25', Close: 122.080002 },
        { Symbol: 'IBM', Date: '2016-01-26', Close: 122.589996 },
        { Symbol: 'IBM', Date: '2016-01-27', Close: 120.959999 },
        { Symbol: 'IBM', Date: '2016-01-28', Close: 122.220001 },
        { Symbol: 'IBM', Date: '2016-01-29', Close: 124.790001 },
        { Symbol: 'MSFT', Date: '2016-01-04', Close: 54.799999 },
        { Symbol: 'MSFT', Date: '2016-01-05', Close: 55.049999 },
        { Symbol: 'MSFT', Date: '2016-01-06', Close: 54.049999 },
        { Symbol: 'MSFT', Date: '2016-01-07', Close: 52.169998 },
        { Symbol: 'MSFT', Date: '2016-01-08', Close: 52.330002 },
        { Symbol: 'MSFT', Date: '2016-01-11', Close: 52.299999 },
        { Symbol: 'MSFT', Date: '2016-01-12', Close: 52.779999 },
        { Symbol: 'MSFT', Date: '2016-01-13', Close: 51.639999 },
        { Symbol: 'MSFT', Date: '2016-01-14', Close: 53.110001 },
        { Symbol: 'MSFT', Date: '2016-01-15', Close: 50.990002 },
        { Symbol: 'MSFT', Date: '2016-01-19', Close: 50.560001 },
        { Symbol: 'MSFT', Date: '2016-01-20', Close: 50.790001 },
        { Symbol: 'MSFT', Date: '2016-01-21', Close: 50.48 },
        { Symbol: 'MSFT', Date: '2016-01-22', Close: 52.290001 },
        { Symbol: 'MSFT', Date: '2016-01-25', Close: 51.790001 },
        { Symbol: 'MSFT', Date: '2016-01-26', Close: 52.169998 },
        { Symbol: 'MSFT', Date: '2016-01-27', Close: 51.220001 },
        { Symbol: 'MSFT', Date: '2016-01-28', Close: 52.060001 },
        { Symbol: 'MSFT', Date: '2016-01-29', Close: 55.09 }
      ]
    }
  ],
  dataZoom: [
    {
        orient: 'bottom',
        backgroundChart: {
            area: {
                style:{
                    fill:'red'
                }
            },
             line: {
                style:{
                    stroke:'green',
                    lineWidth: 1
                }
            }
        },
        selectedBackgroundChart: {
            area: {
                style:{
                    fill:'yellow',
                    lineWidth: 1
                }
            },
            line: {
                style:{
                    stroke:'green',
                    lineWidth: 1
                }
            }
        }
    }
  ]
};
onMounted(() => {
  vchart = new VChart(spec, {
    dom: "chart", animation: false
  });
  vchart.renderSync();
});
</script>
<style>
</style>
