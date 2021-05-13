<template>
  <div class="our-offers">
    <div class="description">
      <p class="section-title">What We Offer</p>
      <p>
        See all the activities you can enjoy, the accommodations to
        choose from<br>and what our guests say about us.
      </p>
      <div class="linedesign"></div>
    </div>
    <div class="navigation">
      <ul>
        <li><a href="" class="active-nav">Activities</a></li>
        <li><a href="">Accommodation</a></li>
        <li><a href="">Reviews</a></li>
      </ul>
    </div>
    <div class="info-display">
      <div class="card">
        <div class="card-image-container">
          <img src="@/assets/images/motocross1.jpg" alt="biking" aria-hidden="true">
        </div>
        <div class="card-content">
          <p class="card-title">Biking</p>
          <p class="card-text">
            Rent a bicycle and challenge yourself on smooth and rough terrain.
          </p>
          <p class="activity-price">$ 30.00</p>
        </div>
      </div>
      <div class="card">
        <div class="card-image-container">
          <img src="@/assets/images/bouldering3.jpg" alt="bouldering" aria-hidden="true">
        </div>
        <div class="card-content">
          <p class="card-title">Bouldering</p>
          <p class="card-text">
            Walk to the top of our boulders and enjoy beautiful sunsets.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-image-container">
          <img src="@/assets/images/coffeetesting1.jpg" alt="coffee testing" aria-hidden="true">
        </div>
        <div class="card-content">
          <p class="card-title">Coffee Tasting</p>
          <p class="card-text">
            Fresh roasted robusta coffee. It's our pride and joy.
          </p>
          <p class="activity-price">$ 5.00</p>
        </div>
      </div>
    </div>
    <div class="more-button-container">
      <button>Show All</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurOffers',
};
</script>

<style scoped>
.our-offers{
  position:relative;
  margin-top:60px;
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  margin-bottom:20px;
  font-family: Playfair;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}
.description p{
  text-align: center;
  margin-top:15px;
}
.linedesign {
  width: 15%;
  height: 25px;
  position:absolute;
  top:0;
  left: 0;
  background-color: #068d68;
}
.navigation{
  margin-left: auto;
  margin-right: auto;
  max-height:30px;
  margin-top: 40px;
}

.navigation ul{
  padding: 0;
  display: flex;
  justify-content: center;
  overflow-x: auto;
}
@media screen and (max-width:500px){
  .navigation ul{
    padding-left: 10px;
    justify-content: start;
  }
  .navigation ul::-webkit-scrollbar{
    width:0px;
  }
}
.navigation li{
  list-style-type: none;
  min-width:150px;
  height:30px;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
}
.navigation a:hover{
  background-color: var(--dark-green);
}
.navigation a{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width:100%;
  height:100%;
  color:white;
}
a.active-nav{
  background-color: var(--dark-green);
  color:white;
}
.info-display{
  display:flex;
  justify-content: center;
  margin-top:50px;
  overflow-x: auto;
  overflow-y: hidden;
}
.info-display::-webkit-scrollbar{
  width:0px;
}
@media screen and (max-width:600px){
  .info-display{
    justify-content: start;
    padding-left: 10px;
  }
}
.card{
  max-width:250px;
  min-width: 250px;
  max-height:320px;
  margin-right: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.card-image-container{
  height:60%;
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
.activity-price{
  width:80px;
  background-color: var(--dark-green);
  color:white;
  text-align: center;
}
.more-button-container{
  margin-top:50px;
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
</style>
