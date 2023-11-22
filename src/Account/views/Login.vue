<template>
  <div>
    <LoginForm @loginUser="loginUser" />
  </div>
</template>

<script setup lang="ts">
import { AccountDto } from "../account.service";
import { useAccountStore } from "../account.store";
import LoginForm from "../components/LoginForm.vue";

const accountStore = useAccountStore();

async function loginUser(userData: AccountDto): Promise<void> {
  await accountStore.login(userData);
  // ! TODO:redirect to /home
}
</script>
