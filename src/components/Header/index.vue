<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
@import '~@/assets/css/mixins.scss';
.header {
  font-size: 1.8rem;
  color: #fff;
  height: $headerHeight;
  width: 100%;
  background-color: $defaultBgColor;
  @include vh-center;
  position: fixed;
  z-index: 999;
  transform: translateZ(10px);
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
}
</style>
