<template>
    <div class="content-container container-fluid" >
        <h5 class="mt-3">Bookings</h5>
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
            <form class=" my-lg-0 col-md-6 ml-5 float-right">
                <input class="form-control mr-sm-2 mt-3 "
                type="search" placeholder="Search bookings" aria-label="Search" v-model="searchterm">
            </form>
          </div>
          <a data-toggle="tooltip" data-placement="top" title="Delete" class="d-none" id="delete-btn"
           href="" @click.prevent="deleteVisitor(visitor._id)"
                ><fa
                  icon="trash-alt" class="text-danger delete-btn"/>
          </a>
        <table class="table  table-responsive table-hover table-nowrap mt-5 font-size-12">
            <thead class="table-secondary font-size-10">
                <tr >
                    <td><input class="form-check-input" type="checkbox" value="" id="defaultCheck1" @click="check"></td>
                    <th >Name</th>
                    <th>Email Address</th>

                    <th>Phone Number</th>

                    <th>Booking Type</th>
                    <th>Checkin</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
          <tr v-for="visitor in filteredVisitors" :key="visitor._id">
              <td><input class="form-check-input" type="checkbox" value="" name="visitor" id="defaultCheck1"></td>
            <!-- <td>{{ visitor.createdAt }}</td> -->
            <td class="text-start">{{ visitor.name }}</td>
            <td class="text-start">{{ visitor.email }}</td>
            <td class="text-start">{{ visitor.phone }}</td>
            <td class="text-start" v-if="visitor.bookingtype=='Tour'">
              <span class="badge badge-pill bg-success font-size-11">Tour</span></td>
              <td class="text-start" v-else-if="visitor.bookingtype=='Coffee-Farm'">
              <span class="badge badge-pill bg-danger font-size-11">Coffee</span></td>
              <td class="text-start" v-else-if="visitor.bookingtype=='Training'">
              <span class="badge badge-pill bg-warning font-size-11">Trainings</span></td>
            <!-- <td>{{ visitor.guestNumber }}</td> -->
            <td class="text-start">{{ visitor.checkin }}</td>
            <td class="text-start">
              <button type="button" class="btn btn-primary btn-sm btn-rounded"
              data-toggle="modal" data-target=".booking-detailModal">View Details</button>
            </td>
          </tr>
        </tbody>
        </table>
        <p>
            Showing {{visitorList.length}} entries of {{visitorList.length}}</p>
        <p v-if="visitorList<=0" class="text-center">No Bookings are Available yet!!!</p>
        </div>
        <!-- details modal -->
        <details-modal/>
        <!-- modal-end -->
    </div>
</template>
<style scoped>
th, td {
font-family: ‘Lato’, sans-serif;
font-size: 14px;
font-weight: 400;
padding: 10px;
}
.eye{
    margin-right: 10px;
    color: #068d68;
}
.btn-rounded{
  border-radius: 10px;
  height: 30px;
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
.delete-btn{
  float:right;
  margin-right: 20px;
  margin-top: 10px;
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
import detailsModal from './DetailsModal.vue';

const api = 'http://localhost:3000';
export default {
  name: 'Trainings',
  components: {
    detailsModal,
  },
  data() {
    return {
      visitorList: [],
      searchterm: '',
    };
  },
  async created() {
    await axios
      .get('http://localhost:3000/visitors')
      .then((res) => {
        this.visitorList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    check() {
      const checkboxes = document.getElementsByName('visitor');
      for (const checkbox of checkboxes) {
        checkbox.checked = true;
        document.getElementById('delete-btn').classList.remove('d-none');
      }
    },
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
  computed: {
    filteredVisitors() {
      let visitors = this.visitorList;
      console.log(typeof this.visitorList);
      if (this.searchterm !== '' && this.searchterm) {
        visitors = visitors.filter((item) => item.name.toUpperCase().includes(this.searchterm.toUpperCase())
        || item.email.toUpperCase().includes(this.searchterm.toUpperCase())
        || item.bookingtype.toUpperCase().includes(this.searchterm.toUpperCase()));
      }
      return visitors;
    },
  },
};
</script>
