import "./styles/quasar.scss";
import { Notify } from "quasar";
import lang from "quasar/lang/es.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// To be used on app.use(Quasar, { ... })
export default {
  config: { dark: "auto" },
  plugins: { Notify },
  lang: lang,
};
