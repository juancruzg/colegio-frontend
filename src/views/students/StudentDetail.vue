<script setup lang="ts">
import { Student } from "./student";
import StudentForm from "./StudentForm.vue";

const handleSubmit = (student: Student) => {
  console.log(student);
};
</script>

<template>
  <student-form @submit="handleSubmit" />
</template>
