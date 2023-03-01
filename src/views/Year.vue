<template>
  <div class="container">
    <YearHolidayList />
  </div>
</template>
<script>
import YearHolidayList from '@/components/HolidayList/Year';
import getData from '@/models';
import { getTodayDate } from '@/libs/utils';
export default {
  name: 'YearView',
  components: {
    YearHolidayList,
  },
  mounted() {
    this.getYearData();
  },
  methods: {
    async getYearData() {
      await getData('year', getTodayDate('year'));
    },
  },
};
</script>
<style lang="scss" scoped></style>
