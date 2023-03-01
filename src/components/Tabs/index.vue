<template>
  <div class="tab-list">
    <TabsSub
      v-for="item of tabsData"
      :key="item.id"
      :route-name="item.routeName"
      :icon-text="item.iconText"
      >{{ item.tabText }}</TabsSub
    >
  </div>
</template>

<script>
import TabsSub from './Sub.vue';
import tabsData from '@/assets/data/tabs.js';
export default {
  name: 'Tabs',

  components: {
    TabsSub,
  },
  data() {
    return {
      tabsData,
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
@import '~@/assets/css/mixins.scss';
.tab-list {
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  height: $headerHeight;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 4.4rem;
  border-top: 1px solid #ccc;
  background-color: #fff;
}
</style>
