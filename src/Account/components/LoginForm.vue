<template>
  <div class="d-flex flex-column align-center">
    <div class="d-flex flex-column" style="width: 100%">
      <Input v-model="loginData.email" :label="$t('E-mail')" />
      <Input
        v-model="loginData.password"
        :label="$t('Password')"
        :type="'password'"
      />
    </div>
    <div class="mt-2" style="width: 150px; align-self: center">
      <Button :button-text="$t('Login')" @click="saveForm" />
    </div>
    <div class="d-flex justify-center" style="width: 150px">
      <v-btn
        class="register-button"
        :ripple="false"
        variant="plain"
        @click="pushToRegister"
        >{{ $t("Create new account") }}</v-btn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LoginData } from "../vm/LoginData";
import Button from "@/Global/components/Button.vue";
import router from "@/Global/router";
import { AccountRoutesNames } from "../enums/AccountRoutesNames.enum";
import Input from "@/Global/components/Input.vue";

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

<style scoped lang="scss">
@import "../../styles/variables.scss";
.v-btn.register-button {
  text-transform: none !important;
  letter-spacing: 0px;
}
</style>
