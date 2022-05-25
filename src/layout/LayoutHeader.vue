<script setup lang="ts">
import { defineProps } from "vue";

export interface LayoutHeaderProps {
  toggleLeftDrawer: () => void;
}

defineProps<LayoutHeaderProps>();
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
    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab to="/page1" label="Page One" />
      <q-route-tab to="/page2" label="Page Two" />
      <q-route-tab to="/page3" label="Page Three" />
    </q-tabs>
  </q-header>
</template>
