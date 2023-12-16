import { defineStore } from "pinia";
import { TranslateResult } from "vue-i18n";

interface IAppStore {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  successMessage?: string | TranslateResult;
  errorMessage?: string | TranslateResult;
}

const initState = (): IAppStore => ({
  isLoading: false,
  isError: false,
  isSuccess: false,
  successMessage: undefined,
  errorMessage: undefined,
});

export const useAppStore = defineStore("app", {
  state: initState,
  actions: {
    setLoading(): void {
      this.isLoading = !this.isLoading;
    },
    setError(value: boolean, errorMessage?: string): void {
      this.isError = value;
      if (this.isError) this.errorMessage = errorMessage;
      else this.errorMessage = undefined;
    },
    setSuccess(value: boolean, successMessage?: string): void {
      this.isSuccess = true;
      if (this.isSuccess) this.successMessage = successMessage;
      else this.successMessage = undefined;
    },
  },
});
