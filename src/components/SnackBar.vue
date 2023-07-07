<template>
  <div class="text-center ma-2">
    <v-snackbar
      :value="model"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <p>{{ text }}</p>
      <template v-slot:actions>
        <v-btn color="pink" variant="text" >اغلاق</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
defineEmits(["update:modelValue"]);
 defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  });
</script>
