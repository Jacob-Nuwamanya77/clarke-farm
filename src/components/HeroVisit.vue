<template>
  <div id="visit-container">
    <!-- <div class="right-container"></div> -->
    <div class="left-container"></div>
  </div>
</template>

<script>
export default {
  name: 'HeroVisit',
};
</script>

<style scoped>
@media screen and (max-width:768px){
    #visit-container{
    background-image: url('../assets/home-images/hill-party.jpg');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 30% 20%;
    min-height: 100vh;
    width:100%;
    position:absolute;
    top:0;left:0;
  }
  #visit-container:before{
    content:"";
    width:100%;
    height:100%;
    background-color: rgba(0,0,0, 0.5);
    position:absolute;
    top:0;left:0;
  }
}
.left-container{
  min-height: 100vh;
  width:15%;
  background-color: var(--mono-dark-green);
  position:absolute;
  top:0;left: 0;
}
</style>
