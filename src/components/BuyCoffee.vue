<template>
  <div>
    <div class="process-intro">
      <div class="process-description">
        <h1>Why Our Coffee is the Best</h1>
        <p>Processing methods have a huge impact on coffee flavor and aroma</p>
        <p>Below is how we process and delivery high quality coffee</p>
        <div class="linedesign"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyCoffee.vue',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.process-intro {
  width: 100%;
  position: relative;
  margin-top: 80px;
}
@media screen and (max-width: 576px){
  .process-intro{
    margin-top:20px;
  }
}
@media screen and (min-width:576px){
  .process-intro{
    margin-top:45px;
  }
}
.process-description h1{
  text-align: center;
  margin-top: 0;
  font-size:1.7em;
  margin-bottom: 20px;
  font-family: Playfair;
  font-weight: lighter;
}
.process-description p{
  text-align: center;
  margin-top:15px;
}
@media screen and (max-width:768px){
  .process-description p{
    width:95%;
    margin-left: auto;
    margin-right: auto;
  }
}
.linedesign {
  width: 25%;
  height: 25px;
  position:absolute;
  top:5px;
  right: 0;
  background-color: #068d68;
}
</style>
