<script setup lang="ts">
// 课堂实操-Course practice
import course01 from "../components/course/course-01.vue";
import course02 from "../components/course/course-02.vue";
import course03 from "../components/course/course-03.vue";
import course04 from "../components/course/course-04.vue";
import course05 from "../components/course/course-05.vue";
import course06 from "../components/course/course-06.vue";
import course08 from "../components/course/course-08.vue";
import course10 from "../components/course/10-tooltip/tooltipHandler.vue";
import course13_dataZoom01 from "../components/course/13-dataZoomAndScrollbar/dataZoom-01.vue";
import course13_scrollbar02 from "../components/course/13-dataZoomAndScrollbar/scrollbar-02.vue";
import course14_player01 from "../components/course/14-player/discrete-01.vue";
import course14_player02 from "../components/course/14-player/continuous-02.vue";
import course15_brush01 from "../components/course/15-Brush/brush.vue";
import course16_markPoint01 from "../components/course/16-Marker/markPoint-01.vue";
import course16_markLine02 from "../components/course/16-Marker/markLine-02.vue";
import course17_lineOrAreaBase01 from "../components/course/17-LineAndArea/lineOrAreaBase-01.vue";
import course18_lineAndAreaAdvanced01 from "../components/course/18-LineAndAreaAdvanced/line-01.vue";
import course18_lineAndAreaAdvanced02 from "../components/course/18-LineAndAreaAdvanced/area-02.vue";
import course18_lineAndAreaAdvanced03 from "../components/course/18-LineAndAreaAdvanced/practice-03.vue";
import course19_barBase01 from "../components/course/19-Bar/base01.vue";
import course19_barDemo01 from "../components/course/19-Bar/demo01.vue";
import preview20_bar from "../components/course/20-BarAdvanced/base01.vue";
import preview20_bar2 from "../components/course/20-BarAdvanced/base02.vue";
import preview20_bar3 from "../components/course/20-BarAdvanced/base03.vue";
import course21_pie01 from "../components/course/21-pie/pie-01.vue";
import course21_pie02 from "../components/course/21-pie/pie-02.vue";
import course21_pie03 from "../components/course/21-pie/pie-03.vue";
import course21_pie04 from "../components/course/21-pie/pie-04.vue";
import course21_pie05 from "../components/course/21-pie/pie-05.vue";

import course22 from "../components/course/22-PieAdvanced/pie.vue";

import course23Rose01 from "../components/course/23-Rose/rose01.vue";
import course23Rose02 from "../components/course/23-Rose/rose02.vue";
import course23Rose03 from "../components/course/23-Rose/rose03.vue";

import course24_histogram01 from "../components/course/24-histogram/base01.vue";
import course24_histogram02 from "../components/course/24-histogram/common02.vue";
import course24_histogram03 from "../components/course/24-histogram/histogram03.vue";

import course25_scatter01 from "../components/course/25-scatter/scatter01.vue";
import course25_scatter02Style from "../components/course/25-scatter/scatter02Style.vue";
import course25_scatter03Size from "../components/course/25-scatter/scatter03Size.vue";

import course26_heatmap from "../components/course/26-heatmap/base01.vue";

import course27_base01 from "../components/course/27-boxPlot/base01.vue";
import course27_boxWidth02 from "../components/course/27-boxPlot/boxWidth02.vue";
import course27_group03 from "../components/course/27-boxPlot/group03.vue";

import course28_base01 from "../components/course/28-waterfall/base01.vue";
import course28_totalField02 from "../components/course/28-waterfall/totalField02.vue";
import course28_totalCustom03 from "../components/course/28-waterfall/totalCustom03.vue";

import course29_funnel01 from "../components/course/29-funnel/base01.vue";

import course30_sequence01 from "../components/course/30-sequence/base01.vue";

import course31_rangeColumn01 from "../components/course/31-rangeColumnAndArea/base01.vue";
import course31_rangeArea01 from "../components/course/31-rangeColumnAndArea/rangeArea.vue";


