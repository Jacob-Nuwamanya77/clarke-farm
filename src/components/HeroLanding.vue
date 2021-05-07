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
        <div id="book-trip">
          <a href="">Book A Trip</a>
        </div>
        <div id="buy-coffee">
          <a href="">Buy Coffee</a>
        </div>
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
  max-height: 550px;
  margin-top:10px;
}
@media screen and (max-width:768px){
  .hero-section{
    margin-top: 4%;
  }
}
@media screen and (max-width:576px){
  .hero-section{
    flex-direction: column;
    max-height: 100%;
  }
}

/* Content containers. Left and Right hero section */
.right-container{
  width:45%;
  position:relative;
}
.left-container{
  width:55%;
  position:relative;
}
@media screen and (max-width: 992px){
  .left-container{
    padding-left: 5%;
  }
}
@media screen and (max-width:660px){
  .left-container{
    padding-left: 3%;
  }
}
@media screen and (min-width:992px){
  .left-container{
    padding-left:7%;
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
  .left-container{
    width:90%;
    margin-left: auto;
    margin-right: auto;
  }
  .right-container{
    width:100%;
  }
}

/* Left side content styles. */

.hero-header{
  margin-top: 5%;
  position:relative;
}
.hero-header p{
  font-weight: bold;
  font-size: 25px;
  margin:12px auto;
}
.hero-text{
  margin-top:4%;
}
@media screen and (max-width:768px){
  .hero-header{
    margin-top: 10%;
  }
  .hero-text{
    margin-top: 8%;
  }
}
@media screen and (max-width:1280px){
  .hero-header p{
    font-size: 20px;
  }
}

.image-biker{
  position:absolute;
  width:140px;
  height: 90px;
  display:none;
}
.image-biker img{
  width:100%;
  height:100%;
  object-fit:cover;
}
@media screen and (min-width: 880px){
  .image-biker{
    display:block;
    left:70%;
    top:6%;
  }
}
@media screen and (min-width: 1280px){
  .image-biker{
    left:487px;
    top:50px;
  }
}
.call-to-action{
  display:flex;
  flex-direction: row;
  margin-top: 10%;
}
.call-to-action div{
  height:35px;
  width:40%;
  max-width: 180px;
  border-radius: 3px;
}
.call-to-action div:hover{
  transform: scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
}
.call-to-action a{
  text-decoration: none;
  color:white;
  height:100%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#book-trip{
  background-color: var(--dark-green);
}
#buy-coffee{
  background-color:#828282;
  margin-left: 15%;
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
@media screen and (max-width:880px){
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
