<template>
  <div class="holiday-list">
    <HolidayItem
      v-for="(item, index) of holidayArray"
      :key="index"
      :holiday-data="item"
    />
  </div>
</template>

<script>
import HolidayItem from './Item.vue';
import { mapState } from 'vuex';
export default {
  name: 'HolidayList',
  components: {
    HolidayItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({ holidayArray: 'monthData' }),
  },
};
</script>

<style lang="scss" scoped>
.holiday-list {
  margin-bottom: 2rem;
}
</style>
