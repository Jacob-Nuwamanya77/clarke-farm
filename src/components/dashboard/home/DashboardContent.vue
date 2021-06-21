<template>
    <div class="content-container" >
        <h5>Dashboard</h5>
        <h3>welcome Mariat,</h3>
        <hr>
        <div class="row">
            <div class="col-lg-6">
                <div class=" card big-card">
                    <div class="card-body">
                    <div>
                       <span class="mt-0 heading-span">Bookings Made Today</span>
                        <!-- <img src="../assets/icons/trend.svg" width="60" height="60"/> -->
                       <h1>500 <span>guests</span></h1>
                       <div class="progress mb-3 mt-3">
                    <div class="progress-bar progress-bar-striped "
                    role="progressbar" style="width: 100%" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                       <p> Above is the total number of bookings made
                            to the farm from all the three departments
                           i.e trainings, tours and coffee.
                       </p>
                       <a href="#" class="mt-3">
                           View details <fa icon="arrow-right" class="arrow-left"/></a>
                    </div>

                    </div>

                </div>
            </div>
             <div class="col-lg-6">
                <div class="row">
                        <div class="col small-card card">
                       <span class="mt-3 heading-span">Trainings</span>
                       <h1>40</h1>
                       <div class="icon-div">
                       <fa icon="graduation-cap" class="card-icons"/>
                       </div>
                        </div>
                        <div class="col small-card card right-card">
                            <span class="mt-3 heading-span">Tours</span>
                       <h1>40</h1>
                       <div>
                       <fa icon="user-friends" class="card-icons"/>
                       </div>
                        </div>

                </div>
                 <div class="row row2">
                        <div class="col small-card card">
                            <span class="mt-3 heading-span">Cottages</span>
                       <h1>40</h1>
                       <div>
                       <fa icon="house-user" class="card-icons"/>
                       </div>
                        </div>
                        <div class="col small-card card right-card">
                            <span class="mt-3 heading-span">Camping</span>
                       <h1>40</h1>
                       <div>
                       <fa icon="campground" class="card-icons"/>
                       </div>
                        </div>

                </div>

            </div>
        </div>
        <div class="table-div">
        <h4 class="mt-5">Incoming Guests</h4>
        <table class="table mt-3 table-bordered table-responsive table-hover">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email Address</td>

                    <td>Phone Number</td>

                    <td>Booking Type</td>

                    <td>Checkin Date</td>
                    <td>Action</td>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ndagire Mariat</td>
                    <td>mndagire28@gmail.com</td>
                    <td>0705976941</td>
                    <td>Training</td>
                    <td>23.06.21</td>
                    <td><a><fa icon="eye" class="eye"/></a>
                    <fa icon="trash-alt" class="text-danger"/></td>

                </tr>
            </tbody>
        </table>
        <p>Showing 10 entries of 20</p>
        </div>
    </div>
</template>
<style scoped>
.big-card{
    color: #068d68;
    height: 280px;
    box-shadow: 5px,solid,white;
    /* background: linear-gradient(to right bottom, #75cfb7, #068d68); */
}
.row2{
    margin-top: 40px;
}
.small-card{
    color: #068d68;
    height: 120px;
    text-align: start;
    /* color: white; */
    /* background: linear-gradient(to right bottom, #75cfb7, #068d68); */

}
.right-card{
    margin-left: 10px;
}
span{
    font-size: 20px;
}
.card-icons{
/* color: rgb(53, 53, 85); */
font-size: 25px;
    float: right;
    margin-top: -60px;
    margin-right: 20px;
}
.card-body hr{
    height:20px;
    margin-top: 20px;
}
.progress-bar{
    background-color: #068d68;
}
h5,h3{
    color:rgb(53, 53, 85)
}
img{
    margin-left: 160px;
}
a{
    text-decoration: none;
    color: #068d68;
}
a:hover{
    color:rgb(53, 53, 85)
}
.arrow-left{
    margin-left: 0px;
}
td{
    text-align: center;
    color:rgb(53, 53, 85)
}
.eye{
    margin-right: 10px;
    color: #068d68;
}
.table-div p{
    color:rgb(53, 53, 85);
    margin-top:20px;
}
</style>
