<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import {
  collection,
  getDocs,
  getFirestore,
  Query,
  query,
} from "firebase/firestore";
import { Student } from "@/models/entities/student";
import StudentsTable from "./StudentsTable.vue";

const router = useRouter();
const students = ref<Student[]>([]);
const isLoading = ref(true);

onMounted(async () => {
  const getStudents = async (): Promise<Student[]> => {
    const firestore = getFirestore();
    const studentsRef = collection(firestore, "students") as Query<Student>;
    const studentsQuery = query<Student>(studentsRef);
    const studentsQuerySnapshot = await getDocs(studentsQuery);

    const students = studentsQuerySnapshot.docs.map((student) =>
      student.data()
    );

    return students;
  };

  students.value = await getStudents();
  isLoading.value = false;
});

const handleRowClick = (_: Event, student: Student) => {
  router.push(`students/${student.id}`);
};
</script>

<template>
  <students-table
    :students="students"
    @row-click="handleRowClick"
    :loading="isLoading"
  />
</template>
