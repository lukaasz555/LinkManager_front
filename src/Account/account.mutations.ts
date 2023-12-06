import { useAppStore } from "@/Global/store/app";
import { TranslateResult } from "vue-i18n";
import { AccountDto, accountLogin, accountRegister } from "./account.service";
import { useAccountStore } from "./account.store";
import router from "@/Global/router";
import { AccountRoutesNames } from "./enums/AccountRoutesNames.enum";
import { getIdAndEmailFromToken } from "./helpers/getIdAndEmailFromToken";

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
    const res: { jwtToken: string; refreshToken: string } = (await accountLogin(
      accountDto
    )) as unknown as { jwtToken: string; refreshToken: string };
    const { id, email } = getIdAndEmailFromToken(res.jwtToken);
    appStore.setSuccess(true, successMessage);
    appStore.setError(false);
    accountStore.setTokenAndLoggedIn(res.jwtToken, res.refreshToken);
    accountStore.setBaseUserData(id, email);
  } catch (err: any) {
    appStore.setError(true, err.errorMessage);
  } finally {
    appStore.setLoading();
  }
}
