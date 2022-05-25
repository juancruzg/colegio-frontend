<script setup lang="ts">
import { DrawerOptions } from "@/enums/DrawerOptions";
import { useQuasar } from "quasar";
import { defineExpose, defineProps } from "vue";

export interface LayoutDrawer {
  modelValue: boolean;
}

// Hack so that v-ripple works
const $q = useQuasar();
defineExpose({ $q });

defineProps<LayoutDrawer>();

const selectedDrawerOption = DrawerOptions.STUDENTS;
const options = [
  {
    key: DrawerOptions.STUDENTS,
    icon: "person",
    label: "Alumnos",
    caption: "Ver, editar, eliminar alumnos",
    showInfoIcon: false,
  },
];
</script>

<template>
  <q-drawer show-if-above :model-value="modelValue" side="left" bordered>
    <q-list>
      <q-item-label v-ripple header>Administración</q-item-label>
      <q-item
        v-for="option in options"
        :key="option.key"
        clickable
        v-ripple
        :active="selectedDrawerOption === option.key"
        active-class="drawer-option-active"
      >
        <q-item-section avatar>
          <q-avatar :icon="option.icon" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{ option.label }}</q-item-label>
          <q-item-label caption>{{ option.caption }}</q-item-label>
        </q-item-section>

        <q-item-section v-if="option.showInfoIcon" side>
          <q-icon name="info" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
