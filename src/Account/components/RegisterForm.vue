<template>
  <div class="d-flex flex-column align-center">
    <v-form ref="registerForm" class="d-flex flex-column" style="width: 100%">
      <Input
        v-model="registerData.email"
        :label="$t('E-mail')"
        :rules="emailRules"
        class="mb-2"
      />
      <Input
        v-model="registerData.password"
        :label="$t('Password')"
        :type="'password'"
        :rules="passwordRegisterRules"
        class="mb-2"
      />
      <Input
        v-model="confirmedPassword"
        :label="$t('Confirm password')"
        :type="'password'"
        :rules="confirmedPasswordRules"
        class="mb-2"
      />
    </v-form>
    <div class="mt-1 mb-3" style="width: 150px; align-self: center">
      <Button :button-text="$t('Sign up')" @click="saveForm" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RegisterData } from "../vm/RegisterData";
import Input from "@/Global/components/Input.vue";
import Button from "@/Global/components/Button.vue";
import i18n from "@/plugins/i18n";
import { emailRules, passwordRegisterRules } from "../helpers/validationRules";
import { AccountDto } from "../account.service";

const emit = defineEmits<{
  (e: "createUser", data: AccountDto): void;
}>();

const registerData = ref(new RegisterData());
const registerForm = ref<HTMLFormElement | null>(null);
const confirmedPassword = ref("");

async function saveForm(): Promise<void> {
  if (registerForm.value) {
    const { valid } = await registerForm.value.validate();
    if (valid) {
      emit("createUser", registerData.value);
    } else {
      // console.log("throw err or sth");
    }
  }
}

const confirmedPasswordRules = [
  (v: string) => !!v || i18n.global.t("Required field"),
  (v: string) =>
    v === registerData.value.password || i18n.global.t("Different passwords"),
];
</script>
