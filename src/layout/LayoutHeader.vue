<script setup lang="ts">
import { defineProps, ref } from "vue";

export interface LayoutHeaderProps {
  toggleLeftDrawer: () => void;
}

defineProps<LayoutHeaderProps>();

const search = ref("");
</script>

<template>
  <q-header elevated class="bg-blue-grey-10" height-hint="98">
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        class="q-mr-sm"
        @click="toggleLeftDrawer"
      />
      <q-separator dark vertical inset />
      <q-toolbar-title> Colegio Admin </q-toolbar-title>
      <q-input
        dense
        rounded
        standout="bg-blue-grey-9"
        outlined
        v-model="search"
        placeholder="Buscar"
        class="col-5"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-space />
      <q-btn dense flat round icon="settings" class="q-mr-sm" />
    </q-toolbar>
    <q-tabs align="left" inline-label>
      <q-route-tab to="/page1" label="Agregar nota" icon="add" />
      <q-route-tab to="/page2" label="Ver promedios" />
    </q-tabs>
  </q-header>
</template>
