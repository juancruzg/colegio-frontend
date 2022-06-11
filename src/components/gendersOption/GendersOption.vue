<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

import { Genders } from "@/enums/Genders";
import { gendersMap, gendersOptionContent } from "./mapContent";

export interface GendersOption {
  modelValue?: Genders | null;
  clearable?: boolean;
}

defineProps<GendersOption>();
const emit = defineEmits(["update:modelValue"]);

const handleInput = (option: { label: string; value: Genders } | null) => {
  emit("update:modelValue", option?.value || null);
};
const handleClear = () => {
  emit("update:modelValue", null);
};

const options = Array.from(gendersMap, ([value, label]) => ({ label, value }));
</script>

<template>
  <q-select
    filled
    :label="gendersOptionContent.label"
    :model-value="options.find((item) => item.value === modelValue)"
    :options="options"
    :clearable="clearable"
    @update:model-value="handleInput"
    @clear="handleClear"
  />
</template>
