<template>
<!-- eslint-disable max-len -->
  <div class="mt-3">
    <div id="add-button">
      <a  class="btn btn-success btn-sm float-end" @click.prevent="showModal">
        Add Activity
      </a>
    </div>
    <div class="modal-overlay" v-if="modalVisible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Activity</h5>
            <button type="button" class="btn-close"  aria-label="Close" @click="closeModal"/>
          </div>
          <div class="modal-body" :key="componentKey">
            <form class="form-group" @submit.prevent="submitActivityObject">
              <div :class="['mb-3', 'form-group', error.input.includes('title') ? 'error' : '']">
                <label>Activity title</label>
                <input type="text" name="title" v-model="activity.title" class="form-control">
              </div>
              <span class="error-text" v-if="error.input.includes('title')">
                Only alphabets are allowed.
              </span>
              <div :class="['mb-3', 'form-group', error.input.includes('description') ? 'error' : '']">
                <label>Describe the activity in brief</label>
                <textarea
                name="description"
                v-model="activity.description"
                maxlength="80"
                class="form-control"
                @input="checkInputLength"></textarea>
                <span class="text-limits">{{ textarea }} / 80</span>
              </div>
              <span class="error-text" v-if="error.input.includes('description')">
                Only alphabets are allowed.
              </span>
              <div class="mb-2 form-group">
                <label class="form-check-label">Is the activity priced?</label><br>
                <input type="radio" class="form-check-input" name="priced" value="Yes" v-model="activity.priced"> Yes &nbsp;
                <input type="radio" class="form-check-input" name="priced" value="No" checked v-model="activity.priced"> No
              </div>
              <div
              :class="['mb-2', 'form-group', activity.priced == 'Yes' &&  error.input.includes('cost') ? 'error' : '']">
                <span v-if="activity.priced=='Yes'">
                  <label>Currency</label>
                  <select name="currency" v-model="activity.currency" class="form-select">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                </span><br>
                <span v-if="activity.priced=='Yes'">
                  <label>Cost of activity</label>
                  <input type="text" name="cost" v-model="activity.cost" class="form-control">
                </span>
              </div>
              <span class="error-text" v-if="activity.priced == 'Yes' && error.input.includes('cost')">
                Cost should be a number.
              </span>
              <div :class="['mb-4', 'form-group', error.input.includes('file') ? 'error' : '']">
                <label class="form-label">Upload image</label>
                <input type="file" name="image" ref="file" @change="onFileChange" class="form-control form-control-md" required>
              </div>
              <span v-if="activity.file !== ''" class="sub-text">
                {{ showFileSize }}
              </span>
              <span class="error-text" v-if="error.input.includes('file')">
                File size exceeds 2MB. Smaller file sizes are better.
              </span>
              <div class="modal-footer">
                <button type="submit" class="btn btn-success">Submit Data</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>
    <Table :itemList="allActivities" @delete-item="confirmDelete"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ActivityService from '@/services/activity-service';
import Swal from 'sweetalert2';
import FormValidation from '@/mixins/validate-forms';
import Table from './Table.vue';

export default {
  name: 'ActivityModal',
  created() {
    this.$store.dispatch('fetchAllActivities');
  },
  components: {
    Table,
  },
  data() {
    return {
      modalVisible: false,
      error: {
        input: '',
      },
      textarea: 0,
      componentKey: 0,
      activity: {
        title: '',
        description: '',
        priced: 'No',
        currency: '$',
        cost: '0.00',
        file: '',
      },
    };
  },
  mixins: [FormValidation],
  computed: {
    ...mapState({
      allActivities: (state) => state.activities.activities,
    }),
    showFileSize() {
      if (this.activity.file !== '') {
        const size = Number(this.activity.file.size / 1024 / 1024).toFixed(2);
        return `${size} MBs`;
      }
      return 0;
    },
  },
  methods: {
    checkInputLength(event) {
      this.textarea = event.target.value.length;
    },
    validateForm(form) {
      this.error.input += !this.validateAlphabetCharacters(form.title) ? ' title' : '';
      this.error.input += !this.checkNonEmpty(form.description) ? ' description' : '';
      this.error.input += !this.validateNumbers(form.cost) ? ' cost' : '';
      this.error.input += !this.checkFileSize(form.file) ? ' file' : '';
    },
    onFileChange() {
      this.activity.file = this.$refs.file.files[0];
      if (this.error.input.length !== 0) {
        this.error.input = this.error.input.replace('file', '');
      }
    },
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    createActivityFormData() {
      const formData = new FormData();
      for (const [key, value] of Object.entries(this.activity)) {
        formData.append(key, value);
      }
      return formData;
    },
    resetActivityInputData() {
      this.componentKey += 1;
      this.activity.title = '';
      this.activity.description = '';
      this.activity.priced = 'No';
      this.activity.currency = '$';
      this.activity.cost = '0.00';
      this.activity.file = '';
    },
    submitActivityObject() {
      this.error.input = '';
      this.validateForm(this.activity);
      if (this.error.input.length === 0) {
        const activity = this.createActivityFormData();
        ActivityService.postActivity(activity)
          .then((response) => {
            this.closeModal();
            Swal.fire({
              title: 'Saved',
              text: 'Activity has been added',
              confirmButtonColor: '#045C44',
              icon: 'success',
            });
            this.$store.dispatch('addActivity', response.data);
          });
        this.resetActivityInputData();
      }
    },
    deleteActivityItem(id) {
      ActivityService.deleteActivity(id)
        .then((response) => {
          Swal.fire({
            title: 'Deleted',
            text: 'Activity has been Permanently deleted',
            icon: 'success',
            confirmButtonColor: '#045C44',
          });
          this.$store.dispatch('deleteActivity', response.data);
        });
    },
    confirmDelete(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can\'t revert this action',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        confirmButtonColor: '#FC646C',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteActivityItem(id);
        } else {
          Swal.fire({
            title: 'Cancelled',
            text: 'Activity is still available',
            icon: 'info',
            confirmButtonColor: '#045C44',
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.modal-overlay{
  background-color: rgba(0, 0, 0, 0.4);
  width:100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.content-header{
  background-color: #ececec;
  height:50px;
  display: flex;
  align-items: center;
  position: relative;
}
.error {
  border: 1px solid red;
}
.error-text{
  color:red;
  font-size: 12px;
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.text-limits{
  font-size: 13px;
  font-weight: bold;
  color: #a9a9a9;
  display: block;
  margin-top: 10px;
}
.sub-text{
  font-weight: bold;
  color:#a9a9a9;
  font-size: 14px;
}
</style>
