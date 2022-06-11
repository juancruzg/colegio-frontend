<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { Division } from "@/models/entities/division";
import { divisionForm } from "./mapContent";

const name = ref<string>();
const id = ref<number | null>(null);
const grades = ref<number[] | null>(null);

const emit = defineEmits<{
  (e: "submit", division: Division): void;
}>();

const handleSubmit = () => {
  if (!name.value) {
    throw Error("Name is a required field");
  }

  emit("submit", {
    id: id.value,
    name: name.value,
    grades: grades.value,
  });
};
</script>

<template>
  <div class="q-pa-md">
    <q-form @submit="handleSubmit" class="q-gutter-md">
      <q-input
        filled
        lazy-rules
        hide-bottom-space
        v-model="name"
        :label="`${divisionForm.name.label} *`"
        :rules="[
          (val: string) => (val && val.length > 0) || divisionForm.name.missingText,
        ]"
      />
      <q-btn :label="divisionForm.submitButton" type="submit" color="primary" />
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
