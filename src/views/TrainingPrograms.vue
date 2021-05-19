<template>
    <div>
      <HeroTraining />
      <TrainingTopics />
      <OutgrowerScheme />
      <TrainingRegistration />
    </div>
</template>

<script>

import HeroTraining from '@/components/trainings/HeroTraining.vue';
import TrainingTopics from '@/components/trainings/TrainingAreas.vue';
import OutgrowerScheme from '@/components/trainings/Outgrowers.vue';
import TrainingRegistration from '@/components/trainings/TrainingRegistration.vue';

export default {
  name: 'TrainingPrograms',
  components: {
    HeroTraining,
    TrainingTopics,
    OutgrowerScheme,
    TrainingRegistration,
  },
};
</script>
