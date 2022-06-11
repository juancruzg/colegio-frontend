<script setup lang="ts">
import { date, QPopupProxy } from "quasar";
import { defineEmits, defineProps, ref } from "vue";

export interface DateInput {
  rules?: ((val: string) => string | boolean)[];
  clearable?: boolean;
  label?: string;
  hint?: string;
  modelValue?: Date | null;
  hideBottomSpace?: boolean;
  defaultYearMonth?: string;
}

defineProps<DateInput>();
const emit = defineEmits(["update:modelValue"]);

const qDateProxy = ref<QPopupProxy>();

const handleInput = (value: string | null) => {
  if (!value) {
    return emit("update:modelValue", null);
  }

  emit("update:modelValue", date.extractDate(value, "DD [de] MMMM, YYYY"));
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
    :model-value="modelValue || null"
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
        {{ modelValue && date.formatDate(modelValue, "DD [de] MMMM, YYYY") }}
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
