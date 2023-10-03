<template>
  <div>
    <h2>Project Details</h2>
    <p>{{ projectDescription }}</p>
    <!-- Другие компоненты и элементы интерфейса -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getProjectDescription']),
  },
  // Другие опции компонента
};
</script>