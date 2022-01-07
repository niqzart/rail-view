import Vue from "vue"
import routes from "./routes"
import vuetify from "./plugins/vuetify"

const app = new Vue({
  vuetify,
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? () => import("./pages/" + matchingView + ".vue")
        : () => import("./pages/404.vue")
    }
  },
  render(h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener("popstate", () => {
  app.currentRoute = window.location.pathname
})
