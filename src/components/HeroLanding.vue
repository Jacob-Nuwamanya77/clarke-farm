<template>
  <div class="hero-section">
    <div class="left-container">
      <div class="hero-header">
        <p>A farm for the</p>
        <p>Active adventurous traveler</p>
        <p>And source of high quality Coffee</p>
      </div>
      <div class="image-biker">
        <img src="@/assets/home-images/bike-bg-grey.png" alt="biker" aria-hidden="true">
      </div>
      <div class="hero-text">
        <p>We are an eco-friendly farm with amazing hilltop views</p>
        <p>rivers and surrounded by a natural forest.</p>
        <p>Clarke farm is about 1,500 acres of land and predominately</p>
        <p>grows coffee.</p>
        <p>It is coffee, laughter and games.</p>
      </div>
      <div class="call-to-action">
        <a href="" id="book-trip">Book A Trip</a>
         <a href="" id="buy-coffee">Buy Coffee</a>
        </div>
    </div>
    <div class="right-container">
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

/* Parent container element */

.hero-section{
  display:flex;
  flex-direction: row;
  min-height: 90vh;
}
@media screen and (max-width:768px){
  .hero-section{
    margin-top: 4%;
    font-size: 14px;
  }
}

/* Content containers. Left and Right hero section */
.right-container{
  width:45%;
  position:relative;
}
.left-container{
  width:55%;
  padding-left: 4%;
}
@media screen and (min-width: 992px){
  .left-container{
    padding-left: 7%;
  }
}

.left-container::before{
  content:"";
  width:250px;
  height:250px;
  border-radius: 50%;
  background-color: rgba(4,228,116,.1);
  position:absolute;
  top:0px;
  left:0px;
}
@media screen and (max-width:576px){
  .hero-section{
    flex-direction: column;
  }
  .left-container{
    width:100%;
    padding-left: 4%;
  }
  .right-container{
    width:100%;
  }
}

/* Left side content styles. */

.hero-header{
  margin-top: 10%;
  position:relative;
}
.hero-header p{
  font-weight: bold;
  font-size: 25px;
  margin:12px auto;
}
.hero-text{
  margin-top:6%;
}
@media screen and (max-width:768px){
  .hero-header{
    margin-top: 10%;
  }
  .hero-text{
    margin-top: 10%;
  }
}
@media screen and (max-width:1280px){
  .hero-header p{
    font-size: 20px;
  }
}

.image-biker{
  position:absolute;
  top:14%;
  left:36%;
  width:140px;
  height: 90px;
}
.image-biker img{
  width:100%;
  height:100%;
  object-fit:cover;
}
@media screen and (max-width: 768px){
  .image-biker{
    left:42%;
    top:10%;
  }
}
@media screen and (max-width: 660px){
  .image-biker{
    left:38%;
    top:5%;
  }
}
@media screen and (max-width: 576px){
  .image-biker{
    left:70%;
    top:3%;
    width: 60px;
    height:120px;
  }
}
@media screen and (max-width: 390px){
  .image-biker{
    display: none;
  }
}
.call-to-action{
  margin-top:10%;
}
.call-to-action a{
  text-decoration: none;
  display:inline-block;
  height:35px;
  width: 40%;
  max-width:157px;
  text-align: center;
  padding-top:8px;
  border-radius: 2px;
  color:white;
}
@media screen and (max-width:768px){
  .call-to-action a{
    font-size: 14px;
  }
  .call-to-action{
    margin-top: 15%;
  }
}
#book-trip{
  background-color: var(--dark-green);
}
#buy-coffee{
  background-color:#828282;
  margin-left:12%;
}

/* Right side content styles. */

.images-right{
  width:95%;
  height:95%;
  display:grid;
  grid-gap: 5px;
  margin-top:10px;
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
@media screen and (max-width:768px){
  .image-bottom-section{
    display:none;
  }
  .image-top-section{
    grid-column-start: 1;
  }
  .image-left-section{
    grid-row-start: 2;
    grid-column-end: 3;
  }
}
@media screen and (max-width:576px) {
  .image-left-section{
    display: none;
  }
  .images-right{
    margin:20px auto;
  }
}
</style>
