<template>
  <div class="container">
    <div class="error-tip">
      <img
        :src="require('@/assets/imgs/nodata.png')"
        alt="无数据"
        class="img"
      />
      <p class="error-message"><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorTip',
};
</script>

<style lang="scss" scoped>
@import '~css/variables.scss';
@import '~css/mixins.scss';
.error-tip {
  @include vh-center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .img {
    width: 6rem;
    margin-bottom: 1rem;
    .error-message {
      font-size: 2rem;
      color: #777;
    }
  }
}
</style>
