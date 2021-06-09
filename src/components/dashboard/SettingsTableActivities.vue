<template>
<!-- eslint-disable max-len -->
    <div class="action">

            <a href="#" class="btn btn-success btn-sm" type="button" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Add Activity</a>

               <!-- Modal -->
    <div class="modal fade" tabindex="-1"  id="exampleModal">
   <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Activity</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <input type="file" ref="file" @change="onSelect" />
        <h6>{{ message }}</h6>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Activity Name"
            v-model="activity.activityname"
          />
        </div>
          <br>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="description"
            v-model="activity.description"
            required
          />
        </div>
         <br>
         <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="fee"
            v-model="activity.fee"
          />
        </div>
         <br>

         <div class="modal-footer">
        <button  class="btn btn-success">Save changes</button>
      </div>
        </form>
      </div>
    </div>
     </div>
  </div>
      </div>
       <hr>
    <div class="table-settings">
         <table class="table table-striped">
        <thead class="align-left ">
          <th></th>
          <th>Activity Name</th>
          <th>Image</th>
          <th>Activity Description</th>
          <th>Price</th>
        </thead>
        <tbody>
        </tbody>
     </table>
    </div>
</template>
<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'SettingsTableActivities',
  data() {
    return {
      activity: {
        activityname: '',
        description: '',
        fee: '',
      },
    };
  },
  methods: {
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
        this.message = 'uploaded file successfully';
      } catch {
        this.message = 'file not uploaded';
      }
      // Form2
      const endpoint2 = '/activities/add';
      axios
        .post(api + endpoint2, this.activity)
        .then(() => {
          // this.$router.push('/list-activities');
          this.activity = {
            activityname: '',
            description: '',
            fee: '',
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
table{
  width:1000px;
  padding:0px;
  margin-top:0%;
  margin-left:5%;
}
th{
    padding:5px;
    vertical-align:left;
     text-align: left;
      border:1px solid blue;
}
td{
    text-align: center;
    font-family: 'Roboto';
    font-size:14px;
    padding:0px;
     border:1px solid blue;
}
table,td,th{
     font-family: 'Roboto';
}
img{
  width:150px;
   height:100px;
}
 ul{
    display: flex;
  }
.action{
   min-width:40px;
  height:30px;
   margin-left: 80%;
  /* float:right; */
}

  hr{
  margin-left: 7%;
  width:1060px;
}
div{
  border:1px solid blue;
}
</style>
