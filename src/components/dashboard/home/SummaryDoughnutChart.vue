<template>
  <div id="summary-doughnut-container">
    <div id="chart-details">
      <div id="doughnut-description">
        <p class="title">Coffee Orders</p>
        <p class="muted-detail">Total orders this month</p>
        <p class="total-count">{{ dataArr.length }}</p>
        <p class="muted-detail">{{ deliveredOrders }}% of total orders have been processed</p>
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
              data: this.monthlyData(),
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
  props: {
    dataArr: {
      type: Array,
      required: true,
    },
  },
  components: {
    DoughnutChart,
  },
  methods: {
    monthlyData() {
      let deliveredSacks = 0;
      let deliveredPaperBags = 0;
      this.dataArr.forEach((order) => {
        if (order.delivered === true && order.package === 'Paper bag') {
          deliveredPaperBags += Number(order.order);
        }
        if (order.delivered === true && order.package === 'Sack') {
          deliveredSacks += Number(order.order);
        }
      });
      return [deliveredPaperBags, deliveredSacks];
    },
  },
  computed: {
    deliveredOrders() {
      const totalOrdersPlaced = this.dataArr.length;
      const deliveredArr = this.dataArr.filter((order) => order.delivered === true);
      return Math.floor((deliveredArr.length / totalOrdersPlaced) * 100);
    },
  },
};
</script>

<style scoped>
#summary-doughnut-container{
  height: 100%;
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
