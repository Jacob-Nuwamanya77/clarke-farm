<template>
  <div class="container">
    <div class="container-left">
      <AdminSideNavigation />
    </div>
    <div class="container-right">
      <AdminHeadingHome heading="Home"/>
       <HomeContent/>
        <IncomingGuests/>
       <div class="pagination">
        <Pagination />
      </div>
      </div>
    </div>
</template>

<script>
import AdminSideNavigation from '@/components/AdminSideNavigation.vue';
import AdminHeadingHome from '@/components/dashboard/AdminHeadingHome.vue';
import HomeContent from '@/components/dashboard/HomeContent.vue';
import IncomingGuests from '@/components/dashboard/HomeTableIncoming.vue';
import Pagination from '@/components/pagination.vue';

export default {
  name: 'Admin',
  data() {
    return {
    };
  },

  components: {
    AdminSideNavigation,
    AdminHeadingHome,
    HomeContent,
    IncomingGuests,
    Pagination,
  },
};
</script>
