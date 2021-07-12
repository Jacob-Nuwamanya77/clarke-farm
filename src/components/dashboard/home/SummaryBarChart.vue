<template>
  <div id="daily-orders">
    <div id="graph-container">
      <BarGraph :height="180" :chartData="configData.chartData" :chartOptions="configData.options"/>
    </div>
  </div>
</template>

<script>
import BarGraph from '@/plugins/bar-chart';

export default {
  name: 'DailyOrders',
  data() {
    return {
      filter: 'tourism',
      configData: {
        chartData: {
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [
            {
              data: this.weeklyData(),
              backgroundColor: [
                '#041C34',
                '#143454',
                '#04346C',
                '#34547C',
                '#04548C',
                '#34547C',
                '#143454',
              ],
            },
          ],
        },
        options: {
          responsive: true,
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: `This week - ${this.chartTitle}`,
            fontSize: 14,
            padding: 12,
            fontColor: '#a9a9a9',
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            }],
            xAxes: [{
              gridLines: {
                color: '#fff',
              },
            }],
          },
        },
      },
    };
  },
  components: {
    BarGraph,
  },
  props: {
    chartTitle: {
      type: String,
      required: true,
    },
    dataObj: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setFilter(event) {
      this.filter = event.target.value;
    },
    weeklyData() {
      const arrData = [];
      const srcObject = this.dataObj;
      for (const prop in srcObject) {
        if (Object.prototype.hasOwnProperty.call(srcObject, prop)) arrData.push(srcObject[prop]);
      }
      return arrData;
    },
  },
};
</script>

<style scoped>
#daily-orders{
  margin-top: 5px;
}
#graph-container{
  margin-top: 10px;
  background-color: white;
  height: 340px;
  padding-left: 2px;
}
</style>
