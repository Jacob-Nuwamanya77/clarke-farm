<template>
  <!-- new user modal  -->
  <div
    class="modal fade"
    id="addUser"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            id="exampleModalLabel"
          >New User
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3 row">
            <label
              for="inputname"
              class="col-sm-2 col-form-label"
            >Username</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputname"
                  v-model="username"
                >
              </div>
          </div>
          <div class="mb-3 row">
            <label
              for="inputPassword"
              class="col-sm-2 col-form-label"
            >Password</label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  v-model="password"
                >
              </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            data-bs-dismiss="modal"
          >Cancel</button>
            <button
              type="submit"
              class="btn btn-primary btn-sm login-btn"
            data-bs-dismiss="modal"
              @click="addUser"
            >Save changes</button>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import AuthService from '@/services/auth-service';

export default {
  name: 'addUserModal',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    createUserObject() {
      const userdata = {
        username: this.username,
        password: this.password,
        access_token: '',
      };
      return userdata;
    },
    addUser() {
      const user = this.createUserObject();
      AuthService.createUser(user).then(() => {
        // console.log(response.data);
      });
    },
  },
};
</script>
<style scoped>
.login-btn {
  background-color: var(--dark-green);
}
</style>
