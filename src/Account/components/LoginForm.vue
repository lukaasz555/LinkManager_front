<template>
  <div class="d-flex flex-column">
    <v-text-field
      v-model="loginData.login"
      variant="outlined"
      label="Login"
      color="primary"
    ></v-text-field>
    <v-text-field
      v-model="loginData.password"
      variant="outlined"
      label="Password"
    ></v-text-field>
    <Button :button-text="'Login'" @click="saveForm" />
    <div class="mt-5">
      <v-btn variant="plain" @click="pushToRegister">Create new account</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LoginData } from "../vm/LoginData";
import Button from "@/Global/components/Button.vue";
import router from "@/Global/router";
import { AccountRoutesNames } from "../enums/AccountRoutesNames.enum";

const loginData = ref(new LoginData());

function saveForm(): void {
  // 1. validate
  // 2. if ok api post
  console.log(loginData.value);
}

function pushToRegister(): void {
  router.push({ name: AccountRoutesNames.Register });
}
</script>
