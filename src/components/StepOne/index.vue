<template>
  <div class="step-one">
    <TypeCurrency />

    <InputMoney />

    <Slider
      title="Gorjeta"
      additionalText="%"
      :minValue="10"
      :maxValue="20"
      :initialValue="tipPercentage"
      @current-value="saveTipInStore"
    />

    <Slider
      title="Pessoas"
      :minValue="2"
      :maxValue="16"
      :initialValue="amountPeople"
      @current-value="saveAmountPeopleInStore"
    />

    <v-btn v-if="isMobile" icon @click="emitNextStep" class="step-one__button">
      <v-icon color="neutral-color-light" class="step-one__button-icon">
        mdi-chevron-right
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import TypeCurrency from "@/components/TypeCurrency/index.vue";
import InputMoney from "@/components/InputMoney/index.vue";
import Slider from "@/components/Slider/index.vue";

@Component({
  components: { TypeCurrency, InputMoney, Slider },
})
export default class StepOne extends Vue {
  @Prop() isMobile!: boolean;

  get tipPercentage() {
    return this.$store.getters.tipPercentage;
  }

  get amountPeople() {
    return this.$store.getters.amountPeople;
  }

  saveTipInStore(tip: number) {
    this.$store.commit("setTipPercentage", tip);
  }

  saveAmountPeopleInStore(amount: number) {
    this.$store.commit("setAmountPeople", amount);
  }

  emitNextStep() {
    this.$emit("next-step", 2);
  }
}
</script>

<style scoped lang="scss" src="./index.scss" />
