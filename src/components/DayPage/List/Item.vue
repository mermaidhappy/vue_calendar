<template>
  <div class="item">
    <h2 class="label">{{ label }}</h2>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    label: String,
    content: String,
  },
};
</script>

<style lang="scss" scoped>
@import '~css/variables.scss';
.item {
  padding: 1.2rem 1.2rem;
  background-color: #fff;
  border-radius: 9px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  .label {
    font-size: 1.8rem;
    font-weight: 600;
    color: $opponentColor;
    margin-right: 3.6rem;
    flex-shrink: 0;
  }
  .content {
    font-size: 1.6rem;
    line-height: 1.4;
  }
}
</style>
