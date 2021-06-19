<template>
  <div class="coffee-process">
    <div id="process-steps">
      <p class="section-sub-heading">Processing guide</p>
      <p style="text-align:center">
        This is a step by step guide showing our coffee process.
      </p>
      <div id="process-row-1">
        <div class="card-container process-list">
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/mother-garden.jpg" alt="mother garden" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Mother Garden</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/cherry-picking.jpg" alt="cherry picking" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Cherry Picking</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/wet-processing.jpg" alt="wet processing" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Wet Washing</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="process-row-2" style="display:none">
        <div class="card-container process-list">
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/mother-garden.jpg" alt="mother garden" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Mother Garden</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/cherry-picking.jpg" alt="cherry picking" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Cherry Picking</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
          <div class="card-item process-item">
            <div class="card-image-container">
              <img src="@/assets/images/wet-processing.jpg" alt="wet processing" aria-hidden="true">
            </div>
            <div class="card-content">
              <p class="card-title">Wet Washing</p>
              <p class="card-text">
                Our mother garden consists of a variety of coffee seedlings.
                We have all 7 lines of coffee wilt disease resistant varieties
                and the traditional clones A-F.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="more-button-container">
        <button>Show All</button>
      </div>
    </div>
    <div id="capacity">
      <p class="section-sub-heading">Our Capacity</p>
      <p style="text-align:center">
        These numbers show our current production and growth potential.
      </p>
      <div id="stat-container">
        <div class="stat">
          <div class="stat-num">1500</div>
          <div class="stat-text">Acres available</div>
        </div>
        <div class="stat">
          <div class="stat-num">300+</div>
          <div class="stat-text">Acres of coffee</div>
        </div>
        <div class="stat">
          <div class="stat-num">700K</div>
          <div class="stat-text">Kilograms annually</div>
        </div>
        <div class="stat">
          <div class="stat-num">50</div>
          <div class="stat-text">Employees</div>
        </div>
        <div class="stat">
          <div class="stat-num">300</div>
          <div class="stat-text">Seasonal workers</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoffeeProcess',
};
</script>

<style scoped>
.coffee-process{
  position:relative;
  margin-top:70px;
}
@media screen and (max-width:764px) {
  .coffee-process{
    margin-top:50px;
  }
}
#process-steps{
  margin-top:50px;
}
.section-sub-heading{
  text-align: center;
  font-size: 20px;
  font-family: Playfair;
  font-weight: bold;
}
/* Process card styles */
.process-list{
  overflow-x: auto;
  overflow-y:hidden;
}
.process-list::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:700px){
  .process-list{
    justify-content: start;
  }
}
@media screen and (max-width:480px){
  .process-list{
    flex-direction: column;
    overflow-x: hidden;
    width:100%;
  }
  .process-item{
    min-width:95%;
    margin-left: auto;
    margin-right: auto;
    min-height: 320px;
    margin-bottom:30px;
  }
}

.card-container{
  margin-top: 40px;
  display:flex;
  justify-content:center;
}
.card-item{
  min-width:280px;
  max-width: 280px;
  min-height: 280px;
  max-height: 280px;
  margin-left: 15px;
  background-color:white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.card-image-container{
  height:45%;
}
.card-image-container img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.card-content{
  margin-top: 5px;
  padding-left: 10px;
}
.card-title{
  font-weight: bold;
}
.card-text{
  font-size: 14px;
}
.more-button-container{
  margin-top:30px;
  display: flex;
  justify-content: center;
}
.more-button-container button{
  border:1px solid rgba(0, 0, 0, 0.3);
  width:180px;
  height:30px;
  border-radius: 3px;
  background-color: var(--smoky-white);
  color:var(--dark-green);
}
.more-button-container button:hover{
  transform: scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
  background-color: var(--dark-green);
  color:white;
}
/* Capacity styles */
#capacity{
  margin-top: 50px;
}
#stat-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width:70%;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width:480px){
  #stat-container{
    width:80%;
  }
}
.stat{
  margin-top: 20px;
  min-width: 100px;
  text-align: center;
}
@media screen and (max-width:480px){
  .stat{
    text-align:left;
  }
}
.stat-num{
  font-size: 45px;
  margin-top:-10px;
  color:rgb(100, 100, 100);
  font-family: 'Times New Roman', Times, serif;
}
</style>
