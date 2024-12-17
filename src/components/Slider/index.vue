<template>
  <div class="slider">
    <h4 class="slider__title">
      {{ title }}: {{ currentValue }}{{ additionalText }}
    </h4>

    <div class="slider__range">
      <p class="slider__range-text">{{ minValue }}</p>

      <v-slider
        v-model="currentValue"
        :min="minValue"
        :max="maxValue"
        step="1"
        track-color="primary"
        color="secondary"
        hide-details
      />

      <p class="slider__range-text">{{ maxValue }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class Slider extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) additionalText!: string;
  @Prop({ default: 10 }) minValue!: number;
  @Prop({ default: 20 }) maxValue!: number;
  @Prop({ default: 0 }) initialValue!: number;

  private currentValue = 0;

  mounted() {
    this.getInitialValue();
  }

  @Watch("currentValue")
  emitValue() {
    this.$emit("current-value", this.currentValue);
  }

  getInitialValue() {
    this.currentValue = this.initialValue;
  }
}
</script>

<style scoped lang="scss" src="./index.scss" />
