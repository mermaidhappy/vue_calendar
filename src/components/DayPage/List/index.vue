<template>
  <div class="list">
    <ListItem
      v-for="(item, index) of labelList"
      :key="index"
      :label="item.label"
      :content="dayData[item.title]"
    />
  </div>
</template>

<script>
import ListItem from './Item.vue';
import { labelList } from '@/assets/data/day';

export default {
  name: 'DayList',
  components: {
    ListItem,
  },
  props: {
    dayData: Object,
  },
  data() {
    return {
      labelList: labelList,
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
</style>
