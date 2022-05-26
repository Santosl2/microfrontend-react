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

registerApplication({
  name: "@mf/react-multiples",
  app: () => System.import("@mf/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@mf/react-parcel",
  app: () => System.import("@mf/react-parcel"),
  activeWhen: (location) => location.pathname === "/react-parcel",
});

registerApplication({
  name: "@mf/react-route",
  app: () => System.import("@mf/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

start({
  urlRerouteOnly: true,
});
