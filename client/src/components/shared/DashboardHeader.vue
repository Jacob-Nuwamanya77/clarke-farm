<template>
  <div id="dashboard-header">
    <div class="section-container">
      <div id="avatar-container">
        <div id="avatar">
          <a href="https://www.vecteezy.com/free-vector/human"  target="_blank">
            <img src="@/assets/images/avatars/female_avatar.png" alt="female avatar" aria-hidden="true">
          </a>
        </div>
        <div id="signin-options">
          <span id="user-details">
            <span id="user-name">{{ user.username }}</span>
            <span id="user-role">Administrator</span>
          </span>
          <div class="dropdown">
            <span id="sign-out" @click="setLogOutClicked" data-bs-toggle="dropdown">
              <span v-if="!logOutClicked">&caron;</span>
              <span v-else>&circ;</span>
            </span>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="adduser-link" data-bs-toggle="modal" data-bs-target="#addUser">
                  <span class="item-icon" id="adduser-icon">
                    <fa icon="user-plus" />
                  </span>
                  <span class="item-title">
                    Add User
                  </span>
              </li>
              <li>
                <a class="dropdown-item " href="#" >
                  <span class="item-icon" id="signout-icon">
                    <fa icon="sign-out-alt" />
                  </span>
                  <span class="item-title" @click="logOut">
                    Sign Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section-container">
      <div id="greetings-container">
        <span id="greeting" class="hero-text-lg">Good {{ setGreeting }},</span>
        <span id="admin-name" class="hero-text-lg">{{ user.username }}</span>
        <p class="sub-text">Here is what's happening at Clarke farm today.</p>
      </div>
    </div>
    <add-user id="addUser"/>
  </div>
</template>

<script>
import addUser from '@/components/dashboard/addUserModal.vue';

export default {
  name: 'DashboardHeader',
  components: {
    addUser,
  },
  data() {
    return {
      hours: new Date().getHours(),
      logOutClicked: false,
      user: JSON.parse(sessionStorage.getItem('user')),
    };
  },
  created() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOutUser');
      this.$router.push('/admin');
    },

  },
  computed: {
    setGreeting() {
      if (this.hours >= 0 && this.hours < 12) {
        return 'morning';
      } if (this.hours >= 12 && this.hours < 17) {
        return 'afternoon';
      }
      return 'evening';
    },
  },
};
</script>

<style scoped>
#dashboard-header{
  margin-top: 12px;
  height:115px;
}
.section-container{
  height:50%;
}
#greetings-container{
  padding-top:10px;
  height: 100%;
}
#admin-name{
  margin-left: 10px;
}
#avatar-container{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#avatar {
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
#avatar a{
  display: block;
  width: 100%;
  height: 100%;
}
img{
  width:100%;
  height: 100%;
  object-fit: cover;
}
#signin-options{
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
#notifications {
  width:40px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
#notifications-counter{
  position:absolute;
  top:-8px;
  right:-8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  color:white;
  width:25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--dark-green);
}
#bell-icon{
  color:#04548C;
}
#user-details{
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: bold;
}
#user-name{
  font-size: 14px;
  color:rgba(44, 62, 80, 0.8)
}
#user-role{
  font-size: 12px;
  color:#a9a9a9;
}

#sign-out{
  width:40px;
  height:40px;
  margin-right: 20px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
}
#sign-out:hover{
  cursor: pointer;
}
.hero-text-lg{
  font-size: 20px;
  font-weight: bold;
  margin-bottom:12px;
}
.sub-text{
  font-weight: bold;
  color:#a9a9a9;
  font-size: 14px;
}
#dropdown-signout{
  position: absolute;
  right:25px;
  top: 48px;
  background-color:white;
  width: 160px;
  min-height:40px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
}
#dropdown-signout:hover{
  cursor: pointer;
}
.line-item{
  width:100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.item-icon{
  margin-right:10px;
}
ul{
  padding: 10px;
}
.adduser-link{
  margin-left:0px;
}
.adduser-link:hover{
  cursor: pointer;
  background-color: #f5f5f5;
}
#adduser-icon{
  color: var(--dark-green);
  margin-left: 15px;;

}
#signout-icon{
  color:#FC646C;
}
</style>
