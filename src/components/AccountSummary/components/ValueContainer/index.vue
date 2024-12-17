<template>
  <div class="value-container">
    <p class="value-container__title">{{ title }}</p>

    <div class="value-container__value">
      <span class="value-container__value-currency">{{ currencySymbol }}</span>

      <v-progress-circular v-if="isLoading" color="primary" indeterminate />

      <p v-else-if="value" class="value-container__value--result">
        {{ value }}
      </p>

      <p v-else class="value-container__value--error">
        {{ feedbackText }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ValueContainer extends Vue {
  @Prop() title!: string;
  @Prop() currencySymbol!: string;
  @Prop() value!: string;
  @Prop({ default: false }) isLoading!: boolean;
  @Prop({ default: "" }) feedbackText!: string;
}
</script>

<style scoped lang="scss" src="./index.scss" />
