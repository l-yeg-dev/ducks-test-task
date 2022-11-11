<script setup lang="ts">
import { RouterView } from "vue-router";
</script>
<template>
  <div class="app-content">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    ...mapGetters(["isLoading"]),
  },
});
</script>
<style scoped>
.app-content {
  height: calc(100vh - 200px);
  overflow: auto;
}
</style>
