<template>
  <div class="search-box">
    <input
      v-model="searchData"
      @input="handleSearch"
      type="search"
      class="search-input"
      required
    />
    <img
      class="search-sign"
      src="@/assets/svgs/searchIcon.svg"
      alt="search icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { InputEventExtended } from "@/store/storeTypes";
import store from "@/store";

export default defineComponent({
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    handleSearch: (event: InputEventExtended) => {
      store.dispatch("searchUsers", event.target.value);
    },
  },
});
</script>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
}
.search-input {
  width: 230px;
  height: 32px;
  border-radius: 12px;
  padding-left: 2rem;
  padding-right: 1rem;
  outline: none;
  border: none;
}
.search-sign {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 10px;
  top: calc(50% - 8px); /* 8px is the half height of the search icon*/
}

@media (max-width: 825px) {
  .search-input {
    border: 2px solid #181818;
  }
}
</style>
