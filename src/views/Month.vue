<template>
  <div class="container">
    <HolidayList />
  </div>
</template>
<script>
import getData from '@/models';
import { getTodayDate } from '@/libs/utils';
import HolidayList from '@/components/HolidayList/Month/index.vue';
export default {
  name: 'MonthView',
  components: {
    HolidayList,
  },
  mounted() {
    this.getMonthData();
  },
  methods: {
    async getMonthData() {
      await getData('month', getTodayDate('month'));
    },
  },
};
</script>
<style lang="scss" scoped></style>
