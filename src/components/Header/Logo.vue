<script lang="ts">
export default {
  props: {
    showText: {
      default: true,
      type: Boolean,
      required: false,
    },
  },
};
</script>
<template>
  <div class="logo">
    <img alt="Git logo" src="@/assets/svgs/logo.svg" class="logo-img" />
    <span v-if="showText" class="logo-text">Github Userboard</span>
  </div>
</template>

<style scoped>
.logo {
  display: inline-flex;
  align-items: center;
}
.logo-img {
  width: 40px;
  padding: 20px 0;
}
.logo-text {
  margin-left: 1rem;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
