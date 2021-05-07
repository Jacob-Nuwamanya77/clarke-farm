<template>
<!-- eslint-disable max-len -->

<div class="our-founder">
  <div class="container container-xl">
    <div class="row text-center wrapper">
      <div class="col-md-4 rect-div">
        <div class="shape-rectangle rect-div position-relative top-0 start-0 fixed-top img-fluid"></div>
      </div>
       <div class="col-sm-8">
          <div class="text-title">
         <p class="lead display-2">Our Founder</p>
         <p id="sub-lead">Dr. Ian Clarke share with us the vision and values of Clarke farm</p>
      </div>
       </div>
    </div>
    <div class="row">
      <div class="col-md-4 ">
        <figure>
           <div class="founder-video img-fluid">
             <iframe class="embed-responsive-item img-fluid" src="https://www.youtube.com/embed/NC3kg2Q3fqo" allowfullscreen></iframe>
             <!-- https://www.youtube.com/watch?v=NC3kg2Q3fqo -->
          </div>
    <figcaption class="text-center text-muted"> <em class="text-center">&emsp;Dr. Ian Clarke's profile</em></figcaption>
        </figure>
      </div>
      <div class="col-md-8">
        <div class="paragraph-about-founder text-muted text-left" >
      <p>Clarke farm represents a 30 year journey focused on quality and community development.</p>
      <p>
        A journey of investing in people and the communities.
         It started in Luweero shortly after the 1986 war where I built a community hospital that still stands to this day.
         </p>
         <p>
           It was extremely difficult to access good quality health care in the war torn region or even equipment and often times,
            I had to drive to Kenya to acquire the tools.
         </p>
         <p>
           I am proud of my experiences and the continued unwavering focus on quality.
          This is what Clarke Coffee is all about, quality.
         </p>
         <p>
           There is more to the story, 2000 outgrower farmers, jeep rides,
           river walks and so much more. Navigate through our platform and when you can, come visit for an unforgetable experience.
         </p>
    </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  props: {
    msg: String,
  },
  // data() {
  //   return {
  //     imgPath: '../assets/clarke.png',
  //   };
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-title{
  margin-left:30px;
  margin-top:20px;
  color:#525252;
}

.paragraph-about-founder{
  margin-top:0px;
  /* padding: 20px; */
  margin-right: 2px;
  color:#666666;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
}

.founder-video{
   margin-top:20px;
   /* background-color: #068D68; */
}
iframe{
 /* margin-left:20px; */
 height:260px;
 width:350px;
}
.container{
  background-color: #f5f5f5;
  /* width:1040px;
  height:620px; */
}

#sub-lead{
  font-size:16px;
}
.lead{
  font-size:22px;
  font-family:'Playfair Display';
}
.shape-rectangle{
   height: 27px;
  width: 300px;
  background-color: #068D68;
  margin-top:20px;
  margin-bottom:20px;
  margin-right:20px;
}
.rect-div{
 margin-left:0px;
 padding:0px;
}

figcaption{
  align-items: center;
  margin-left:10px;
  text-align: center;
  font-size:12px;
}
 /* div{
  border:1px solid green;
} */
</style>
