<script setup lang="ts"></script>

<template>
  <div v-if="!isLoading">
    <div class="profile-container">
      <router-link class="back-button" to="/"
        ><img src="@/assets/svgs/back.png"
      /></router-link>
      <div
        class="user-profile-pic"
        :style="{ backgroundImage: 'url(' + currentUser.avatar_url + ')' }"
      ></div>
      <div class="profile-username">
        {{ currentUser.login }}
      </div>
      <table class="user-data">
        <tr v-for="repo of currentUserRepos" :key="repo.id">
          <td>
            <a class="repo-link" target="_blank" :href="repo.clone_url">{{
              repo.name
            }}</a>
          </td>
          <td>
            <img class="px-2" src="@/assets/svgs/viewer.svg" />{{
              repo.watchers_count
            }}
          </td>
          <td class="item-block">
            <img class="px-2" src="@/assets/svgs/star.svg" />{{
              repo.stargazers_count
            }}
          </td>
        </tr>
      </table>
    </div>
  </div>

  <div class="loader-container" v-else>Loading ...</div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import store from "@/store";

export default defineComponent({
  created() {
    const username = this.$route.params.userName;
    store.dispatch("fetchUserData", username);
    store.dispatch("fetchUserRepos", username);
  },
  computed: {
    ...mapGetters(["isLoading", "currentUser", "currentUserRepos"]),
  },
});
</script>
<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back-button {
  position: absolute;
  left: 3rem;
  top: 5rem;
}
.user-profile-pic {
  margin-top: 5rem;
  background-position: center center;
  border-radius: 50%;
  background-size: cover;
  width: 300px;
  height: 300px;
}
.profile-username {
  margin-top: 3rem;
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
}
.user-data {
  width: 80%;
  margin: 2rem 10%;
}
.item-block {
  display: flex;
  align-items: center;
}
.repo-link:hover {
  text-decoration: underline;
}
.repo-link {
  color: #54a3ff;
}
.px-2 {
  padding: 0 2rem;
}
</style>
