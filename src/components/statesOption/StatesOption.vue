<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

import { States } from "@/enums/States";
import { statesMap, statesOptionContent } from "./mapContent";

export interface StatesOption {
  modelValue?: States | null;
  clearable?: boolean;
}

defineProps<StatesOption>();
const emit = defineEmits(["update:modelValue"]);

const handleInput = (option: { label: string; value: States } | null) => {
  emit("update:modelValue", option?.value || null);
};
const handleClear = () => {
  emit("update:modelValue", null);
};

const options = Array.from(statesMap, ([value, label]) => ({ label, value }));
</script>

<template>
  <q-select
    filled
    :label="statesOptionContent.label"
    :model-value="options.find((item) => item.value === modelValue)"
    :options="options"
    :clearable="clearable"
    @update:model-value="handleInput"
    @clear="handleClear"
  />
</template>
