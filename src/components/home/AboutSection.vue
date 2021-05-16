/* eslint-disable max-len */
<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div>
    <div class="about">
      <div class="about-description">
        <p class="section-title">Who we are</p>
        <p>
          Clarke Farm is a 1500 acre farm located in Kitabale, Kyenjojo District
          in Uganda.
        </p>
        <p>
          Robusta coffee is the primary crop grown on the farm.
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  width: 100%;
  position: relative;
  margin-top: 55px;
}
@media screen and (max-width: 576px){
  .about{
    margin-top:20px;
    font-size: 14px;
  }
}

.about-description h1{
  text-align: center;
  margin-top: 0;
  font-size:1.5em;
  margin-bottom: 20px;
  font-family: Playfair;
  font-weight: lighter;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin:12px auto;
  font-family: Playfair;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.about-description p{
  text-align: center;
  margin-top:15px;
}

.linedesign {
  width: 30%;
  height: 25px;
  position:absolute;
  top:0;
  right: 0;
  background-color: #068d68;
}
.div-with-bg-image{
  position: relative;
  height:540px;
  background-image: url('../../assets/images/farm.jpg');
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

.image-overlay {
  width:35%;
  height: 300px;
  background-color:whitesmoke;
  border-top: 4px solid #068d68;
  position:absolute;
  left:5%;
  top:15%;
  padding-left:18px;
  padding-top: 10px;
}

@media screen and (max-width: 992px) {
  .image-overlay{
    width:75%;
    height:70%;
    padding-left:10px;
    top:5%;
  }
}
@media screen and (max-width:576px){
  .image-overlay{
    top:8%;
  }
}
.about-span {
  color: #068d68;
}

</style>
