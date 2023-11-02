import { defineStore } from "pinia";

interface AccountStore {
  isLoggedIn: boolean;
  token?: string;
}

const initState = (): AccountStore => ({
  isLoggedIn: false,
  token: undefined,
});

export const useAccountStore = defineStore("accountStore", {
  state: initState,
  actions: {
    login(): void {
      // ...
    },
    register(): void {
      // ...
    },
    logout(): void {
      // ...
    },
    recoverPassword(): void {
      // ...
    },
  },
});
