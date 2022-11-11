<template>
  <div class="user-block">
    <div
      class="user-avatar"
      :style="{ backgroundImage: 'url(' + user.avatar_url + ')' }"
    ></div>
    <div class="user-name">
      <router-link :to="`/${user.login}`">{{ user.login }}</router-link>
    </div>
    <div class="user-git-link">
      <a :href="user.html_url" target="_blank">
        <img src="@/assets/svgs/link-sign.svg" alt="" /> github
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.user-avatar {
  background-position: center center;
  border-radius: 50%;
  background-size: cover;
  width: 140px;
  height: 140px;
}
.user-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-name {
  color: #000000;
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
}
.user-git-link {
  display: flex;
  align-items: center;
  color: #54a3ff;
}
</style>
