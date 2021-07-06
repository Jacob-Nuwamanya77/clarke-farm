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
      <BarGraph />
    </div>
  </div>
</template>

<script>
import BarGraph from '@/plugins/bar-graph';

export default {
  name: 'DailyOrders',
  data() {
    return {
      filter: 'tourism',
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
  border:1px solid red;
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
  border:1px solid green;
  margin-top: 10px;
  min-height:30vh;
  max-height: 30vh;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
