<template>
  <div class="d-flex flex-column align-center">
    <div class="d-flex flex-column" style="width: 100%">
      <Input v-model="registerData.email" :label="$t('E-mail')" />
      <Input
        v-model="registerData.password"
        :label="$t('password')"
        :type="'password'"
      />
      <Input
        v-model="confirmedPassword"
        :label="$t('confirm password')"
        :type="'password'"
      />
    </div>
    <div class="mt-1 mb-3" style="width: 150px; align-self: center">
      <Button :button-text="$t('Sign up!')" @click="saveForm" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RegisterData } from "../vm/RegisterData";
import Input from "@/Global/components/Input.vue";
import Button from "@/Global/components/Button.vue";

const registerData = ref(new RegisterData());
const confirmedPassword = ref("");

function saveForm(): void {
  // 1. validate
  // 2. if ok api post
  console.log(registerData.value);
}
</script>
