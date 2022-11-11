export interface IUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;
}

export interface IUserRepo {
  clone_url: string;
  name: string;
  watchers_count: number;
  stargazers_count: number;
}

export interface IState {
  users: IUser[];
  currentUser: IUser | null;
  isLoading: boolean;
  errors: string[];
  searchResults: IUser[] | null;
  currentUserRepos: IUserRepo[] | null;
}

export interface EventTargetExtended extends EventTarget {
  value?: string;
}
export interface InputEventExtended extends InputEventInit {
  target: EventTargetExtended;
}
