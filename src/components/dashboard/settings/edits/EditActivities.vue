<template>
  <div>
    <a href="/admin/settings">here</a>.
    <!-- FORM -->
    <form @submit.prevent="onUpdate" enctype="multipart/form-data">
      <img
        :src="require('../../../../backend/uploads/' + activity.fileName + '.jpg')"
        alt="activity"
      />
      <br /><br />
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="file name"
          v-model="activity.fileName"
        />
      </div>
      <br />
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="description"
          v-model="activity.description"
          required
        />
      </div>
      <br />
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="fee"
          v-model="activity.fee"
        />
      </div>
      <br />
      <div>
        <button class="btn add text-white">Save changes</button>
      </div>
    </form>

    <!-- RESPONSE onUpdate -->
    <em>{{ message }}</em>
  </div>
</template>

<script>
import axios from 'axios';

const api = 'http://localhost:3000';
export default {
  name: 'EditActivities',
  data() {
    return {
      activity: {},
    };
  },

  // Edit-icon onClick GETs this activity.
  created() {
    const endpoint = `/activity/${this.$route.params.id}`;

    axios.get(api + endpoint).then((res) => {
      this.activity = res.data;
    });
  },
  //
  methods: {
    async onUpdate() {
      // Update-button onClick, POSTs this activity.
      const endpoint = `/update-activity/${this.$route.params.id}`;
      try {
        await axios.post(api + endpoint, this.activity).then(() => {
          this.$router.push('/admin');
        });
        this.message = 'Activity updated successfully.';
      } catch {
        this.message = 'Failed to Update! Please try again.';
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
  padding: 10px;
}

span {
  padding: 10px;
}

.add {
  float: right;
  background-color: #068d68;
  margin-right: 10px;
}

img {
  width: 150px;
  height: auto;
}

table {
  margin: 0 auto;
  font-size: 10pt;
}

th {
  background-color: #068d68;
  font-weight: lighter;
  color: white;
}
</style>
