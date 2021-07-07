<template>
  <div id="daily-orders">
    <div id="filter-container">
      <label for="filter">Filter By: </label>
      <select id="filter" @change="setFilter">
        <option value="tourism">Tourism</option>
        <option value="coffee">Coffee</option>
      </select>
    </div>
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
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              data: [1, 2, 3, 4, 5, 6, 7],
              backgroundColor: ['red', 'yellow', 'blue', 'green', 'purple', 'pink', 'orange'],
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
            text: 'This week - Guest Bookings',
            fontSize: 14,
            padding: 12,
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
  methods: {
    setFilter(event) {
      this.filter = event.target.value;
    },
  },
};
</script>

<style scoped>
#daily-orders{
  margin-top: 5px;
}
#filter-container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
#filter-container label {
  margin-right: 10px;
  color:#a9a9a9;
  font-weight: bold;
}
#filter-container select{
  border:none;
  height:30px;
  padding-left: 10px;
  padding-right: 10px;
}
#filter-container select:hover{
  cursor: pointer;
}
#graph-container{
  margin-top: 10px;
  background-color: white;
  height: 340px;
  padding-left: 2px;
}
</style>
