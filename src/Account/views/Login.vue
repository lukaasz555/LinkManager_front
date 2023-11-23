<template>
  <div>
    <LoginForm @loginUser="loginUser" />
  </div>
</template>

<script setup lang="ts">
import { MainRoutesNames } from "@/Main/enums/MainRoutesNames.enum";
import { AccountDto } from "../account.service";
import { useAccountStore } from "../account.store";
import LoginForm from "../components/LoginForm.vue";
import router from "@/Global/router";

const accountStore = useAccountStore();

async function loginUser(userData: AccountDto): Promise<void> {
  await accountStore.login(userData);
  if (accountStore.isLoggedIn) {
    router.push({ name: MainRoutesNames.Links });
  }
}
</script>
