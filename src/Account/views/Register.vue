<template>
  <RegisterForm @createUser="createUser" />
</template>

<script setup lang="ts">
import RegisterForm from "../components/RegisterForm.vue";
import { AccountDto } from "../account.service";
import { useAccountStore } from "../account.store";

const accountStore = useAccountStore();

async function createUser(userData: AccountDto): Promise<void> {
  return accountStore.register(userData);
}
</script>
