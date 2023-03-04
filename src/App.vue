<template>
  <TheHeader>
    {{ headerTitle }}
  </TheHeader>
  <div class="scroll-wrapper" ref="scrollWrapper">
    <div class="scroll-content">
      <SearchInput />
      <ErrorTip v-if="errorCode != 0">
        {{ errorMessage }}
      </ErrorTip>
      <RouterView v-slot="{ Component }" v-else>
        <KeepAlive>
          <component :is="Component"></component>
        </KeepAlive>
      </RouterView>
    </div>
  </div>
  <Tabs />
</template>
<script>
import BetterScroll from 'better-scroll';
import TheHeader from '@/components/Header';
import SearchInput from '@/components/SearchInput';
import Tabs from '@/components/Tabs';
import ErrorTip from '@/components/ErrorTip';
import { mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    TheHeader,
    SearchInput,
    Tabs,
    ErrorTip,
  },
  computed: {
    ...mapState(['errorCode']),
    ...mapGetters(['headerTitle', 'errorMessage']),
    curRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapMutations(['setCurRouteName', 'setErrorCode']),
  },
  watch: {
    curRouteName(newValue) {
      this.setCurRouteName(newValue);
      this.setErrorCode(0);
    },
  },
  mounted() {
    this.setCurRouteName(this.curRouteName);
    this.scroll = new BetterScroll(this.$refs.scrollWrapper);
  },
};
</script>
<style lang="scss" scoped></style>
