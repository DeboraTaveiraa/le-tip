<template>
  <div class="input-money">
    <label for="money" class="input-money__label">Valor</label>

    <v-text-field
      v-model="formattedValue"
      @input="onInputChange"
      :prefix="currencySymbol"
      id="money"
      outlined
      hide-details
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import { formatCurrency } from "@/utils/currency";

@Component
export default class InputMoney extends Vue {
  private value: number | null = 0;
  private formattedValue = "0.00";

  mounted() {
    this.getStoreValue();
  }

  get accountValue() {
    return this.$store.getters.accountValue;
  }

  get currencySelected() {
    return this.$store.getters.currencyAbbreviation;
  }

  get currencySymbol() {
    return this.$store.getters.currencySymbol;
  }

  @Watch("formattedValue")
  saveValueInStore() {
    this.$store.commit("setAccountValue", this.value);
  }

  @Watch("currencySymbol")
  onCurrencyChange() {
    if (this.value !== null) {
      this.formattedValue = formatCurrency(this.value, this.currencySelected);
    }
  }

  onInputChange(inputValue: string) {
    const rawValue = inputValue.replace(/\D/g, "");
    this.value = parseFloat(rawValue) / 100 || 0;

    this.formattedValue = formatCurrency(this.value, this.currencySelected);
  }

  getStoreValue() {
    this.value = this.accountValue;

    this.formattedValue = formatCurrency(
      this.accountValue,
      this.currencySelected
    );
  }
}
</script>

<style scoped lang="scss" src="./index.scss" />
