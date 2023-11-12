import { defineStore } from "pinia";

type BaseUserData = {
  id: number;
  email: string;
};
interface AccountStore {
  isLoggedIn: boolean;
  token?: string;
  baseUserData?: BaseUserData;
}

const initState = (): AccountStore => ({
  isLoggedIn: false,
  token: undefined,
  baseUserData: undefined,
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
