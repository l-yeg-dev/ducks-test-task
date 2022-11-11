<template>
  <h1 class="text-center heading">Top users</h1>

  <div class="loader-container" v-if="isLoading">Loading ...</div>
  <div class="users-container" v-else-if="usersArray.length">
    <UserBlock :user="user" :key="user.id" v-for="user of usersArray" />
  </div>
  <div class="text-center" v-else>Users not found</div>
</template>

<script lang="ts">
import { mapGetters, useStore } from "vuex";
import { defineComponent } from "vue";
import type { IUser } from "@/store/storeTypes";
import UserBlock from "@/components/UserList/UserBlock.vue";

export default defineComponent({
  components: { UserBlock },
  setup() {
    const { dispatch } = useStore();
    dispatch("fetchUsers", { perPage: 8, since: 0 });
  },
  computed: {
    ...mapGetters(["users", "isLoading", "searchResults"]),
    usersArray(): IUser[] {
      return this.searchResults ? this.searchResults : this.users;
    },
  },
});
</script>

<style>
.heading {
  margin: 60px 0;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
}
.text-center {
  text-align: center;
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.users-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 50px;
  row-gap: 50px;
}

@media (max-width: 1024px) {
  .users-container {
    grid-template-columns: auto auto auto;
  }
}

@media (max-width: 825px) {
  .users-container {
    grid-template-columns: auto auto;
  }
}

@media (max-width: 545px) {
  .users-container {
    grid-template-columns: auto;
  }
}
</style>
