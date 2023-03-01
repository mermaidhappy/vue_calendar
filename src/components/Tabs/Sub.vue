<template>
  <router-link :to="{ name: routeName }" class="tab-item">
    <i class="icon">{{ iconText }}</i>
    <p class="text">
      <slot></slot>
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'TabsSub',
  props: {
    routeName: String,
    iconText: String,
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
@import '~@/assets/css/mixins.scss';

.tab-item {
  @include vh-center;
  flex-direction: column;
  height: 100%;
  .icon {
    color: #fff;
    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    background-color: $defaultBgColor;
    @include vh-center;
    transition: all 0.3s;
  }
  .text {
    font-size: 1.2rem;
    color: $defaultBgColor;
    margin-top: 0.3rem;
    transition: all 0.3s;
  }
  &.router-link-active {
    .icon {
      color: $defaultBgColor;
      background-color: $opponentColor;
    }
    .text {
      color: $opponentColor;
    }
  }
}
</style>
