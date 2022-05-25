<script setup lang="ts">
import { ref } from "vue";
import LayoutHeader from "./layout/LayoutHeader.vue";
import LayoutDrawer from "./layout/LayoutDrawer.vue";
import LayoutFooter from "./layout/LayoutFooter.vue";

const isLeftDrawerOpen = ref(true);

const toggleLeftDrawer = () => {
  isLeftDrawerOpen.value = !isLeftDrawerOpen.value;
};
</script>

<template>
  <q-layout view="hhh LpR fff">
    <layout-header :toggle-left-drawer="toggleLeftDrawer" />
    <layout-drawer v-model="isLeftDrawerOpen" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <layout-footer />
  </q-layout>
</template>

<style lang="scss">
.drawer-option-active {
  color: white !important;
  background: $grey-9;
}
</style>
