import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { VegaComponentLibrary } from "@heartlandone/vega-vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(VegaComponentLibrary);
app.use(vuetify);

VegaComponentLibrary.isReady().then(() => {
  app.mount("#app");
});
