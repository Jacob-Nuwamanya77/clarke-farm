<template>
  <div>
    <HeroLandingPage/>
    <AboutSection/>
     <OurFounder/>
  </div>
</template>

<script>
import HeroLandingPage from '@/components/HeroLanding.vue';
import AboutSection from '@/components/AboutSection.vue';
import OurFounder from '@/components/OurFounder.vue';

export default {
  name: 'HomePage',
  components: {
    HeroLandingPage,
    AboutSection,
    OurFounder,
  },
};
</script>
