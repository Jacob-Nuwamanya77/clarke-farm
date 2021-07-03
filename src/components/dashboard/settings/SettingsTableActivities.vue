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
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitActivityObject">
              <div class="mt-5 mb-5">
                <label for="title">Activity title</label>
                <input type="text" name="title" id="title" v-model="title">
              </div>
              <div class="mt-5 mb-5">
                <label for="description">Describe the activity in brief</label>
                <input type="text" name="description" id="description" v-model="description">
              </div>
              <div class="mt-5 mb-5">
                <label for="Priced">Is activity priced?</label>
                <input type="radio" name="priced" value="Yes" v-model="priced"> Yes
                <input type="radio" name="priced" value="No" checked v-model="priced"> No
              </div>
              <div class="mt-5 mb-5">
                <span>
                  <label for="currency">Currency</label>
                  <select name="currency" id="currency" v-model="currency">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                </span>
                <span v-if="priced=='Yes'">
                  <label for="cost">Cost of activity</label>
                  <input type="text" name="cost" id="cost" v-model="cost">
                </span>
              </div>
              <div class="mt-5 mb-5">
                <label for="image">Upload image</label>
                <input type="file" name="image" id="image" ref="file" @change="onFileChange">
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Submit Data</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
