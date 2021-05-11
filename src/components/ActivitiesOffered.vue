<template>
            <div class="row container-xl text-center">
              <div class="col-4">
                <div class="image-container">
                  <div class="image"></div>
                </div>
                <p>River Walk</p>
              </div>
              <div class="col-4">
                <div class="image-container">
                  <div class="image1"></div>
                </div>
                <p>Forest Walk</p>
              </div>
              <div class="col-4">
                <div class="image-container">
                  <div class="image2"></div>
                </div>
                <p>Bouldering</p>
              </div>
            </div>
            <div class="row  container-xl collapse show" id="collapse-row-2" v-show="collapse">
              <div class="col-4">
                <div class="image-container">
                  <div class="image3"></div>
                </div>
                <p>Motocross</p>
              </div>
              <div class="col-4">
                <div class="image-container">
                  <div class="image4"></div>
                </div>
                <p>Coffee Testing</p>
              </div>
              <div class="col-4">
                <div class="image-container">
                  <div class="image5"></div>
                </div>
                <p>Farm-Jeep Tour</p>
              </div>
            </div>

            <div class="row justify-content-center">
              <a
                class="btn btn-primary text-center"
                @click="collapse = !collapse"
                href="#collapse-row-2"
                role="button"
                aria-expanded="false"
                aria-controls="collapse-row-2"
                >view more</a
              >
            </div>
</template>

<script>
export default {
  name: 'ActivitiesOffered',
  data() {
    return {
      collapse: false,
    };
  },
};
</script>
<style scoped>
.btn {
  width: 157px;
  height: 30px;
  padding: 5px;
  font-size: 15px;
  background-color: #068d68;
  border: #068d68;
}

.image-container {
  background-origin: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  background: url("../assets/home-images/riverwalk.jpg");
  height: 350px;
  width: 350px;
  background-size: 100%;
  background-position: center;
  /* background:no-repeat; */
  transition: 1s;
  cursor: zoom-out;
}
.image1{
  background: url("../assets/home-images/forestwalk.jpg");
  height: 350px;
  width: 350px;
  background-size: 100%;
  background-position: center;
  /* background:no-repeat; */
  transition: 1s;
  cursor: zoom-out;
}
.image2{
  background: url("../assets/home-images/bouldering2.jpg");
  height: 350px;
  width: 350px;
  background-size: 100%;
  background-position: center;
  /* background:no-repeat; */
  transition: 1s;
  cursor: zoom-out;
}
.image3{
  background: url("../assets/home-images/motocross1.jpg");
  height: 350px;
  width: 350px;
  background-size: 100%;
  background-position: center;
  /* background:no-repeat; */
  transition: 1s;
  cursor: zoom-out;
}
.image4{
  background: url("../assets/home-images/coffeetesting3.jpg");
  height: 350px;
  width: 350px;
  background-size: 100%;
  background-position: center;
  /* background:no-repeat; */
  transition: 1s;
  cursor: zoom-out;
}
.image5{
  background: url("../assets/home-images/tourfarm.jpg");
  height: 350px;
  width: 350px;
  background-size: 100%;
  background-position: center;
  /* background:no-repeat; */
  transition: 1s;
  cursor: zoom-out;
}

.image:hover {
  background-size: 150%;
  background-position: center;
}
.image1:hover {
  background-size: 150%;
  background-position: center;
}
.image2:hover {
  background-size: 150%;
  background-position: center;
}
.image3:hover {
  background-size: 150%;
  background-position: center;
}
.image4:hover {
  background-size: 150%;
  background-position: center;
}
.image5:hover {
  background-size: 150%;
  background-position: center;
}
.col-4 p{
  text-align: center;
  font-size:14px;
}

.btn:hover{
  background-color: #068d68;
}

</style>
