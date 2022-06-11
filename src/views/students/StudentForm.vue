<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { Genders } from "@/enums/Genders";
import DateInput from "@/components/DateInput.vue";
import { Student } from "@/models/entities/student";
import { studentForm } from "./mapContent";
import GendersOption from "@/components/gendersOption/GendersOption.vue";
import { States } from "@/enums/States";
import StatesOption from "@/components/statesOption/StatesOption.vue";

const MAX_STUDENTS_AGE = 18;
const today = new Date();
const currentMonth = ("0" + (today.getMonth() + 1)).slice(-2);

const name = ref<string>();
const surname = ref<string>();
const id = ref<number>();
const address1 = ref<string | null>(null);
const address2 = ref<string | null>(null);
const phoneNumber = ref<string | null>(null);
const email = ref<string | null>(null);
const city = ref<string | null>(null);
const state = ref<States | null>(null);
const birthDate = ref<Date | null>(null);
const gender = ref<Genders | null>(null);

const emit = defineEmits<{
  (e: "submit", student: Student): void;
}>();

const handleSubmit = () => {
  if (!name.value) {
    throw Error("Name is a required field");
  }
  if (!surname.value) {
    throw Error("Surname is a required field");
  }
  if (!id.value) {
    throw Error("Id is a required field");
  }

  emit("submit", {
    name: name.value,
    surname: surname.value,
    id: id.value,
    address1: address1.value,
    address2: address2.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    city: city.value,
    state: state.value,
    birthDate: birthDate.value,
    gender: gender.value,
    division: null,
    grade: null,
  });
};
</script>

<template>
  <div class="q-pa-md">
    <q-form @submit="handleSubmit" class="q-gutter-md">
      <q-input
        filled
        type="number"
        lazy-rules
        hide-bottom-space
        v-model="id"
        :label="`${studentForm.id.label} *`"
        :rules="[
          (val: number) => (!!val) || studentForm.id.missingText,
          (val: number) => (val && val > 0) || studentForm.id.invalidText,
        ]"
      />
      <div class="row">
        <q-input
          filled
          lazy-rules
          hide-bottom-space
          class="col"
          v-model="name"
          :label="`${studentForm.name.label} *`"
          :rules="[
            (val: string) => (val && val.length > 0) || studentForm.name.missingText,
          ]"
        />
        <q-input
          filled
          lazy-rules
          hide-bottom-space
          class="col q-ml-sm"
          v-model="surname"
          :label="`${studentForm.surname.label} *`"
          :rules="[
            (val: string) => (val && val.length > 0) || studentForm.surname.missingText,
          ]"
        />
      </div>
      <genders-option clearable v-model="gender" />
      <date-input
        clearable
        hide-bottom-space
        v-model="birthDate"
        :default-year-month="`${
          today.getFullYear() - MAX_STUDENTS_AGE
        }/${currentMonth}`"
        :label="studentForm.birthDate.label"
        :rules="[
          (val: string) => (new Date(val) <= today) || studentForm.birthDate.greaterThanTodayText,
        ]"
      />
      <div class="row">
        <q-input
          filled
          hide-bottom-space
          v-model="address1"
          class="col-9"
          :label="studentForm.address1.label"
        />
        <q-input
          filled
          hide-bottom-space
          v-model="address2"
          class="col q-ml-sm"
          :label="studentForm.address2.label"
        />
      </div>
      <div class="row">
        <states-option clearable v-model="state" class="col" />
        <q-input
          filled
          hide-bottom-space
          v-model="city"
          class="col q-ml-sm"
          :label="studentForm.city.label"
        />
      </div>
      <q-input
        filled
        mask="(###) ###-####"
        lazy-rules
        hide-bottom-space
        v-model="phoneNumber"
        :label="studentForm.phoneNumber.label"
      >
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>
      <q-input
        filled
        type="email"
        lazy-rules
        hide-bottom-space
        v-model="email"
        :label="studentForm.email.label"
        :rules="email ? ['email'] : undefined"
      >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
      <q-btn :label="studentForm.submitButton" type="submit" color="primary" />
    </q-form>
  </div>
</template>

<style lang="scss">
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
