<template>
  <div class="summary-container">
    <p class="title">{{ cardTitle }}</p>
    <p class="current-date">
      02 March 2021
    </p>
    <div class="summary-list">
      <div class="list-item">
        <span class="checkout-date">
          <span class="date">04</span>
          <span class="muted-detail">Wed</span>
        </span>
        <span class="client-details">
          <span class="client-name">Jacob Nuwamanya</span>
          <span class="muted-detail">Booked for: 3 </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SummaryByDate',
  props: {
    cardTitle: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
.summary-container{
  width:95%;
  max-height: 43%;
  min-height: 43%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  margin-top: 15px;
  overflow-y:scroll;
}
.title{
  margin:0;
  font-weight: bold;
  font-size: 18px ;
}
.list-item{
  display: flex;
  align-items: center;
}
.current-date{
  color: #a9a9a9;
  font-size: 12px;
  font-weight: bold;
  margin-top: 2px;
}
.checkout-date{
  display: flex;
  flex-direction: column;
  width:50px;
  height: 50px;
  background-color: var(--smoky-white);
  text-align: center;
  border-radius: 10px;
  padding-top: 2px;
  margin-right: 15px;
}
.date{
  font-weight: bolder;
  font-size: 18px;
  font-weight: bold;
}
.client-details{
  display: flex;
  flex-direction: column;
}
.client-name{
  font-size: 14px;
  color:rgba(44, 62, 80, 0.9);
  font-weight: bolder;
}
.muted-detail{
  font-size: 13px;
  color:#a9a9a9;
  font-weight: bold;
}
</style>
