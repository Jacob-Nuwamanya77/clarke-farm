/* eslint-disable max-len */
<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div>
    <div class="about">
      <div class="about-description">
        <h1>Who we are</h1>
        <p class="desctext">
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
          <span id="readmore">Read More...</span>
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
  width: 90%;
  margin-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.about-description {
  height: 123px;
  margin-top: 10px;
 text-align: center;
 }
.linedesign {
  width: 25%;
  height: 27px;
  margin-top: -120px;
  margin-left: 960px;
  background:#068d68;
}
.about-image {
  height: 450px;
  width: 100%;
}
.div-with-bg-image {
  position: relative;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.3)
    ),
    url("../assets/home-images/farm.jpg");
  background-repeat: no-repeat;
  background-position:bottom;
  background-size: cover;
  padding-top: 20px;
  object-fit: cover;
  margin-top: 20px;
  height: 440px;
}
.image-overlay {
  width: 400px;
  height: 235px;
  margin-top: 100px;
  margin-left: 60px;
  padding-left: 20px;
  background-color: whitesmoke;
  opacity: 0.7;
  border-top: 4px solid #068d68;
}
p {
  font-size: 14px;
}
.about-span {
  color: #068d68;

}
#readmore {
  color: #068d68;
  display: none;
}

@media screen and (max-width: 768px) {
  #readmore {
    display: inline;
    color: #068d68;
  }
  .extradesc {
    display: none;
  }
  .image-overlay {
    width: 220px;
    height: 190px;
    margin-top: 110px;
    margin-left: 10px;
    padding-top: 20px;
    background-color: whitesmoke;
    opacity: 0.7;
    border-top: 4px solid #068d68;
  }
  .linedesign {
    position: absolute;
    width: 25%;
    height: 18px;
    margin-top: -140px;
    right: 0;
    background-color: #068d68;
  }
  .about-description {
    text-align: center;
    height: 153px;
    margin-top: 10px;
  }
  .div-with-bg-image {
    height: 440px;
    padding-top: 20px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
  }
}
</style>
