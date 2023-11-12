// Utilities
import { defineStore } from "pinia";

interface IAppStore {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
}

const initState = (): IAppStore => ({
  isLoading: false,
  isError: false,
  errorMessage: undefined,
});

export const useAppStore = defineStore("app", {
  state: initState,
  actions: {
    setLoading(): void {
      this.isLoading = !this.isLoading;
    },
    setError(value: boolean, errorMessage?: string): void {
      if (value) {
        this.isError = false;
        this.errorMessage = undefined;
      } else {
        this.isError = true;
        this.errorMessage = errorMessage;
      }
    },
  },
});
