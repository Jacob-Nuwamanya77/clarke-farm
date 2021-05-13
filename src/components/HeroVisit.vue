<template>
  <div id="visit-container">
    <div class="left-container">
      <div class="left-image">
        <img src="@/assets/images/friends.jpg" alt="friends having fun">
      </div>
    </div>
    <div class="right-container">
      <div class="text-container">
        <p>Open Yourself To New Experiences</p>
        <p>And Live A Life</p>
        <p>You Will Remember</p>
        <div class="book-btn-container">
          <a href="">Book A Trip</a>
        </div>
      </div>
      <div class="images-right">
        <div class="image-left-section">
          <img src="@/assets/images/bouldering.jpg" alt="bouldering" aria-hidden="true">
        </div>
        <div class="image-top-section">
          <img src="@/assets/images/hill-party.jpg" alt="having fun" aria-hidden="true">
        </div>
        <div class="image-bottom-section">
          <img src="@/assets/images/jeep.jpg" alt="jeep ride" aria-hidden="true">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroVisit',
};
</script>

<style scoped>
#visit-container{
  position:relative;
}
.left-container{
  min-height: 600px;
  width:15%;
  background-color: var(--mono-dark-green);
  position:absolute;
  top:-75px;left: 0;
}
@media screen and (max-width:768px){
  .left-container{
    display: none;
  }
}
.left-image{
  width:230px;
  height:230px;
  border-radius: 50%;
  background-color: white;
  position:absolute;
  top:100px;
  left:50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width:1041px){
  .left-image{
    left:30px;
  }
}
.left-image img{
  width:225px;
  height:225px;
  border-radius: 50%;
  object-position: -20px 10px;
}
img{
  width:100%;
  height:100%;
  object-fit: cover;
}
.right-container{
  width:80%;
  margin-left:15%;
  min-height: 500px;
  max-height:550px;
  margin-top: 25px;
  position:relative;
}
@media screen and (max-width:768px){
  .right-container{
    width:95%;
    margin-left: auto;
    margin-right: auto;
  }
}
.text-container{
  width:60%;
  position:absolute;
  top:30px;
  left:18%;
}
@media screen and (max-width:1141px){
  .text-container{
    left:15%;
  }
}
@media screen and (max-width:991px){
  .text-container{
    position:static;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width:80%;
  }
}
@media screen and (max-width:600px){
  .text-container{
    width:100%;
  }
}
.text-container p{
  font-size: 28px;
  font-weight: bold;
  margin-bottom:12px;
}
.book-btn-container{
  height:35px;
  width:40%;
  margin-top:70px;
  max-width: 160px;
  border-radius: 3px;
  background-color: var(--dark-green);
}
@media screen and (max-width:991px){
  .book-btn-container{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
}
.book-btn-container:hover{
  transform: scale(0.95);
  box-shadow: 3px 3px 5px rgba(0,0,0,0.7);
  background-color: var(--mono-dark-green);
}
.book-btn-container a{
  text-decoration: none;
  color:white;
  height:100%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Right side content styles. */
.images-right{
  z-index: 1;
  width:55%;
  height:400px;
  position:absolute;
  right:0;
  top:80px;
  display:grid;
  grid-gap: 5px;
}
@media screen and (max-width:991px){
  .images-right{
    position:static;
    display:flex;
    flex-direction: row;
    width:100%;
    height:260px;
    margin-top: 30px;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .images-right div{
    min-width:250px;
    max-width: 250px;
  }
  .images-right::-webkit-scrollbar{
    width:0px;
  }
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

@media screen and (max-width:991px){
  .image-left-section{
    padding-left: .5%;
  }
}

@media screen and (max-width:768px){
  .image-left-section{
    padding-left:0px;
  }
}
</style>
