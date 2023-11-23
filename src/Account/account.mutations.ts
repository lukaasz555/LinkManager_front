import { useAppStore } from "@/Global/store/app";
import { TranslateResult } from "vue-i18n";
import { AccountDto, accountLogin, accountRegister } from "./account.service";
import { useAccountStore } from "./account.store";
import router from "@/Global/router";
import { AccountRoutesNames } from "./enums/AccountRoutesNames.enum";

export async function registerMutation(
  accountDto: AccountDto,
  successMessage: TranslateResult
): Promise<void> {
  const appStore = useAppStore();
  appStore.setLoading();

  try {
    await accountRegister(accountDto);
    appStore.setSuccess(true, successMessage);
    appStore.setError(false);
    router.push({ name: AccountRoutesNames.Login });
  } catch (err: any) {
    appStore.setError(true, err.errorMessage);
  } finally {
    appStore.setLoading();
  }
}

export async function loginMutation(
  accountDto: AccountDto,
  successMessage: TranslateResult
): Promise<void> {
  const accountStore = useAccountStore();
  const appStore = useAppStore();
  appStore.setLoading();

  try {
    const token = (await accountLogin(accountDto)) as unknown as string;
    appStore.setSuccess(true, successMessage);
    appStore.setError(false);
    accountStore.setTokenAndLoggedIn(token);
  } catch (err: any) {
    appStore.setError(true, err.errorMessage);
  } finally {
    appStore.setLoading();
  }
}
