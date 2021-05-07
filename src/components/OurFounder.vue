<template>
  <!-- eslint-disable max-len -->
  <div class="our-founder">
    <div class="our-founder-heading">
      <h1>Our Founder</h1>
      <p>Dr. Ian Clarke's story and vision for clarke farm</p>
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
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae eligendi accusantium voluptate rerum minima iusto pariatur corporis
            voluptatibus ipsum! Molestias provident ea quidem eaque!
            Illo quos dolore provident ullam minima?
         </p>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Unde alias accusamus suscipit neque dolorum, deserunt quisquam vitae
            fuga nisi expedita pariatur, officiis, incidunt velit ullam dignissimos
            ipsa nostrum commodi aperiam.
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
  min-height: 600px;
  max-height: 700px;
  padding-top:10px;
  position: relative;
  margin-top: 80px;
}
@media screen and (max-width:880px){
  .our-founder{
    max-height: 100%;
  }
}
@media screen and (max-width: 576px){
  .our-founder{
    margin-top:20px;
  }
}
@media screen and (min-width:576px){
  .our-founder{
    margin-top:45px;
  }
}
.our-founder-heading h1{
  text-align: center;
  margin-top: 0;
  font-size:1.7em;
  margin-bottom: 20px;
  font-family: Playfair;
  font-weight: lighter;
}
.our-founder-heading p{
  text-align: center;
  margin-top:15px;
}
@media screen and (max-width:768px){
  .our-founder-heading p{
    width:95%;
    margin-left: auto;
    margin-right: auto;
  }
}
.container-founder-description{
  margin-top:20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.container-left{
  width:35%;
}
.container-right{
  width:60%;
  padding-left:28px;
}
@media screen and (max-width:880px){
  .container-founder-description{
    display: block;
  }
  .container-left{
    width:90%;
    margin-left: auto;
    margin-right: auto;
  }
  .container-right{
    width:90%;
    margin-left: auto;
    margin-right: auto;
    padding-left:inherit;
  }
}
.linedesign {
  width: 15%;
  height: 25px;
  position:absolute;
  top:5px;
  left: 0;
  background-color: #068d68;
}

iframe{
 /* margin-left:20px; */
 height:380px;
 width:100%;
}
figcaption{
  margin-top: 20px;
  text-align: center;
}
</style>
