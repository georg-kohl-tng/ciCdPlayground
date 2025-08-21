import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Georg Kohl",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Code In / Calamity Deployed"],
    // Which CI/CD tools do you use in your project?
    tools: "Github Actions, Argo CD",
    // What do you want to learn in this workshop?
    expectations: ["Things about CI/CD"],
  },
});
