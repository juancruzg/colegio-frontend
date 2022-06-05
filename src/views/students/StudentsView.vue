<script setup lang="ts">
import { useRouter } from "vue-router";
import StudentsTable from "./StudentsTable.vue";
import { Student } from "./student";

const router = useRouter();
const students: Student[] = [
  {
    id: 37544355,
    birthDate: "1994-03-30",
    name: "Juan",
    surname: "Grasso",
    grade: 3,
    division: "A",
  },
  {
    id: 44512322,
    birthDate: "2001-06-13",
    name: "Nicolás",
    surname: "Grasso",
    grade: 1,
    division: "A",
  },
  {
    id: 48123232,
    birthDate: "2003-12-13",
    name: "Milagros",
    surname: "Grasso",
    grade: 2,
    division: "C",
  },
  {
    id: 49123232,
    birthDate: "2005-08-08",
    name: "Federica",
    surname: "Grasso",
    grade: 5,
    division: "B",
  },
];

const getStudents = () => students;

const handleRowClick = (_: Event, student: Student) => {
  router.push(`students/${student.id}`);
};
</script>

<template>
  <students-table :students="getStudents()" @row-click="handleRowClick" />
</template>
