<template>
  <div class="currency-switch">
    <label class="currency-switch__label" for="switch">EUR</label>

    <v-switch
      v-model="currency"
      id="switch"
      class="currency-switch__toggle"
      color="none"
      true-value="USD"
      false-value="EUR"
      hide-details
      inset
    />

    <label class="currency-switch__label" for="switch">USD</label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

const USD_CURRENCY = "USD";
const EUR_CURRENCY_SYMBOL = "€";
const USD_CURRENCY_SYMBOL = "$";

@Component
export default class TypeCurrency extends Vue {
  private currency = USD_CURRENCY;

  mounted() {
    this.getStoreCurrency();
  }

  @Watch("currency")
  saveCurrencyInStore() {
    this.$store.commit("setCurrencyAbbreviation", this.currency);
    this.$store.commit(
      "setCurrencySymbol",
      this.currency === USD_CURRENCY ? USD_CURRENCY_SYMBOL : EUR_CURRENCY_SYMBOL
    );
  }

  getStoreCurrency() {
    this.currency = this.$store.getters.currencyAbbreviation;
  }
}
</script>

<style scoped lang="scss" src="./index.scss" />
