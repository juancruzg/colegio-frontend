<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";
import { Student } from "./student";

interface StudentsTableProps {
  students: Student[];
}

defineProps<StudentsTableProps>();
const emit = defineEmits<{
  (e: "rowClick", event: Event, student: Student): void;
}>();

const searchFilter = ref("");
const gradeFilter = ref("");
const divisionFilter = ref("");
const columns = [
  {
    name: "name",
    required: true,
    label: "Nombre",
    align: "left" as const,
    field: (row: Student) => row.name,
    sortable: true,
  },
  {
    name: "surname",
    label: "Aepplido",
    align: "left" as const,
    field: (row: Student) => row.surname,
    sortable: true,
  },
  {
    name: "age",
    label: "Edad",
    align: "center" as const,
    field: (row: Student) => row.birthDate,
    format: (val: string) =>
      new Date().getFullYear() - new Date(val).getFullYear(),
  },
  {
    name: "grade",
    label: "Año",
    align: "center" as const,
    field: (row: Student) => row.grade,
    format: (val: number) => `${val}º`,
    sortable: true,
  },
  {
    name: "division",
    label: "División",
    align: "center" as const,
    field: (row: Student) => row.division,
  },
];

const grades = [
  {
    value: 1,
    label: "1º",
  },
  {
    value: 2,
    label: "2º",
  },
  {
    value: 3,
    label: "3º",
  },
  {
    value: 4,
    label: "4º",
  },
  {
    value: 5,
    label: "5º",
  },
  {
    value: 6,
    label: "6º",
  },
];
const divisions = ["A", "B", "C"];

const handleRowClick = (event: Event, student: Student) => {
  emit("rowClick", event, student);
};

const handleFiltering = (
  rows: readonly Student[],
  terms: {
    search: string;
    grade: { value: number; label: string };
    division: string;
  },
  columns: readonly unknown[],
  getCellValue: (column: unknown, row: Student) => string | number
): Student[] => {
  const lowerSearch = terms.search ? terms.search.toLowerCase() : "";
  const filteredRows = rows.filter((row) => {
    let searchFound = true;
    let gradeFound = true;
    let divisionFound = true;

    if (terms.grade) {
      gradeFound = row.grade === terms.grade.value;
    }

    if (terms.division) {
      divisionFound = row.division === terms.division;
    }

    if (lowerSearch) {
      searchFound = false;

      let searchValuesLower = columns.map((column) =>
        getCellValue(column, row).toString().toLowerCase()
      );

      for (let val = 0; val < searchValuesLower.length; val++) {
        if (searchValuesLower[val].includes(lowerSearch)) {
          searchFound = true;
          break;
        }
      }

      return divisionFound && gradeFound && searchFound;
    }

    return gradeFound && divisionFound;
  });

  return filteredRows;
};

const initialPagination = {
  sortBy: "name",
  descending: false,
  page: 1,
  rowsPerPage: 11,
  //rowsNumber: students.length,
};
</script>

<template>
  <div class="q-pa-md">
    <q-table
      title="Alumnos"
      row-key="id"
      separator="cell"
      :filter="{
        search: searchFilter,
        grade: gradeFilter,
        division: divisionFilter,
      }"
      :filter-method="handleFiltering"
      :pagination="initialPagination"
      :rows="students"
      :columns="columns"
      @row-click="handleRowClick"
    >
      <template v-slot:top-right>
        <div class="row q-pr-md selects-container">
          <q-select
            filled
            dense
            clearable
            label="Año"
            class="col-grow q-pr-md"
            v-model="gradeFilter"
            :options="grades"
          />
          <q-select
            filled
            dense
            clearable
            v-model="divisionFilter"
            :options="divisions"
            class="col-grow"
            label="División"
          />
        </div>
        <q-input
          filled
          dense
          debounce="300"
          v-model="searchFilter"
          placeholder="Buscar alumno"
          class="q-pr-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
          icon="person_add"
          color="primary"
          label="Nuevo alumno"
          @click="$router.push('students/new')"
        />
      </template>
    </q-table>
  </div>
</template>

<style lang="scss">
.selects-container {
  min-width: 300px;
}
</style>
