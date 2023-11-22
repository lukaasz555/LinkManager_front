import { defineStore } from "pinia";
import { AccountDto, postAccountDto } from "./account.service";
import { accountMutation } from "./account.mutations";
import i18n from "@/plugins/i18n";

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
    async login(accountDto: AccountDto): Promise<void> {
      await accountMutation<AccountDto>(
        postAccountDto,
        accountDto,
        i18n.global.t("Login success")
      );
    },
    async register(accountDto: AccountDto) {
      await accountMutation<AccountDto>(
        postAccountDto,
        accountDto,
        i18n.global.t("Success ! New account created.")
      );
    },

    logout(): void {
      // ...
    },
    recoverPassword(): void {
      // ...
    },
  },
});