// 课前演示-Preview before the course
// import preview03 from '../components/preview/BasicConfig-03.vue'
import preview04 from "../components/preview/LifeCycle-04.vue";
import preview05 from "../components/preview/ChartComposition-05.vue";
import preview06_FlattenedData from "../components/preview/06-DataTypesAndDefinitions/flattenedData-01.vue";
import preview06_CsvData from "../components/preview/06-DataTypesAndDefinitions/csvData-02.vue";
import preview06_TreeData from "../components/preview/06-DataTypesAndDefinitions/treeData-03.vue";
import preview06_Transform1 from "../components/preview/06-DataTypesAndDefinitions/transforms1-04.vue";
import preview06_Transform2 from "../components/preview/06-DataTypesAndDefinitions/transforms2-05.vue";
import preview06_CaseStudy06 from "../components/preview/06-DataTypesAndDefinitions/caseStudy-06.vue";
import preview07_Title01 from "../components/preview/07-TitleCoordinateAxisConfig/title-01.vue";
import preview07_AxisLabelLayout02 from "../components/preview/07-TitleCoordinateAxisConfig/AxisLabelLayout-02.vue";
import preview07_mulAxes03 from "../components/preview/07-TitleCoordinateAxisConfig/mulAxes-03.vue";
import preview07_Axes04 from "../components/preview/07-TitleCoordinateAxisConfig/shaftBoundSeries-04.vue";
import preview07_value0Alignment05 from "../components/preview/07-TitleCoordinateAxisConfig/value0Alignment-05.vue";
import preview07_TickAlignment06 from "../components/preview/07-TitleCoordinateAxisConfig/tickAlignment-06.vue";
import preview08_CaseStudy08 from "../components/preview/08-TitleCoordinateAxisConfigDemo/caseStudy-01.vue";
import preview09_Series01 from "../components/preview/09-Series/label-01.vue";
import preview09_Series02 from "../components/preview/09-Series/label-02.vue";
import preview09_Series03 from "../components/preview/09-Series/point-03.vue";

import preview09_Series04 from "../components/preview/09-Series/pointScale-04.vue";


import preview09_Series05 from "../components/preview/09-Series/line-05.vue";
import preview09_Series06 from "../components/preview/09-Series/seriesDefaut-06.vue";
import preview09_Series07 from "../components/preview/09-Series/seriesCommon-07.vue";

import preview10_tooltip01 from "../components/preview/10-Tooltip/tooltip-01.vue";
import preview10_tooltip02 from "../components/preview/10-Tooltip/tooltipTitle-02.vue";
import preview10_tooltip03 from "../components/preview/10-Tooltip/tooltipContent-03.vue";
import preview10_tooltip04 from "../components/preview/10-Tooltip/tooltipHandler-04.vue";

import preview11_legend01 from "../components/preview/11-Legend/customUi-01.vue";
import preview11_legend02 from "../components/preview/11-Legend/updateState-02.vue";
import preview11_legend03 from "../components/preview/11-Legend/customData-03.vue";

import preview12_crosshair01 from "../components/preview/12-CrosshairAndIndicator/rightAngle-01.vue";
import preview12_crosshair02 from "../components/preview/12-CrosshairAndIndicator/polarCoordinates-02.vue";
import preview12_crosshair03 from "../components/preview/12-CrosshairAndIndicator/region-03.vue";
import preview12_indicator04 from "../components/preview/12-CrosshairAndIndicator/indicator-04.vue";

import preview13_dataZoom01 from "../components/preview/13-DataZoomAndScrollbar/dataZoom-01.vue";
import preview13_scrollbar02 from "../components/preview/13-DataZoomAndScrollbar/scrollbar-02.vue";

import preview14_player01 from "../components/preview/14-player/discrete-01.vue";
import preview14_player02 from "../components/preview/14-player/continuous-02.vue";

