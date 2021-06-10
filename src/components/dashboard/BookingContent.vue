<template>
  <div>
    <div class="content">
      <table class="filter">
        <p class="mt-3">Filter Results</p>
        <tr>
          <td>From:</td>
          <td><input type="date" class="datepicker form-control" /></td>
          <td class="label">Category:</td>
          <td>
            <select class="category form-control">
              <option>Corporate</option>
              <option>Option one</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>To:</td>
          <td><input type="date" class="datepicker form-control" /></td>
          <td class="label">Package:</td>
          <td>
            <select class="category form-control">
              <option>Option one</option>
              <option>Option one</option>
            </select>
          </td>
        </tr>
      </table>
      <table
        class="
          table table-striped table-hover table-bordered
          mt-5
          table-responsive
        "
        id="client-table"
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Client Name</th>
            <th>Booking Type</th>
            <th>Phone Contact</th>
            <th>Email Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="visitor in visitorList" :key="visitor._id">
            <td>{{ visitor.createdAt }}</td>
            <td>{{ visitor.name }}</td>
            <td>{{ visitor.guestNumber }}</td>
            <td>{{ visitor.phone }}</td>
            <td>{{ visitor.email }}</td>
            <td>
              <a style="color: #068d68"><fa icon="eye" /></a>
              <a href="" @click.prevent="deleteVisitor(visitor._id)"
                ><fa
                  icon="trash"
                  style="
                    float: right;
                    margin-left: 35px;
                    margin-top: -20px;
                    color: red;
                  "
              /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
  </div>
</template>
<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'BookingContent',
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
          this.$swal('Cancelled', 'Your file is still intact', 'info');
        }
      });
    },
  },
};
</script>
<style scoped>
/* active sidebar link */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
}
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
.sidebar #home {
  margin-top: 30px;
}

.content {
  margin-left: 150px;
  margin-top: 0px;
}
.filter {
  width: 100%;
  margin-left: -100px;
}
h3 {
  margin-top: 30px;
}
p,
h3 {
  margin-left: -80px;
}
.filter tr {
  padding: 5px;
}

.filter td {
  /* border: 1px solid green; */
  text-align: right;
}

.datepicker {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0px;
  width: 70%;
  border-radius: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}
#todate {
  margin-left: 23px;
}
.category {
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 80%;
  /* margin-left: 18px; */
  border-radius: 5px;
  font-display: "Roboto";
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}
.label td {
  width: 20px;
  text-align: right;
}
.filter-span {
  margin-left: 40px;
}

hr {
  margin-left: 60px;
}
router-link .logout {
  margin-top: 140px;
}
#client-table {
  margin-left: -80px;
  max-width: 100%;
}
#client-table td {
  text-align: center;
  padding: 20px;
  font-family: "Roboto";
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
}
#client-table table,
td,
th {
  font-family: "Roboto";
}
</style>
