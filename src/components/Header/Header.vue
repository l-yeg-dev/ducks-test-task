<script setup lang="ts">
import { RouterLink } from "vue-router";
import Search from "@/components/Header/Search.vue";
import Logo from "@/components/Header/Logo.vue";
</script>

<template>
  <header>
    <div class="header-wrapper">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <Search v-if="!$route.params.userName" />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #24292f;
  padding: 0 3rem;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  max-height: 80px;
}

@media (max-width: 825px) {
  .header-wrapper {
    flex-direction: column;
  }
}
</style>
