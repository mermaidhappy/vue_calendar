<template>
  <div class="item">
    <div class="card">
      <div class="img-wrapper">
        <img
          :src="require(`@/assets/imgs/${holidayData.name}.jpg`)"
          :alt="holidayData.name"
        />
        <div class="mask">
          <h2 class="title">{{ holidayData.name }}</h2>
          <h3 class="sub-title">{{ holidayData.festival }}</h3>
        </div>
      </div>
      <div class="detail">
        <p class="description">假期描述：{{ holidayData.desc }}</p>
        <p class="suggestion" v-if="holidayData.rest">{{ holidayData.rest }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HolidayItem',
  props: {
    holidayData: Object,
  },
};
</script>

<style lang="scss" scoped>
@import '~css/variables.scss';
@import '~css/mixins.scss';
.item {
  margin: 2rem 2rem 0;

  .card {
    border-radius: 9px;
    box-shadow: 0 0.6rem 2rem rgb(0, 0, 0, 0.3);
    .img-wrapper {
      position: relative;
      width: 100%;
      height: 20rem;
      img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
      }
      .mask {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        @include vh-center;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.3);
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        .title {
          font-size: 5.2rem;
          color: $opponentColor;
          font-weight: 600;
        }
        .sub-title {
          font-size: 2.4rem;
          color: #fff;
          margin-top: 2rem;
        }
      }
    }
    .detail {
      padding: 1.2rem;
      font-size: 1.4rem;
      line-height: 2rem;
      .suggestion {
        margin-top: 1rem;
      }
    }
  }
}
</style>
