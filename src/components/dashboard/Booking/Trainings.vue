<template>
    <div class="content-container" >
        <h5>Bookings</h5>
        <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                <li class="breadcrumb-item active" aria-current="page">Bookings</li>
            </ol>
        </nav>
        <hr>
        <div class="table-div">
          <div class="row">
            <div class="col-md-6 mt-3">
              <label class=" mt-1">Sort By:</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>All Bookings</option>
                <option value="1">Tours</option>
                <option value="2">Trainings</option>
                <option value="3">CoffeeFarm</option>
              </select>
            </div>
            <form class="form-inline my-lg-0 col-md-6 ml-5 ">
                <input class="form-control mr-sm-2 mt-3"
                type="search" placeholder="Search" aria-label="Search">
            </form>
          </div>
        <table class="table table-striped table-bordered table-responsive table-hover mt-5">
            <thead>
                <tr>
                    <td></td>
                    <td>Name</td>
                    <td>Email Address</td>

                    <td>Phone Number</td>

                    <td>Booking Type</td>
                    <td>Guests</td>
                    <td>Checkin</td>
                    <td>Action</td>

                </tr>
            </thead>
              <tbody>
          <tr v-for="visitor in visitorList" :key="visitor._id">
              <td><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></td>
            <!-- <td>{{ visitor.createdAt }}</td> -->
            <td>{{ visitor.name }}</td>
            <td>{{ visitor.email }}</td>
            <td>{{ visitor.phone }}</td>
            <td>{{ visitor.bookingtype }}</td>
            <td>{{ visitor.guestNumber }}</td>
            <td>{{ visitor.checkin }}</td>
            <td>
              <a><fa icon="eye" class="eye"/></a>
              <a href="" @click.prevent="deleteVisitor(visitor._id)"
                ><fa
                  icon="trash-alt" class="text-danger delete"
              /></a>
            </td>
          </tr>
        </tbody>
        </table>
        <p>
            Showing {{visitorList.length}} entries of {{visitorList.length}}</p>
        <p v-if="visitorList<=0" class="text-center">No Bookings are Available yet!!!</p>
        </div>
    </div>
</template>
<style scoped>
.eye{
    margin-right: 10px;
    color: #068d68;
}
 .form-select{
width: 250px;
margin-left: 70px;
margin-top: -30px;
}
.form-inline{
  width: 310px;
  margin-left: 100px;
}

h5,h3{
    color:rgb(53, 53, 85)
}

a{
    text-decoration: none;
    color: #068d68;
}
a:hover{
    color:rgb(53, 53, 85)
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
<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'Trainings',
  data() {
    return {
      visitorList: [],
    };
  },
  created() {
    axios
      .get('http://localhost:3000/visitors')
      .then((res) => {
        this.visitorList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteVisitor(id) {
      const indexOfArrayItem = this.visitorList.findIndex((i) => i.id === id);
      this.$swal({
        title: 'Are you sure?',
        text: "You can't revert this action",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          const endpoint = `/delete-visitor/${id}`;
          axios
            .get(api + endpoint)
            .then(() => {
              this.visitorList.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
          this.$swal(
            'Deleted',
            'visitor has been Permanently deleted',
            'success',
          );
        } else {
          this.$swal('Cancelled', 'Your data is still intact', 'info');
        }
      });
    },
  },
};
</script>
