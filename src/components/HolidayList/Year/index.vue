<template>
  <div class="year-list">
    <YearHolidayCard
      v-for="(item, index) of holidayArray"
      :key="index"
      :holiday-data="item"
    />
  </div>
</template>

<script>
import YearHolidayCard from './Item.vue';

export default {
  name: 'YearHolidayList',
  components: {
    YearHolidayCard,
  },
  data() {
    return {};
  },
  computed: {
    holidayArray() {
      return this.$store.state.yearData;
    },
  },
};
</script>

<style lang="scss" scoped>
.year-list {
  margin-bottom: 2rem;
}
</style>
