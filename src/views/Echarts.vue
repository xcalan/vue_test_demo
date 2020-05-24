<template>
  <div class="echarts">
      <v-line :data="line_data" :options="line_opti"></v-line>
  </div>
</template>

<script>
export default {
  name: "echarts",
  data() {
    return {

      line_data: [
        {
          date: "2020-01-01",
          shouru:15000,
          zhichu:13000,
          zhongjiang:10000
        },
        {
          date: "2020-01-02",
          shouru:16000,
          zhichu:10500,
          zhongjiang:10000
        },
        {
          date: "2020-01-03",
          shouru:10000,
          zhichu:15000,
          zhongjiang:10000
        },
        {
          date: "2020-01-04",
          shouru:13000,
          zhichu:12000,
          zhongjiang:10000
        },
        {
          date: "2020-01-05",
          shouru:11000,
          zhichu:10000,
          zhongjiang:10000
        },
        {
          date: "2020-01-06",
          shouru:12000,
          zhichu:14000,
          zhongjiang:10000
        }
      ],
      line_opti: {
        title:"主标题",
        // tooltipFmt(data){
        //   return `${data.name}<br>${data.m}`
        // },
        keys: [
          {
            label: "收入",
            val: "shouru"
          },
          {
            label: "支出",
            val: "zhichu"
          },
          {
            label:"中奖",
            val:"zhongjiang"
          }
        ]
      }

    };
  }
};
</script>