import preview15_brush from "../components/preview/15-Brush/brush.vue";

import preview16_marker01 from "../components/preview/16-Marker/markPoint-01.vue";
import preview16_marker02 from "../components/preview/16-Marker/markLine-02.vue";
import preview17_lineOrAreaBase01 from "../components/preview/17-LineAndArea/lineOrAreaBase-01.vue";

import preview18_line01 from "../components/preview/18-LineAndAreaAdvanced/line-01.vue";
import preview18_area02 from "../components/preview/18-LineAndAreaAdvanced/area-02.vue";
import preview18_practice03 from "../components/preview/18-LineAndAreaAdvanced/practice-03.vue";

import preview19_bar01 from "../components/preview/19-Bar/base01.vue";
import preview19_bar02 from "../components/preview/19-Bar/base02.vue";
import preview19_demo1 from "../components/preview/19-Bar/demo1.vue";

import preview20_bar01 from "../components/preview/20-BarAdvanced/base01.vue";
import preview20_bar_stack_02 from "../components/preview/20-BarAdvanced/bar-stack-02.vue";
import preview20_bar_stack_03 from "../components/preview/20-BarAdvanced/bar-stack-03.vue";

import preview21_pie01 from "../components/preview/21-pie/pie-01.vue";
import preview21_pie02 from "../components/preview/21-pie/pie-02.vue";
import preview21_pie03 from "../components/preview/21-pie/pie-label-03.vue";
import preview21_pie04 from "../components/preview/21-pie/pie-legend-04.vue";
import preview21_pie05 from "../components/preview/21-pie/pie-test-05.vue";
import preview21_pie06 from "../components/preview/21-pie/pie-test-06.vue";

import preview21_pieIndicator01 from "../components/preview/22-pieAdvanced/pieIndicator-01.vue";
import preview21_texture02 from "../components/preview/22-pieAdvanced/texture-02.vue";
import preview21_practice03 from "../components/preview/22-pieAdvanced/practice-03.vue";

import preview23_rose01 from "../components/preview/23-Rose/rose01.vue";
import preview23_rose02 from "../components/preview/23-Rose/rose02.vue";
import preview23_rose03 from "../components/preview/23-Rose/rose03.vue";

import preview24_histogram01 from "../components/preview/24-histogram/base01.vue";
import preview24_histogram02 from "../components/preview/24-histogram/common02.vue";
import preview24_histogram03 from "../components/preview/24-histogram/histogram03.vue";
import preview24_histogram04 from "../components/preview/24-histogram/histogram04.vue";

import preview25_scatter01 from "../components/preview/25-scatter/base01.vue";
import preview25_scatter02 from "../components/preview/25-scatter/scatter02Style.vue";
import preview25_scatter03Size from "../components/preview/25-scatter/scatter03Size.vue";

import preview26_base01 from "../components/preview/26-heatmap/base01.vue";

import preview27_base01 from "../components/preview/27-boxPlot/base01.vue";
import preview27_group02 from "../components/preview/27-boxPlot/group02.vue";
import preview27_boxWidth03 from "../components/preview/27-boxPlot/boxWidth03.vue";
import preview27_shaftShape04 from "../components/preview/27-boxPlot/shaftShape04.vue";
import preview28_base01 from "../components/preview/28-waterfall/base01.vue";
import preview28_totalField02 from "../components/preview/28-waterfall/totalField02.vue";
import preview28_totalCustom03 from "../components/preview/28-waterfall/totalCustom03.vue";

import preview29_base01 from "../components/preview/29-funnel/base01.vue";
import preview29_alignAndOrient from "../components/preview/29-funnel/aliginAndOrient02.vue";
import preview29_style03 from "../components/preview/29-funnel/style03.vue";

import preview30_base01 from "../components/preview/30-sequence/base01.vue";



</script>

<template>
  <main>
    <course31_rangeArea01 />
  </main>
</template>
