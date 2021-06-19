<template>
    <div class="content-container" >
        <h5>Bookings</h5>
        <nav aria-label="breadcrumb" class="mt-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Bookings</a></li>
                <li class="breadcrumb-item active" aria-current="page">Training</li>
            </ol>
        </nav>
        <hr>
        <div class="table-div">
        <!-- <h5 class="col-md-6">Trainings</h5> -->
        <form class="form-inline my-lg-0 ">
            <input class="form-control mr-sm-2 mb-3"
            type="search" placeholder="Search" aria-label="Search">
        </form>
        <table class="table table-striped table-bordered table-responsive table-hover">
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
.form-inline{
float: right;
margin-left: 160px;
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
      // eslint-disable-next-line no-underscore-dangle
      const indexOfArrayItem = this.visitorList.findIndex((i) => i._id === id);
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
