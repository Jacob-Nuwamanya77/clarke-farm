<template>
<!-- eslint-disable max-len -->
<div class="our-offers">
    <div class="container container-xl">
        <div class="row">
            <div class="col-md-3 rect-div">
                <div class="shape-rectangle rect-div position-relative top-0 start-0 fixed-top img-fluid"></div>
            </div>
            <div class="col-md-9">
            <div class="text-title">
                <p class="lead display-2">What We Have To Offer</p>
                <p id="sub-lead">See all the activities you can enjoy, the accomodations to choose from and <br> what our guests say about us</p>
             </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="content-offers img-fluid">
                    <div class="content-offers-nav">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav mx-auto">
                                <a class="nav-item nav-link active" href="#">Activities </a>
                                <a class="nav-item nav-link" href="#">Accommodation</a>
                                <a class="nav-item nav-link" href="#">Reviews</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.text-title{
  margin-top:20px;
  color:#525252;
    width:540px;
    height:115px;
    margin-right: 10px;
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
  width: 260px;
  background-color: #068D68;
  margin-top:20px;
  margin-bottom:20px;
  margin-right:20px;
}
.rect-div{
 margin-left:0px;
 padding:0px;
}

.content-offers{
    background-color: #f4f4f4;
    width:920px;
    height:400px;
    margin-left: 20px;
}
.col-md-12{
    width:930px;
    /* height:410; */
}
.our-offers{
    margin-left:150px;
}

 /* div{
  border:1px solid green;
} */
</style>
