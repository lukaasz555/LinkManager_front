<template>
  <div class="d-flex flex-column align-center">
    <v-form ref="loginForm" class="d-flex flex-column" style="width: 100%">
      <Input
        v-model="loginData.email"
        :label="$t('E-mail')"
        :rules="emailRules"
        class="mb-2"
      />
      <Input
        v-model="loginData.password"
        :label="$t('Password')"
        :type="'password'"
        class="mb-2"
        :rules="passwordLoginRules"
      />
      <div class="mt-2" style="width: 150px; align-self: center">
        <Button :button-text="$t('Login')" @click="saveForm" />
      </div>
    </v-form>
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
import { emailRules, passwordLoginRules } from "../helpers/validationRules";
import { AccountDto } from "../account.service";

const emit = defineEmits<{
  (e: "loginUser", data: AccountDto): void;
}>();

const loginData = ref(new LoginData());
const loginForm = ref<HTMLFormElement | null>(null);

async function saveForm(): Promise<void> {
  if (loginForm.value) {
    const { valid } = await loginForm.value.validate();
    if (valid) {
      emit("loginUser", loginData.value);
    } else {
      // console.log("throw err or sth");
    }
  }
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
