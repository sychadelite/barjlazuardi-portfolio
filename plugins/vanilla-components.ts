import { VanillaComponents } from "@flavorly/vanilla-components";

export default defineNuxtPlugin(nuxtApp => {
  // You can also override the default options here
  // https://github.com/flavorly/vanilla-components/blob/master/documentation/src/presets/tailwind/
  nuxtApp.vueApp.use(VanillaComponents, {
    Dialog: {
      classes: {
        wrapper: "fixed inset-0 overflow-y-auto z-[99]",
        overlay: "fixed inset-0 transition-opacity backdrop-blur-sm z-[99]",
        overlayColor: "bg-black/50 dark:bg-black/80"
      }
    },
  })
})