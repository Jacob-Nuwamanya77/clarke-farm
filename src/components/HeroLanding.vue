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
    <div class="right-container"></div>
  </div>
</template>

<style scoped>
.hero-section{
  display:flex;
  flex-direction: row;
}
.left-container{
  width:50%;
  position:relative;
  margin-left:90px;
}
.right-container{
  width:50%;
}
.hero-header{
  margin-top: 50px;
}
.image-biker{
  position:absolute;
  top:35px;
  left:300px;
  width:150px;
  height: 110px;
}
.image-biker img{
  width:100%;
  height:100%;
  object-fit:cover;
}
.hero-text{
  margin-top: 40px;
}
.call-to-action{
  margin-top:60px;
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
</style>
