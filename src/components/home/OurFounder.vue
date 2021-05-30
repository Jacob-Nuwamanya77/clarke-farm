<template>
  <!-- eslint-disable max-len -->
  <div class="our-founder">
    <div class="our-founder-heading">
      <p class="section-title">Our Founder</p>
      <div class="linedesign"></div>
    </div>
    <div class="container-founder-description">
      <div class="container-left">
        <figure>
            <div class="founder-video img-fluid">
              <iframe class="embed-responsive-item img-fluid"
              src="https://www.youtube.com/embed/NC3kg2Q3fqo" allowfullscreen></iframe>
              <!-- https://www.youtube.com/watch?v=NC3kg2Q3fqo -->
            </div>
          <figcaption>
            <em class>Dr. Ian Clarke's profile</em>
          </figcaption>
        </figure>
      </div>
      <div class="container-right">
         <p>
            Clarke farm represents a 30 year journey focused on quality and community development.
         </p>
         <p>
           A journey of investing in people and the communities.
            It started in Luweero shortly after the 1986 war where I built a community hospital
            that still stands to this day.
         </p>
         <p>
           It was extremely difficult to access good quality health care
            in the war torn region or even equipment and often times,
            I had to drive to Kenya to acquire the tools.
         </p>
         <p>
           I am proud of my experiences and the continued unwavering
            focus on quality. This is what Clarke Coffee is all about, quality.
         </p>
         <p>
           There is more to the story, 2000 outgrower farmers,
            jeep rides, river walks and so much more. Navigate
            through our platform and when you can, come visit for an unforgetable experience.
         </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurFounder',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.our-founder {
  width: 100%;
  padding-top:10px;
  position: relative;
  margin-top: 80px;
}
@media screen and (max-width:700px){
  .our-founder{
    padding-left: 20px;
  }
}
.our-founder-heading p{
  text-align: center;
}
.container-founder-description{
  margin-top:40px;
}
.container-left{
  width:95%;
}
@media screen and (min-width:700px){
  .container-founder-description{
    display: flex;
    width:85%;
    margin-left: auto;
    margin-right: auto;
  }
  .container-left{
    width:40%;
  }
  .container-right{
    width:60%;
    padding-left: 20px;
  }
}
@media screen and (min-width:1024px){
  .container-founder-description{
    width:70%;
  }
}
.section-title{
  font-weight: bold;
  font-size: 25px;
  font-family: Playfair;
  margin-top: 0;
  padding: 0;
}

@media screen and (max-width:1280px){
  .section-title{
    font-size: 20px;
  }
}

.linedesign {
  width: 15%;
  height: 25px;
  position:absolute;
  top:18px;
  left: 0;
  background-color: #068d68;
}

iframe{
 height:380px;
 width:100%;
}
figcaption{
  margin-top: 20px;
  text-align: center;
}
</style>
