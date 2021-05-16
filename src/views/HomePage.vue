<template>
  <div>
    <HeroLandingPage/>
    <AboutSection/>
    <OurFounder/>
    <OurTeam/>
  </div>
</template>

<script>
import HeroLandingPage from '@/components/home/HeroLanding.vue';
import AboutSection from '@/components/home/AboutSection.vue';
import OurFounder from '@/components/home/OurFounder.vue';
import OurTeam from '@/components/home/OurTeam.vue';

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
