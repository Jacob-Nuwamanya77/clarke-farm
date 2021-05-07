/* eslint-disable max-len */
<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div>
    <div class="about">
      <div class="about-description">
        <h1>Who we are</h1>
        <p>
          Clarke Farm is a 1500 acre farm located in Kitabale, Kyenjojo District
          in Uganda.
        </p>
        <p>
          Sitting on 300 acres, Robusta coffee is the primary crop on the farm
        </p>
      <div class="linedesign"></div>
      </div>
    </div>
    <div class="div-with-bg-image">
      <div class="image-overlay">
        <p>
          We have recently invested in <span class="about-span">TOURISM </span>
          encouraged by the serene location of the farm, surrounded by natural
          forests with rivers , monkeys birds and so much more.
        </p>
        <p class="extradesc">
          There are other projects on the farm for conservation and educational
          purposes which include bamboo, oranges, eucalyptus, mangoes etc.
        </p>
        <p class="extradesc">
          We also have an outgrower program under our social development
          program.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection.vue',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  width: 100%;
  position: relative;
  margin-top: 20px;
}
@media screen and (max-width:768px){
  .about{
    margin-top:0;
  }
}
.about-description h1{
  text-align: center;
  margin-top: 0;
  font-size:1.7em;
  margin-bottom: 20px;
  font-family: Playfair;
  font-weight: lighter;
}
.about-description p{
  text-align: center;
  margin-top:15px;
}
@media screen and (max-width:768px){
  .about-description p{
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
.div-with-bg-image{
  position: relative;
  height:440px;
  background-image: url('../assets/home-images/farm.jpg');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
}
.div-with-bg-image:before{
  content:"";
  background-color:rgba(0,0,0,0.6);
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
}
@media screen and (max-width:560px){
  .div-with-bg-image{
    height:380px;
  }
}
.image-overlay {
  width:35%;
  height: 300px;
  background-color:whitesmoke;
  border-top: 4px solid #068d68;
  position:absolute;
  left:5%;
  top:15%;
  padding-left:18px;
}

@media screen and (max-width: 992px) {
  .image-overlay{
    width:50%;
    padding-left:10px;
    top:5%;
  }
}
@media screen and (max-width:560px){
  .image-overlay{
    width:70%;
    top:8%;
  }
}
.about-span {
  color: #068d68;
}

</style>
