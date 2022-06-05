<script setup lang="ts">
import { date, QPopupProxy } from "quasar";
import { defineEmits, defineProps, ref } from "vue";

export interface DateInput {
  rules?: any[];
  clearable?: boolean;
  label?: string;
  hint?: string;
  modelValue?: string | null;
  hideBottomSpace?: boolean;
  defaultYearMonth?: string;
}

defineProps<DateInput>();
const emit = defineEmits(["update:modelValue"]);

const qDateProxy = ref<QPopupProxy>();

const handleInput = (value: string | number | null) => {
  emit("update:modelValue", value);
  qDateProxy.value?.hide();
};
const handleClear = () => {
  emit("update:modelValue", null);
};
</script>

<template>
  <q-field
    filled
    @clear="handleClear"
    :clearable="clearable"
    :hide-bottom-space="hideBottomSpace"
    :model-value="modelValue ? date.extractDate(modelValue!, 'DD [de] MMMM, YYYY') : null"
    :label="label"
    :hint="hint"
    :stack-label="!!modelValue"
    :rules="rules"
  >
    <template v-slot:append>
      <q-icon name="event" />
    </template>
    <template v-slot:control>
      <div class="self-center full-width no-outline" tabindex="0">
        {{ modelValue }}
      </div>
    </template>
    <q-popup-proxy
      ref="qDateProxy"
      transition-show="scale"
      transition-hide="scale"
      :breakpoint="0"
    >
      <div>
        <q-date
          mask="DD [de] MMMM, YYYY"
          :default-year-month="defaultYearMonth"
          :model-value="modelValue"
          @update:model-value="handleInput"
        ></q-date>
      </div>
    </q-popup-proxy>
  </q-field>
</template>
