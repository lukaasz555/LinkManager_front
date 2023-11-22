import { useAppStore } from "@/Global/store/app";
import { TranslateResult } from "vue-i18n";

export async function accountMutation<T extends object>(
  handler: Function,
  dto: T,
  successMessage: TranslateResult
): Promise<void> {
  const appStore = useAppStore();
  appStore.setLoading();

  try {
    await handler(dto);
    appStore.setSuccess(true, successMessage);
    appStore.setError(false);
  } catch (err: any) {
    appStore.setError(true, err.errorMessage);
  } finally {
    appStore.setLoading();
  }
}
