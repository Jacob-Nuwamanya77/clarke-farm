<template>
  <div class="mt-5">
    <a href="#" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Activity
    </a>
    <!-- Modal -->
    <div class="modal fade" tabindex="-1" id="exampleModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Activity</h5>
            <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitActivityObject" class="form-group">
              <div class="mb-3 form-group">
                <label for="title">Activity title</label>
                <input type="text" class="form-control" name="title" id="title" v-model="title">
              </div>
              <div class="mb-3 form-group">
                <label for="description">Describe the activity in brief</label>
                <input type="text" class="form-control" name="description"
                id="description" v-model="description">
              </div>
              <div class="mb-3 form-group ">
                <label for="Priced" class="form-check-label" >Is the activity priced?</label><br>
                <input type="radio" class="form-check-input"
                name="priced" value="Yes" v-model="priced"> Yes
                <input type="radio" class="form-check-input" name="priced" value="No"
                 checked v-model="priced"> No
              </div>
              <div class="mb-3 form-group">
                <span class="mb-5" v-if="priced=='Yes'">
                  <label for="currency">Currency</label>
                  <select name="currency" class="form-select" id="currency" v-model="currency">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                </span><br>
                <span class="mb-3"  v-if="priced=='Yes'">
                  <label for="cost">Cost of activity</label>
                  <input type="text" class="form-control" name="cost" id="cost" v-model="cost">
                </span>
              </div>
              <div class="mb-3 form-group">
                 <label class="form-label"  for="image">Upload image</label>
                <input type="file"  class="form-control form-control-md" name="image" id="image"
                ref="file" @change="onFileChange">
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Submit Data</button>
                <button type="button" class="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityModal',
  data() {
    return {
      title: '',
      description: '',
      priced: 'No',
      currency: '$',
      cost: '0.00',
      file: '',
    };
  },
  methods: {
    onFileChange() {
      this.file = this.$refs.file.files[0];
    },
    createActivityObject() {
      const inputData = {
        title: this.title,
        description: this.description,
        priced: this.priced,
        currency: this.currency,
        cost: this.cost,
        file: this.file,
      };
      const formData = new FormData();
      for (const [key, value] of Object.entries(inputData)) {
        formData.append(key, value);
      }
      return formData;
    },
    submitActivityObject() {
      const activity = this.createActivityObject();
      this.$store.dispatch('saveActivity', activity);
    },
  },
};
</script>

<style scoped>
.mb-5{
  margin-bottom: 5px;
}
</style>
