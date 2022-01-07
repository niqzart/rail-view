<template>
  <app-layout>
    <v-flex class="d-flex justify-center align-center">
      <h1>Welcome to RailView!</h1>
    </v-flex>

    <v-flex class="d-flex justify-center align-center">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn color="primary" x-large href="/gallery"> See The Gallery! </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" x-large href="/add"> Add My Picture! </v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-flex>
  </app-layout>
</template>

<script>
import AppLayout from "../App.vue";
export default {
  props: {},
  components: {
    AppLayout,
  },
};
</script>

<style scoped>
.align-center {
  height: 200px;
}
</style>