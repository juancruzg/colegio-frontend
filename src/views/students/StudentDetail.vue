<script setup lang="ts">
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import {
  doc,
  DocumentReference,
  getFirestore,
  setDoc,
  Timestamp,
} from "firebase/firestore";

import { Student } from "@/models/entities/student";
import StudentForm from "./StudentForm.vue";
import { messages } from "./mapContent";

const $q = useQuasar();
const router = useRouter();

const handleSubmit = (student: Student) => {
  const firestore = getFirestore();

  const documentRef = doc(
    firestore,
    "students",
    student.id.toString()
  ) as DocumentReference<Student>;

  setDoc<Student>(documentRef, {
    ...student,
    birthDate: student.birthDate ? Timestamp.fromDate(student.birthDate) : null,
  });
  $q.notify({
    message: messages.success,
    color: "positive",
  });
  router.push("/administration/students");
};
</script>

<template>
  <student-form @submit="handleSubmit" />
</template>
