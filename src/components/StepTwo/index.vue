<template>
  <div class="step-two">
    <AccountSummary class="step-two__summary" />

    <v-btn
      v-if="isMobile"
      @click="emitPreviousStep"
      icon
      class="step-two__button"
    >
      <v-icon color="neutral-color-light" class="step-two__button-icon">
        mdi-chevron-left
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import AccountSummary from "@/components/AccountSummary/index.vue";

@Component({
  components: { AccountSummary },
})
export default class StepTwo extends Vue {
  @Prop() isMobile!: boolean;

  emitPreviousStep() {
    this.$emit("previous-step", 1);
  }
}
</script>

<style scoped lang="scss" src="./index.scss" />
