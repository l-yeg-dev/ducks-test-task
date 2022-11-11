import axios from "axios";
import type { IUsersPayload } from "@/services/apiTypes";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export function getUsers({ perPage, since }: IUsersPayload) {
  return api.get("/users", { params: { per_page: perPage, since } });
}

export function getUserData(username: string) {
  return api.get(`/users/${username}`);
}

export function getUserRepos(username: string) {
  return api.get(`/users/${username}/repos`);
}
