<template>
<!-- eslint-disable max-len -->
<div class="pt-3">
           <a href="#" class="btn btn-sm text-white mb-3 add " type="button" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Add Accommodation</a>
               <!-- Modal -->
    <div class="modal fade" tabindex="-1"  id="exampleModal">
   <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Accommodation</h5>
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
            placeholder="Accommodation Type"
            v-model="accommodation.accommodationtype"
          />
        </div>
          <br>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="description"
            v-model="accommodation.description"
            required
          />
        </div>
         <br>
         <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="fee"
            v-model="accommodation.fee"
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

         <table class="table table-striped table-bordered">
        <thead>
          <th>Accommodation Type</th>
          <th>Image</th>
          <th>Description</th>
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
  name: 'SettingsTableAccommodation',
  data() {
    return {
      accommodation: {
        accommodationtype: '',
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
      const endpoint2 = '/accomodations/add';
      axios
        .post(api + endpoint2, this.accommodation)
        .then(() => {
          // this.$router.push('/list-activities');
          this.accommodation = {
            accommodationtype: '',
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
  padding:0px;
  margin-top:30px;
  margin-left:70px;
}

table,td,th{
     font-family: 'Roboto';
      font-size:14px;
      padding:5px;

}
img{
  width:150px;
   height:100px;
}
.add{
  float: right;
  background-color: #068d68;
  margin-right: 10px;

}
</style>
