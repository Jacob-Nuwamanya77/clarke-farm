<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
    </div>
    <div class="container-right">
      <div class="top-row">
        <AdminHeadingBooking heading='Bookings'/>
      </div>
      <div class="after-toprow">
        <BookingContent/>
      </div>

    </div>
  </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingBooking from '@/components/dashboard/AdminHeadingBooking.vue';
import BookingContent from '@/components/dashboard/BookingContent.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    AdminSideNavigation,
    AdminHeadingBooking,
    BookingContent,

  },
};
</script>

<style scoped>

.container-left {
  width:15%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  color: white;
  margin-left: 20px;
}
.container-right {
  margin-left:80px;
  width: 85%;
  margin-top:0px;
  overflow-x: hidden;
}

</style>
