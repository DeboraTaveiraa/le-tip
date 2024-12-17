<template>
  <v-app class="app">
    <div class="app__main">
      <ContentHeader />

      <section class="app__content">
        <template v-if="isMobile">
          <keep-alive>
            <StepOne
              v-if="step === 1"
              @next-step="setStep"
              :isMobile="isMobile"
            />

            <StepTwo
              v-if="step === 2"
              @previous-step="setStep"
              :isMobile="isMobile"
            />
          </keep-alive>
        </template>

        <template v-else>
          <StepOne :isMobile="isMobile" />

          <StepTwo :isMobile="isMobile" />
        </template>
      </section>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";

import ContentHeader from "@/components/ContentHeader/index.vue";
import Slider from "@/components/Slider/index.vue";
import TypeCurrency from "@/components/TypeCurrency/index.vue";
import InputMoney from "@/components/InputMoney/index.vue";
import AccountSummary from "@/components/AccountSummary/index.vue";
import StepOne from "@/components/StepOne/index.vue";
import StepTwo from "@/components/StepTwo/index.vue";

import DeviceMixin from "./mixins/deviceMixin";

@Component({
  components: {
    ContentHeader,
    Slider,
    TypeCurrency,
    InputMoney,
    AccountSummary,
    StepOne,
    StepTwo,
  },
})
export default class App extends Mixins(DeviceMixin) {
  private step = 1;

  setStep(newStep: number) {
    this.step = newStep;
  }
}
</script>

<style scoped lang="scss" src="./App.scss" />
