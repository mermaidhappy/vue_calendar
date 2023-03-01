<template>
  <div class="container">
    <DayCard :day-data="dayData" />
    <DayList :day-data="dayData" />
  </div>
</template>
<script>
import getData from '@/models';
import { getTodayDate } from '@/libs/utils';
import DayCard from '@/components/DayPage/Card.vue';
import DayList from '@/components/DayPage/List';
import { mapState } from 'vuex';
export default {
  name: 'DayView',
  components: {
    DayCard,
    DayList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['dayData']),
  },
  mounted() {
    this.getDayData();
  },
  methods: {
    async getDayData() {
      await getData('day', getTodayDate('day'));
    },
  },
};
</script>
<style lang="scss" scoped></style>
