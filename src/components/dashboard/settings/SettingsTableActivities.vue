<template>
  <!-- eslint-disable max-len -->
  <div class="mt-5">
    <a
      href="#"
      class="btn btn-sm text-white add mb-3"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      >Add Activity</a
    >

    <!-- Modal -->
    <div class="modal fade" tabindex="-1" id="exampleModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Activity</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="onSubmit" enctype="multipart/form-data" class="requires-validation"  >
            <div class="form-group input-group was-validated ">
              <input type="file" ref="file" @change="onSelect" required />
            </div>
                <br />
              <div class="form-group input-group was-validated ">
                <input
                  class="form-control "
                  type="text"
                  placeholder="Filename"
                  id="validationCustom01"
                   aria-describedby="inputGroupPrepend"
                  v-model="activity.filename"  required />
              </div>
              <br />
             <div class="form-group input-group was-validated ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Activity Name"
                  v-model="activity.activityname"
                  id="validationCustom02"
                   aria-describedby="inputGroupPrepend"
                   required
                />
                </div>
                   <br />
                   <div class="form-group input-group was-validated ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="description"
                  v-model="activity.description"
                  id="description"
                    aria-describedby="inputGroupPrepend"
                   required
                />
              </div>
               <br />

             <div class="form-group input-group was-validated ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="fee"
                  v-model="activity.fee"
                  id="fee"
                  aria-describedby="inputGroupPrepend"
                   required
                />
              </div>
              <br />

              <div class="modal-footer">
                <button class="btn add text-white" type="submit">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="table-settings">
    <table class="table table-striped table-bordered">
      <thead>
        <th>Activity Name</th>
        <th>Image</th>
        <th>Activity Description</th>
        <th>Price</th>
        <th>Action</th>
      </thead>
      <tbody>
         <tr v-for="activity in activityList" :key="activity._id">
          <td>{{ activity.activityname }}</td>
          <td>
        <img src="" alt="activity"/>
          </td>
          <td id="td-description">{{ activity.description }}</td>
          <td>{{ activity.fee }}</td>
          <td>
            <a style="color: #068d68"><fa icon="edit" /></a>
            <a href="" @click.prevent="deleteActivity(activity._id)"
              ><fa
                icon="trash"
                style="
                  float: right;
                  margin-left: 35px;
                  margin-top: 0px;
                  color: red;
                "
            /></a>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';

const forms = document.querySelectorAll('.needs-validation');

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
  .forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });

const api = 'http://localhost:3000';
export default {
  name: 'SettingsTableActivities',
  data() {
    return {
      activityList: [],
      // value: this.file.name,
      activity: {
        filename: '',
        activityname: '',
        description: '',
        fee: '',
      },
    };
  },
  created() {
    // const endpoint = '/activities';
    axios
      .get('http://localhost:3000/activities')
      .then((res) => {
        this.activityList = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    deleteActivity(id) {
    // eslint-disable-next-line no-underscore-dangle
      const indexOfArrayItem = this.activityList.findIndex((i) => i._id === id);
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
          const endpoint = `/delete-activity/${id}`;
          axios
            .get(api + endpoint)
            .then(() => {
              this.activityList.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
          this.$swal(
            'Deleted',
            'activity has been Permanently deleted',
            'success',
          );
        } else {
          this.$swal('Cancelled', 'Your file is still intact', 'info');
        }
      });
    },

    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append('file', this.file);
      // Form1
      const endpoint1 = '/uploads';
      try {
        await axios.post(api + endpoint1, formData);
        // eslint-disable-next-line no-empty
      } catch {}
      // Form2
      const endpoint2 = '/activities/add';
      axios.post(api + endpoint2, this.activity);
      try {
        this.activity = {
          filename: '',
          activityname: '',
          description: '',
          fee: '',
        };

        this.$toast.success('Activity successfully added', {
          position: 'top-right',
          duration: '3000',
        });
      } catch {
        this.$toast.error('failed to submit; please, try again!', {
          position: 'top-right',
          duration: '3000',
        });
      }
    },

    // validation methods
  },
};
</script>
<style scoped>
table {
  padding: 0px;
  margin-top: 30px;
  margin-left: 70px;
}

th {
  padding: 0px;
  vertical-align: left;
  text-align: left;
  /* border:1px solid blue; */
}
td {
  text-align: left;
  font-family: "Roboto";
  font-size: 14px;
  padding: 0px;
  /* border:1px solid blue; */
}
table,
td,
th {
  font-family: "Roboto";
  font-size: 14px;
  padding: 0px;
}
img {
  width: 150px;
  height: 100px;
}
.add {
  float: right;
  background-color: #068d68;
  margin-bottom: 10px;
  margin-right: 0px;
  margin-right: 80px;
  top: 10px;
  left: 30px;
}

.forms-inputs input {
    height: 50px;
    border: 2px solid #eee
}

.forms-inputs input:focus {
    box-shadow: none;
    outline: none;
    border: 2px solid #000
}
input:valid(:placeholder-shown) {
  border-color: hsl(120, 76%, 50%);
}

</style>
