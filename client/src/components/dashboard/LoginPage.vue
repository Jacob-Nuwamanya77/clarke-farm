<template>

  <div class="container">
    <div class="login-wrap ">
      <div class="row justify-content-center d-flex align-items-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card shadow-lg my-5 d-flex">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-5">
                  <div class="text-center">
                    <h2 class="p-3 logo-text">CLARKE FARM</h2>
                  </div>
                  <div class="auth text-center">
                    <!-- <h6 class="mt-4 login-heading">Login</h6> -->
                    <div class="auth-form mt-4">
                      <div>
                        <h6 class="text-center text-muted mb-3 ">
                          Welcome Back, Login to get Started</h6>
                        <form class="col-12 mt-5" @submit.prevent="userLogin">
                          <div class="alert alert-danger alert-dismissible fade show d-none" role="alert"
                          id="close-alert">
                            <strong>Opps! &nbsp;</strong>{{errormessage}}
                              <span aria-hidden="true" class="close-alert"
                              data-dismiss="alert" aria-label="Close" id="close" @click="dismissAlert">&times;</span>
                          </div>
                          <div class="mb-3 ml-3">
                            <div class="form-floating relative mb-2">
                              <input
                                type="text"
                                class="form-control"
                                name="name"
                                v-model="username"
                              >
                                <label for="name">Username</label>
                            </div>
                          </div>
                          <div class="mb-3 text-left ">
                            <div class="form-floating mb-2">
                              <input
                                type="password"
                                class="form-control"
                                name="password" v-model="password"
                              >
                                <label for="password">Password</label>
                            </div>
                          </div>
                        </form>
                        <div>
                          <button
                            type="submit"
                            class="btn  login-btn btn-block"
                            @click="userLogin"
                            id="login-btn"
                          >
                            {{status}}</button>
                        </div>
                        <hr>
                        <!-- <div class="form-check terms">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="loggedin-check"
                          >
                            <label
                              class="form-check-label text-muted"
                              for="loggedin-check"
                            > keep me logged in</label>
                        </div> -->
                        <div class="go-to-home mb-3">
                          <router-link to="/">
                            <button
                              type="submit"
                              class="btn btn-outline-secondary  btn-block"
                            >
                              Go to Home Page</button>
                          </router-link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <!-- image-div  -->
                <div class="col-lg-7">
                  <img src="@/assets/images/forestwalk.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import AuthService from '@/services/auth-service';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      status: 'Login',
      errormessage: '',
    };
  },
  methods: {
    createCredentialsObject() {
      const userdata = {
        username: this.username,
        password: this.password,
        access_token: '',
      };
      return userdata;
    },
    async userLogin() {
      this.status = 'Logging in';
      const userdetails = this.createCredentialsObject();
      await AuthService.checkCredentials(userdetails).then((response) => {
        this.status = 'Login';
        this.$store.dispatch('authenticateUser', response.data.data);
        sessionStorage.setItem('access_token', response.data.data.access_token);
        sessionStorage.setItem('user', JSON.stringify(response.data.data));
        this.$router.push('/admin/dashboard');
        this.username = '';
        this.password = '';
      }).catch((error) => {
        setTimeout(this.errorButton(), 2000);
        if (error.response.data.message === 'user not found') {
          this.errormessage = 'User does not exist';
        } else if (error.response.data.message === 'Incorrect Password') {
          this.errormessage = 'Check your password and try again';
        } else if (error.response.data.message === 'Failed to update User token') {
          this.errormessage = 'Network Error occured! Please Try Again';
        } else {
          this.errormessage = 'Wrong Credentials! Contact Admin for assistance';
        }
      });
    },
    errorButton() {
      this.status = 'Login Failed!';
      document.getElementById('login-btn').style.backgroundColor = 'red';
      document.getElementById('close-alert').classList.remove('d-none');
    },
    dismissAlert() {
      document.getElementById('close-alert').classList.add('d-none');
    },

  },
};
</script>
<style scoped>
.login-wrap {
  width: 100%;
  min-height: 100vh;
}
.logo-text {
  color: var(--blue-ink);
  font-family: Playfair;
}
.close-alert{
  float:right;
  margin-top:-40px;
  margin-right:-30px;
}
.close-alert:hover{
  cursor: pointer;
}
.form-floating {
  position: relative;
  margin-top: 20px;
}
button {
  width: 100%;
  border-radius: 4px;
}
.auth {
  margin-left: 30px;
}
.terms {
  float: left;
  font-size: 13px;
}
.go-to-home {
  margin-top: 100px;
}
.login-heading {
  color: #068d68;
}
.login-btn {
  background-color: #068d68;
  color: whitesmoke;
}

img {
  /* height:100vh; */
  width: 100%;
  background-position: 50%;
  background-size: cover;
  border-radius: 5px 0 0 5px;
}
@media (min-width: 2000px) {
  .col-lg-7 {
    width: 58%;
    flex: 0 0 auto;
    display: block !important;
  }
  /* img{
     height: 50vh;
   } */
}
</style>
