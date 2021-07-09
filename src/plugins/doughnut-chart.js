import { defineComponent } from 'vue';
import { Doughnut } from 'vue3-chart-v2';

export default defineComponent({
  name: 'DailyOrders',
  extends: Doughnut,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
});
