import { createRouter, createWebHistory } from "vue-router";
import UserList from "../views/UserList.vue";
import UserProfile from "../views/UserProfile.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "userList",
      component: UserList,
    },
    {
      path: "/:userName",
      name: "userProfile",
      component: UserProfile,
    },
    {
      path: "/to-git-repo",
      name: "gitRepo",
      component: { template: "<div>Redirect</div>" },
      beforeEnter() {
        window.location.href = "https://google.com/contact";
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
  strict: true,
});

export default router;
