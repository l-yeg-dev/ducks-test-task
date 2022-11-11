import { createStore } from "vuex";
import type { IState } from "@/store/storeTypes";
import { getUsers, getUserData, getUserRepos } from "@/services/api";
import type { IUsersPayload } from "@/services/apiTypes";

export default createStore<IState>({
  state() {
    return {
      users: [],
      isLoading: false,
      currentUser: null,
      currentUserRepos: null,
      errors: [],
      searchResults: null,
    };
  },
  mutations: {
    getAllUsersRequest(state) {
      state.isLoading = true;
    },
    getAllUsersSuccess(state, data) {
      state.users = data;
      state.isLoading = false;
    },
    getAllUsersFailure(state, errors) {
      state.errors = errors;
      state.isLoading = false;
    },
    getUserDataRequest(state) {
      state.isLoading = true;
    },
    getUserDataSuccess(state, data) {
      state.currentUser = data;
      state.isLoading = false;
    },
    getUserDataFailure(state, errors) {
      state.errors = errors;
      state.isLoading = false;
    },
    getUserReposRequest(state) {
      state.isLoading = true;
    },
    getUserReposSuccess(state, data) {
      state.currentUserRepos = data;
      state.isLoading = false;
    },
    getUserReposFailure(state, errors) {
      state.errors = errors;
      state.isLoading = false;
    },
    filterUsers(state, searchInput: string) {
      const { users } = state;
      state.searchResults = users.filter((user) => {
        return user.login.includes(searchInput);
      });
    },
  },
  actions: {
    fetchUsers({ commit }, payload: IUsersPayload) {
      commit("getAllUsersRequest");
      getUsers(payload)
        .then((response) => {
          commit("getAllUsersSuccess", response.data);
        })
        .catch((errors) => {
          commit("getAllUsersFailure", errors);
        });
    },
    fetchUserData({ commit }, username: string) {
      commit("getUserDataRequest");
      getUserData(username)
        .then((response) => {
          commit("getUserDataSuccess", response.data);
        })
        .catch((errors) => {
          commit("getUserDataFailure", errors);
        });
    },
    fetchUserRepos({ commit }, username: string) {
      commit("getUserReposRequest");
      getUserRepos(username)
        .then((response) => {
          commit("getUserReposSuccess", response.data);
        })
        .catch((errors) => {
          commit("getUserReposFailure", errors);
        });
    },
    searchUsers({ commit }, payload) {
      commit("filterUsers", payload);
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
    isLoading(state) {
      return state.isLoading;
    },
    searchResults(state) {
      return state.searchResults;
    },
    currentUser(state) {
      return state.currentUser;
    },
    currentUserRepos(state) {
      return state.currentUserRepos;
    },
  },
});
