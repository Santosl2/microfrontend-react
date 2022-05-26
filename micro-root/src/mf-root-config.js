import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@react/app",
  app: () => System.import("@react/app"),
  activeWhen: (location) => location.pathname === "/react-single",
});

start({
  urlRerouteOnly: true,
});
