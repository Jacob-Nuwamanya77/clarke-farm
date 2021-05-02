<template>
  <div class="hero-section">
    <div class="left-container">
      <div class="hero-header">
        <h2>A farm for the</h2>
        <h2>Active adventurous traveler</h2>
        <h2>And source of high quality Coffee</h2>
      </div>
      <div class="image-biker">
        <img src="@/assets/home-images/bike-bg-grey.png" alt="biker" aria-hidden="true">
      </div>
      <div class="hero-text">
        <p>We are an eco-friendly farm with amazing hilltop views</p>
        <p>rivers and surrounded by a natural forest.</p>
        <p>It is coffee, laughter and games.</p>
      </div>
      <div class="call-to-action">
        <a href="" id="book-trip">Book A Trip</a>
        <a href="" id="buy-coffee">Buy Coffee</a>
      </div>
    </div>
    <div class="right-container">
      <div class="farm-name" id="clarke-name">
        CLARKE
      </div>
      <div class="images-right">
        <div class="image-left-section">
          <img src="@/assets/home-images/farm.jpg" alt="farm" aria-hidden="true">
        </div>
        <div class="image-top-section">
          <img src="@/assets/home-images/friends.jpg" alt="having fun" aria-hidden="true">
        </div>
        <div class="image-bottom-section">
          <img src="@/assets/home-images/jeep.jpg" alt="jeep ride" aria-hidden="true">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width:90vw;
  height:90vh;
  margin-left: auto;
  margin-right: auto;
}
.left-container{
  width:45%;
  position:relative;
  margin-left:60px;
}
/* Circle for top left corner, use before selector of left-container */
.left-container::before{
  content:"";
  width:650px;
  height:650px;
  border-radius: 50%;
  background-color: rgba(4,228,116,.1);
  position:absolute;
  top:-400px;
  left:-400px;
}
.right-container{
  width:50%;
  position:relative;
}
.hero-header{
  margin-top: 55px;
}
.hero-text{
  margin-top: 50px;
}
.image-biker{
  position:absolute;
  top:45px;
  left:300px;
  width:150px;
  height: 110px;
}
.image-biker img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.call-to-action{
  margin-top:70px;
}
.call-to-action a{
  text-decoration: none;
  display:inline-block;
  color:inherit;
  height:35px;
  width:157px;
  text-align: center;
  padding-top:7px;
  border-radius: 2px;
  color:white;
}
#book-trip{
  background-color: var(--dark-green);
}
#buy-coffee{
  background-color:#828282;
  margin-left:12%;
}
.images-right{
  width:85%;
  height:85%;
  display:grid;
  grid-gap: 5px;
  margin-top: 40px;
  margin-left: 20px;
}
.image-left-section{
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start:1;
  grid-column-end: 2;
}
.image-top-section{
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
}
.image-bottom-section{
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start:2;
  grid-column-end: 3;
}
.images-right img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.farm-name{
  font-family: "Playfair";
  font-size: 90px;
  color:rgba(0,0,0,.015);
  padding:0;
}
#clarke-name{
  position:absolute;
  top:-12%;
  right:14%;
}
</style>
