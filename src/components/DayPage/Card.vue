<template>
  <div class="card-wrapper">
    <div class="img-wrapper">
      <img
        :src="require('@/assets/imgs/sunrise.jpg')"
        alt="beautiful scenery"
      />
      <div class="mask">
        <p class="weekday">{{ dayData.weekday }}</p>
        <div class="date-info">
          <h1 class="title">{{ dayData.lunar }}</h1>
          <h2 class="sub-title">{{ dayData.date }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayCard',
  props: {
    dayData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '~css/variables.scss';
@import '~css/mixins.scss';
.card-wrapper {
  padding: 1rem 2rem;
  .img-wrapper {
    width: 100%;
    height: 20rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 9px;
    }
  }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-radius: 9px;
    .weekday {
      height: 3.6rem;
      background-color: rgba(0, 0, 0, 0.208);
      border-top-left-radius: 9px;
      border-top-right-radius: 9px;
      padding-left: 2rem;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 1.4rem;
    }
    .date-info {
      position: absolute;
      width: 100%;
      left: 0;
      top: 50%;

      transform: translateY(-50%);
      .title {
        font-size: 5.2rem;
        font-weight: 600;
        color: $opponentColor;
        @include vh-center;
        margin-bottom: 3rem;
      }
      .sub-title {
        font-size: 2.8rem;

        color: #fff;
        @include vh-center;
      }
    }
  }
}
</style>
