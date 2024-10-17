import lume from "lume/mod.ts";
// skeleton blog framework
import setup from "./mod.ts";

const site = lume({
  server: {
    page404: "./lost/",
  },
});
site.use(setup());


export default site;

