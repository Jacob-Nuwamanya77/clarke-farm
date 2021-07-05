<template>
    <div>
      <NavBar/>
      <HeroTraining />
      <TrainingTopics />
      <OutgrowerScheme />
      <TrainingRegistration />
      <Footer/>
    </div>
</template>

<script>
import NavBar from '@/components/shared/MainNav.vue';
import HeroTraining from '@/components/trainings/HeroTraining.vue';
import TrainingTopics from '@/components/trainings/TrainingAreas.vue';
import OutgrowerScheme from '@/components/trainings/Outgrowers.vue';
import TrainingRegistration from '@/components/trainings/TrainingRegistration.vue';
import Footer from '@/components/shared/MainFooter.vue';

export default {
  name: 'TrainingPrograms',
  components: {
    NavBar,
    HeroTraining,
    TrainingTopics,
    OutgrowerScheme,
    TrainingRegistration,
    Footer,
  },
};
</script>
