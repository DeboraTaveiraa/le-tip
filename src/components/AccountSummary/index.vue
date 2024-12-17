<template>
  <section class="account-summary">
    <ValueContainer
      title="Conta"
      :currencySymbol="currencySymbol"
      :value="accountValueFormatted"
    />

    <ValueContainer
      title="Gorjeta"
      :currencySymbol="currencySymbol"
      :value="tipValueFormatted"
    />

    <hr />

    <ValueContainer
      title="Total"
      :currencySymbol="currencySymbol"
      :value="totalValueFormatted"
    />

    <ValueContainer
      title="Por Pessoa"
      :currencySymbol="currencySymbol"
      :value="valuePerPersonFormatted"
    />

    <ValueContainer
      title="em R$"
      feedbackText="Não foi possível realizar a conversão no momento."
      :currencySymbol="currencySymbol"
      :value="realValueFormatted"
      :isLoading="isLoadingConversion"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

import { debounce } from "lodash";

import { formatCurrency } from "@/utils/currency";

import ValueContainer from "./components/ValueContainer/index.vue";

import { currencyLayerService } from "@/services/CurrencyLayerService";

@Component({
  components: {
    ValueContainer,
  },
})
export default class AccountSummary extends Vue {
  private tipValue = 0;
  private totalValue = 0;
  private tipValueFormatted = "";
  private totalValueFormatted = "";
  private valuePerPersonFormatted = "";
  private accountValueFormatted = "";
  private realValueFormatted = "";
  private isLoadingConversion = false;

  private debounceSetTotalConvertedToReal = debounce(async () => {
    await this.setTotalConvertedToReal();
  }, 500);

  get currencySelected() {
    return this.$store.getters.currencyAbbreviation;
  }

  get currencySymbol() {
    return this.$store.getters.currencySymbol;
  }

  get accountValue() {
    return this.$store.getters.accountValue;
  }

  get tipPercentage() {
    return this.$store.getters.tipPercentage;
  }

  get amountPeople() {
    return this.$store.getters.amountPeople;
  }

  get watchCurrencyAndTotalValue() {
    return `${this.currencySelected}-${this.totalValueFormatted}`;
  }

  @Watch("accountValue", { immediate: true })
  @Watch("tipPercentage", { immediate: true })
  @Watch("currencySelected")
  setValues() {
    this.setAccountValue();
    this.setTipValue();
    this.setTotalValue();
    this.setValuePerPerson();
  }

  @Watch("amountPeople")
  setValuePerPerson() {
    const valuePerPerson = this.totalValue / this.amountPeople;

    this.valuePerPersonFormatted = formatCurrency(
      valuePerPerson,
      this.currencySelected
    );
  }

  @Watch("watchCurrencyAndTotalValue", { immediate: true })
  onDependencyChange() {
    this.debounceSetTotalConvertedToReal();
  }

  async setTotalConvertedToReal() {
    try {
      this.isLoadingConversion = true;

      if (this.totalValue === 0) {
        this.realValueFormatted = formatCurrency(0, this.currencySelected);
        return;
      }

      const response = await currencyLayerService.getConversion(
        this.currencySelected,
        "BRL",
        this.totalValue
      );

      if (response?.result) {
        this.realValueFormatted = formatCurrency(
          response?.result,
          this.currencySelected
        );

        return;
      }

      this.realValueFormatted = "";
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoadingConversion = false;
    }
  }

  setAccountValue() {
    this.accountValueFormatted = formatCurrency(
      this.accountValue,
      this.currencySelected
    );
  }

  setTipValue() {
    const percentageValue = (this.accountValue * this.tipPercentage) / 100;

    this.tipValue = percentageValue;

    this.tipValueFormatted = formatCurrency(
      percentageValue,
      this.currencySelected
    );
  }

  setTotalValue() {
    const totalSumWithTip = this.accountValue + this.tipValue;

    this.totalValue = totalSumWithTip;

    this.totalValueFormatted = formatCurrency(
      totalSumWithTip,
      this.currencySelected
    );
  }
}
</script>

<style scoped lang="scss" src="./index.scss" />
