<template>
  <div class="our-team">
    <div class="our-team-heading">
      <h1>Our Team</h1>
      <div class="linedesign"></div>
    </div>
    <div class="our-team-images">
      <div class="team-member-details">
        <div class="circle-container-image">
          <img src="@/assets/home-images/sylvester.jpg" alt="sylvester kyendy">
        </div>
        <p>Sylvester Kyendy</p>
        <p>Farm Manager</p>
      </div>
      <div class="team-member-details">
        <div class="circle-container-image">
          <img src="@/assets/home-images/robert.jpg" alt="robert kimuli">
        </div>
        <p>Robert Kimuli</p>
        <p>Audit &amp; Administration</p>
      </div>
      <div class="team-member-details">
        <div class="circle-container-image">
          <img src="@/assets/home-images/charles.jpg" alt="charles mabeeri">
        </div>
        <p>Charles Mabeeri</p>
        <p>Supervisor General Duties</p>
      </div>
      <div class="team-member-details">
        <div class="circle-container-image">
          <img src="@/assets/home-images/sulaiman.jpg" alt="sulaiman mulekwa">
        </div>
        <p>Sulaiman Mulekwa</p>
        <p>Head Transportation</p>
      </div>
    </div>
    <div class="container-show-more">
      <button>Show More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurTeam',
};
</script>

<style scoped>
.our-team {
  width: 100%;
  position: relative;
  margin-top: 80px;
}
@media screen and (max-width: 576px){
  .our-team{
    margin-top:20px;
  }
}
@media screen and (min-width:576px){
  .our-team{
    margin-top:45px;
  }
}
.our-team-heading h1{
  text-align: center;
  margin-top: 0;
  font-size:1.7em;
  margin-bottom: 20px;
  font-family: Playfair;
  font-weight: lighter;
}
.our-team-heading p{
  text-align: center;
  margin-top:15px;
}
@media screen and (max-width:768px){
  .our-team-heading p{
    width:95%;
    margin-left: auto;
    margin-right: auto;
  }
}
.linedesign {
  width: 25%;
  height: 25px;
  position:absolute;
  top:5px;
  right: 0;
  background-color: #068d68;
}
.our-team-images{
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  margin-top: 40px;
  flex-wrap: wrap;
  min-height: 300px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
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
.team-member-details p{
  text-align: center;
}
.container-show-more{
  text-align:center;
  margin-top: 20px;
}
button{
  height:35px;
  width:40%;
  max-width: 180px;
  border-radius: 3px;
  border:none;
  background-color: var(--dark-green);
  color:white;
}
</style>
