<script setup lang="ts">
import { Division } from "./division";
import DivisionForm from "./DivisionForm.vue";

const handleSubmit = (student: Division) => {
  console.log(student);
};
</script>

<template>
  <division-form @submit="handleSubmit" />
</template>
