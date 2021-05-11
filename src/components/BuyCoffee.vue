<template>
  <div class="container">
    <div class="process-intro">
      <div class="process-description">
        <h1>Why Our Coffee is the Best</h1>
        <p>Processing methods have a huge impact on coffee flavor and aroma</p>
        <p>Below is how we process and delivery high quality coffee</p>
        <div class="linedesign"></div>
      </div>
    </div>
    <div class="row container">
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="../assets/home-images/coffee.jpg" height="146"  />
          <div class="card-body">
            <h5 class="card-title">MOTHER GARDEN</h5>
            <p class="card-text">
              Our Mother garden consists of a variety of coffee seedlings. We
              have all 7 lines of Coffee Wilt Disease resistant varieties and
              the traditional clones A-F.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <!-- // eslint-disable-next-line max-len -->
          <img class="card-img-top" src="../assets/home-images/cherry.jpg" height="146" />
          <div class="card-body">
            <h5 class="card-title">CHERRY PICKING</h5>
            <p class="card-text">
              Our Mother garden consists of a variety of coffee seedlings. We
              have all 7 lines of Coffee Wilt Disease resistant varieties and
              the traditional clones A-F.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="../assets/home-images/coffee.jpg" height="146" />
          <div class="card-body">
            <h5 class="card-title">WET PROCESSING</h5>
            <p class="card-text">
              Our Mother garden consists of a variety of coffee seedlings. We
              have all 7 lines of Coffee Wilt Disease resistant varieties and
              the traditional clones A-F.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 container">
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="../assets/home-images/cherry.jpg" height="146" />
          <div class="card-body">
            <h5 class="card-title">MOTHER GARDEN</h5>
            <p class="card-text">
              Our Mother garden consists of a variety of coffee seedlings. We
              have all 7 lines of Coffee Wilt Disease resistant varieties and
              the traditional clones A-F.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="../assets/home-images/coffee.jpg" height="146" />
          <div class="card-body">
            <h5 class="card-title">CHERRY PICKING</h5>
            <p class="card-text">
              Our Mother garden consists of a variety of coffee seedlings. We
              have all 7 lines of Coffee Wilt Disease resistant varieties and
              the traditional clones A-F.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="../assets/home-images/cherry.jpg" height="146" />
          <div class="card-body">
            <h5 class="card-title">ROASTING</h5>
            <p class="card-text">
              Our Mother garden consists of a variety of coffee seedlings. We
              have all 7 lines of Coffee Wilt Disease resistant varieties and
              the traditional clones A-F.
            </p>
          </div>
        </div>
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
.card-title {
  color: #068d68;
}
.process-intro {
  width: 100%;
  position: relative;
  margin-top: 80px;
}
@media screen and (max-width: 576px) {
  .process-intro {
    margin-top: 20px;
  }
}
@media screen and (min-width: 576px) {
  .process-intro {
    margin-top: 45px;
  }
}
.process-description h1 {
  text-align: center;
  margin-top: 0;
  font-size: 1.7em;
  margin-bottom: 20px;
  font-family: Playfair;
  font-weight: lighter;
}
.process-description p {
  text-align: center;
  margin-top: 15px;
}
@media screen and (max-width: 768px) {
  .process-description p {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
}
.linedesign {
  width: 25%;
  height: 25px;
  position: absolute;
  top: 5px;
  right: 0;
  background-color: #068d68;
}
</style>
