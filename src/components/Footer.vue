<template>
  <div class="footer-wrapper">
    <router-link to="/to-git-repo">
      <Logo :show-text="false" />
    </router-link>
    <div class="footer-text">© All rights reserved, 2022</div>
  </div>
</template>

<style scoped>
.footer-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  height: 120px;
  text-align: center;
  background-color: #24292f;
}
.footer-text {
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #ffffff;
}
</style>
<script>
import Logo from "@/components/Header/Logo.vue";
export default {
  components: { Logo },
};
</script>
