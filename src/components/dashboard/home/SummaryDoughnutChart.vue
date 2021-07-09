<template>
  <div id="summary-doughnut-container">
    <div id="filter-container">
      <label for="filter">Filter By: </label>
      <select id="filter" @change="setFilter">
        <option value="tourism">Tourism</option>
        <option value="coffee">Coffee</option>
      </select>
    </div>
    <div id="chart-details">
      <div id="doughnut-description">
        <p class="title">Coffee Orders</p>
        <p class="muted-detail">Total orders this month</p>
        <p class="total-count">289</p>
        <p class="muted-detail">70% of total orders have been delivered</p>
      </div>
      <div id="doughnut-chart">
        <DoughnutChart :chartData="configData.chartData" :chartOptions="configData.options"/>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from '@/plugins/doughnut-chart';

export default {
  name: 'SummaryDoughtnutChart',
  data() {
    return {
      configData: {
        chartData: {
          labels: ['Paper bags', 'Sacks'],
          datasets: [
            {
              data: [10, 30],
              backgroundColor: ['orange', 'rgba(6,141,104,1)'],
            },
          ],
        },
        options: {
          cutoutPercentage: 65,
        },
      },
    };
  },
  components: {
    DoughnutChart,
  },
};
</script>

<style scoped>
#summary-doughnut-container{
  height: 100%;
}
#filter-container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
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
  background-color: #FAFAFA;
}
#filter-container select:hover{
  cursor: pointer;
}
#chart-details{
  display: flex;
  height: 90%;
  padding-left: 15px;
}
#doughnut-description{
  width:35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#doughnut-chart{
  width:65%;
  padding-top: 10px;
}
.title{
  margin:0;
  font-weight: bold;
  font-size: 18px ;
}
.muted-detail{
  font-size: 14px;
  color:#a9a9a9;
  font-weight: bold;
  margin-top:10px;
}
.total-count {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  font-family: sans-serif;
}
</style>
