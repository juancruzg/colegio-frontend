<script setup lang="ts">
import { DrawerOptions } from "@/enums/DrawerOptions";
import { DrawerSections } from "@/enums/DrawerSections";
import { useQuasar } from "quasar";
import { defineExpose, defineProps, ref } from "vue";
import { content, sectionWordingMap } from "./mapContent";

export interface LayoutDrawer {
  modelValue: boolean;
}

// Hack so that v-ripple works
const $q = useQuasar();
defineExpose({ $q });
defineProps<LayoutDrawer>();

let selectedDrawerOption = ref(DrawerOptions.STUDENTS);

const sections = [
  {
    sectionName: sectionWordingMap.get(DrawerSections.ADMINISTRATION),
    options: [
      {
        to: "/administration/students",
        key: DrawerOptions.STUDENTS,
        icon: {
          type: "person",
          color: "green-8",
        },
        label: content.students.label,
        caption: content.students.caption,
        showInfoIcon: false,
      },
      {
        to: "/administration/classrooms",
        key: DrawerOptions.CLASSROOMS,
        icon: {
          type: "groups",
          color: "orange-8",
        },
        label: content.classrooms.label,
        caption: content.classrooms.caption,
        showInfoIcon: false,
      },
    ],
  },
  {
    sectionName: sectionWordingMap.get(DrawerSections.REPORTS),
    options: [
      {
        to: "/reports/standard_bearers",
        key: DrawerOptions.STANDARD_BEARERS,
        icon: {
          type: "flag",
          color: "light-blue-6",
        },
        label: content.standardBearers.label,
        caption: content.standardBearers.label,
        showInfoIcon: false,
      },
      {
        to: "/reports/marks",
        key: DrawerOptions.MARKS,
        icon: {
          type: "groups",
          color: "pink-8",
        },
        label: content.marks.label,
        caption: content.marks.caption,
        showInfoIcon: false,
      },
    ],
  },
  {
    sectionName: sectionWordingMap.get(DrawerSections.ADVANCED_CONFIG),
    options: [
      {
        to: "/advanced_config/subjects",
        key: DrawerOptions.SUBJECTS,
        icon: {
          type: "auto_stories",
          color: "lime-8",
        },
        label: content.subjects.label,
        caption: content.subjects.caption,
        showInfoIcon: false,
      },
      {
        to: "/advanced_config/grades",
        key: DrawerOptions.GRADES,
        icon: {
          type: "tag",
          color: "red-8",
        },
        label: content.grades.label,
        caption: content.grades.caption,
        showInfoIcon: false,
      },
      {
        to: "/advanced_config/divisions",
        key: DrawerOptions.DIVISIONS,
        icon: {
          type: "abc",
          color: "cyan-8",
        },
        label: content.divisions.label,
        caption: content.divisions.caption,
        showInfoIcon: false,
      },
    ],
  },
];

const selectDrawerOption = (option: DrawerOptions) => {
  selectedDrawerOption.value = option;
};
</script>

<template>
  <q-drawer show-if-above :model-value="modelValue" side="left" bordered>
    <q-list>
      <q-item
        to="/"
        @click="selectDrawerOption(DrawerOptions.HOME)"
        clickable
        v-ripple
        active-class="drawer-option-active"
      >
        <q-item-section avatar>
          <q-avatar icon="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label lines="1">Inicio</q-item-label>
        </q-item-section>
      </q-item>
      <template v-for="section in sections" :key="section.sectionName">
        <q-item-label header>{{ section.sectionName }}</q-item-label>
        <q-item
          v-for="option in section.options"
          :key="option.key"
          :to="option.to"
          @click="selectDrawerOption(option.key)"
          clickable
          v-ripple
          active-class="drawer-option-active"
        >
          <q-item-section avatar>
            <q-avatar
              :icon="option.icon.type"
              :color="option.icon.color"
              text-color="white"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">{{ option.label }}</q-item-label>
            <q-item-label caption>{{ option.caption }}</q-item-label>
          </q-item-section>
          <q-item-section v-if="option.showInfoIcon" side>
            <q-icon name="info" color="green" />
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-drawer>
</template>
