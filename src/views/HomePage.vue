<template>
  <div>
    <HeroLandingPage/>
    <AboutSection/>
    <OurFounder/>
    <OurTeam/>
  </div>
</template>

<script>
// import NavBar from '@/components/MainNav.vue';
import HeroLandingPage from '@/components/HeroLanding.vue';
import AboutSection from '@/components/AboutSection.vue';
import OurFounder from '@/components/OurFounder.vue';
import OurTeam from '@/components/OurTeam.vue';
// import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'HomePage',
  components: {
    HeroLandingPage,
    AboutSection,
    OurFounder,
    OurTeam,
  },
};
</script>
