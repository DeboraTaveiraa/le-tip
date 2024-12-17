import { Component, Vue } from "vue-property-decorator";

@Component
export default class DeviceMixin extends Vue {
  public isMobile = false;

  mounted() {
    this.checkIfMobile();

    window.addEventListener("resize", this.checkIfMobile);
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.checkIfMobile);
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
}
