<template>
  <div>
    <div class="popular-activities-container">
      <div class="description">
        <p class="section-title">Popular Activities</p>
        <p class="sub-text">
          Clarke Farm is a 1500 acre farm mixed farm with rivers,
          natural and eucalyptus forests.
          There is plenty to do and see at the farm and these are The most popular activities
          </p>
        <div class="linedesign"></div>
      </div>
      <div class="popular-stat">
        <div id="number">
          <span id="percentage">90</span>
          <span id="percent-sign">%</span>
        </div>
        <div id="support-text">
          <p>Of Our Guests</p>
          <p>Enjoyed These Activities The Most</p>
        </div>
      </div>
      <div class="popular-activities-images">
        <div class="activity-details">
          <div class="circle-container-image">
            <img src="@/assets/images/jeep.jpg" alt="jeep ride">
          </div>
          <p>Jeep Ride</p>
        </div>
        <div class="activity-details">
          <div class="circle-container-image">
            <img src="@/assets/images/bouldering.jpg" alt="bouldering">
          </div>
          <p>Bouldering</p>
        </div>
        <div class="activity-details">
          <div class="circle-container-image">
            <img src="@/assets/images/river-walks.jpg" alt="river walks">
          </div>
          <p>River Walks</p>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularActivities',
};
</script>

<style scoped>
.popular-activities-container {
  width: 100%;
  position: relative;
  margin-top: 60px;
}

.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:30px;
  font-family: Playfair;
  text-align: center;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.linedesign {
  width: 30%;
  height: 25px;
  position:absolute;
  top:0;
  right: 0;
  background-color: #068d68;
}
.sub-text{
  width:70%;
  text-align: center;
  line-height: 2;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:990px){
  .sub-text{
    width:100%;
  }
}
@media screen and (max-width:480px){
  .sub-text{
    text-align: left;
    padding-left: 10px;
  }
}
.popular-stat{
  width:50%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  height:145px;
  background-color: var(--mono-dark-green);
  display: flex;
  flex-direction: row;
  color:white;
  padding-left: 3%;
}
@media screen and (max-width:1200px){
  .popular-stat{
    width:60%;
  }
}
@media screen and (max-width:990px){
  .popular-stat{
    width:70%;
  }
}
@media screen and (max-width:500px){
  .popular-stat{
    width:95%;
  }
}
#number{
  margin-top:-40px
}
@media screen and (max-width:600px){
  #number{
    margin-top:-20px;
  }
}
#number span{
  font-family: Playfair;
}
#percentage{
  font-size: 90px;
}
@media screen and (max-width:600px){
  #percentage{
    font-size:70px;
  }
}
@media screen and (max-width:500px){
  #percentage{
    font-size:65px;
  }
}
#percent-sign{
  font-size: 50px;
}
@media screen and (max-width: 600px){
  #percent-sign{
    font-size:40px;
  }
}
#support-text{
  margin-left: 30px;
  padding-top: 25px;
}
#support-text p{
  font-size: 25px;
  font-family: Playfair;
}
@media screen and (max-width:830px){
  #support-text p{
    font-size: 20px;
  }
}
.popular-activities-images{
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  margin-top: 70px;
  flex-wrap: wrap;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:1200px){
  .popular-activities-images{
    width:70%;
  }
}
@media screen and (max-width:990px){
  .popular-activities-images{
    width:80%;
  }
}
@media screen and (max-width:840px){
  .popular-activities-images{
    width:90%;
  }
}
/* Below 700px make horizontal scroll */
@media screen and (max-width:701px){
  .popular-activities-images{
    width:auto;
    max-height:300px;
    margin-top: 50px;
    padding-left: 10px;
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: start;
  }
  .popular-activities-images::-webkit-scrollbar{
    width:0px;
  }
  .activity-details{
    margin-right: 30px;
  }
}
.circle-container-image{
  height:200px;
  width:200px;
  border-radius: 50%;
  border-bottom:3px solid var(--dark-green);
  margin-bottom: 10px;
}
img{
  width:98%;
  height:98%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.activity-details p{
  text-align: center;
}
</style>
