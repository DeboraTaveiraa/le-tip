import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#5A65F2",
        secondary: "#FF5722",
        "neutral-color-light": "#F4F4F4",
        "neutral-color-dark": "#212121",
      },
    },
  },
});
