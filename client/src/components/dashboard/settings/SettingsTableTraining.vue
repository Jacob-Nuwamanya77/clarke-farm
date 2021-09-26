<template>
<!-- eslint-disable max-len -->
  <div class="mt-4">
    <div id="add-button">
      <a class="btn btn-success btn-sm float-end" @click.prevent="showModal">
        Add Training Program
      </a>
    </div>
    <div class="modal-overlay" v-if="modalVisible">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Training Program</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="closeModal"/>
          </div>
          <div class="modal-body" :key="componentKey">
            <form class="form-group" @submit.prevent="submitTrainingObject">
              <div :class="['mb-3', 'form-group', error.input.includes('title') ? 'error' : '']">
                <label>Training Program title</label>
                <input type="text" class="form-control" name="title" v-model="newData.title">
              </div>
              <span class="error-text" v-if="error.input.includes('title')">
                Only alphabets are allowed.
              </span>
              <div :class="['mb-3', 'form-group', error.input.includes('description') ? 'error' : '']">
                <label>Describe the training program in brief</label>
                <textarea
                name="description"
                v-model="newData.description"
                maxlength="80"
                class="form-control"
                @input="checkInputLength"></textarea>
                <span class="text-limits">{{ textarea }} / 80</span>
              </div>
              <span class="error-text" v-if="error.input.includes('description')">
                Only alphabets are allowed.
              </span>
              <div class="mb-2 form-group ">
                <label class="form-check-label" >Is the training program priced?</label><br>
                <input type="radio" class="form-check-input" name="priced" value="Yes" v-model="newData.priced"> Yes &nbsp;
                <input type="radio" class="form-check-input" name="priced" value="No" checked v-model="newData.priced"> No
              </div>
              <div :class="['mb-2', 'form-group', newData.priced == 'Yes' &&  error.input.includes('cost') ? 'error' : '']">
                <span class="mb-2" v-if="newData.priced=='Yes'">
                  <label>Currency</label>
                  <select name="currency" class="form-select" v-model="newData.currency">
                    <option value="ugx">UGX</option>
                    <option value="$">USD</option>
                  </select>
                </span><br>
                <span class="mb-3"  v-if="newData.priced=='Yes'">
                  <label>Cost of training</label>
                  <input type="text" class="form-control" name="cost" v-model="newData.cost">
                </span>
              </div>
              <span class="error-text" v-if="newData.priced == 'Yes' && error.input.includes('cost')">
                Cost should be a number.
              </span>
              <div :class="['mb-4', 'form-group', error.input.includes('file') ? 'error' : '']">
                <label class="form-label">Upload image</label>
                <input type="file"  class="form-control form-control-md" name="image" ref="file" @change="onFileChange" required>
              </div>
              <span v-if="newData.file !== ''" class="sub-text">
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
    <Table :itemList="allTrainings" @delete-item="confirmDelete"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TrainingService from '@/services/training-service';
import Swal from 'sweetalert2';
import FormValidation from '@/mixins/validate-forms';
import Table from './Table.vue';

export default {
  name: 'TrainingModal',
  created() {
    this.$store.dispatch('fetchAllTrainings');
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
      newData: {
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
      allTrainings: (state) => state.trainings.trainings,
    }),
    showFileSize() {
      if (this.newData.file !== '') {
        const size = Number(this.newData.file.size / 1024 / 1024).toFixed(2);
        return `${size} MBs`;
      }
      return 0;
    },
  },
  methods: {
    createImagePath(filename) {
      return `/images/${filename}`;
    },
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
      this.resetTrainingObject();
      this.error.input = '';
    },
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
      this.newData.file = this.$refs.file.files[0];
      if (this.error.input.length !== 0) {
        this.error.input = this.error.input.replace('file', '');
      }
    },
    createTrainingObject() {
      const formData = new FormData();
      for (const [key, value] of Object.entries(this.newData)) {
        formData.append(key, value);
      }
      return formData;
    },
    resetTrainingObject() {
      this.componentKey += 1;
      this.newData.title = '';
      this.newData.description = '';
      this.newData.currency = '$';
      this.newData.cost = '0.00';
      this.newData.file = '';
    },
    submitTrainingObject() {
      this.error.input = '';
      this.validateForm(this.newData);
      if (this.error.input.length === 0) {
        const training = this.createTrainingObject();
        TrainingService.postTraining(training)
          .then((response) => {
            this.closeModal();
            Swal.fire({
              title: 'Saved',
              text: 'Training has been added',
              icon: 'success',
              confirmButtonColor: '#045C44',
            });
            this.$store.dispatch('addTraining', response.data);
          });
        this.resetTrainingObject();
      }
    },
    deleteTrainingItem(id) {
      TrainingService.deleteTraining(id)
        .then((response) => {
          Swal.fire({
            title: 'Deleted',
            text: 'Training has been Permanently deleted',
            icon: 'success',
            confirmButtonColor: '#045C44',
          });
          this.$store.dispatch('deleteTraining', response.data);
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
          this.deleteTrainingItem(id);
        } else {
          Swal.fire({
            title: 'Cancelled',
            text: 'Training is still available',
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
