<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="content-header__title">Le<span>/Tip</span></h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ContentHeader extends Vue {}
</script>

<style scoped lang="scss" src="./index.scss" />
