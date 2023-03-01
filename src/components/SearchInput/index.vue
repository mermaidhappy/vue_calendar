<template>
  <div class="search-input">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="inputValue"
      @input="inputHandler"
      ref="input"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import getData from '@/models';
import { formatDate } from '@/libs/utils';
export default {
  name: 'SearchInput',
  data() {
    return {
      inputValue: '',
    };
  },
  computed: {
    ...mapGetters(['placeholder', 'maxlength']),
    curRoute() {
      return this.$route.name;
    },
  },
  methods: {
    async inputHandler(e) {
      this.inputValue = e.target.value;
      //对输入日期进行分析处理，将field和date传入getData获取数据
      if (this.inputValue.length < this.maxlength) return;
      const formattedDate = formatDate(this.inputValue);
      await getData(this.curRoute, formattedDate);
    },
  },
  watch: {
    curRoute() {
      this.inputValue = '';
      this.$refs.input.blur();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~css/variables.scss';
@import '~css/mixins.scss';
.search-input {
  height: $searchBarHeight;
  position: absolute;
  top: $headerHeight;
  width: 100%;
  left: 0;
  border-bottom: 1px solid $defaultBgColor;
  padding: 0 1.2rem;
  @include vh-center;
  z-index: 1;
  .input {
    font-size: 1.6rem;
    width: 100%;
    padding: 0 0.5rem;
    height: 80%;
    border: 1px solid #ccc;
    &:focus {
      border: 1px solid $opponentColor;
    }
    &::placeholder {
      font-size: 1.6rem;
    }
  }
}
</style>
