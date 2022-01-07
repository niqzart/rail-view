<template>
  <v-app>
    <v-app-bar dense app color="green" dark>
      <v-app-bar-title>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/qwert45hi"
          style="
            font-family: Oxanium;
            font-size: 24px;
            color: white;
            text-decoration: none;
          "
        >
          niqzart
        </a>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-title>
        <a
          href="/"
          v-bind:class="{ disabled: isActive }"
          style="
            font-family: Quantico;
            font-size: 28px;
            color: white;
            text-decoration: none;
          "
        >
          RailView
        </a>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-title>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/qwert45hi/express-view"
          style="font-size: 24px; color: white; text-decoration: none"
        >
          github
        </a>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$root.currentRoute === "/";
    },
  },
};
</script>

<style scoped>
.disabled {
  pointer-events: none;
}
</style>