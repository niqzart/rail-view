<template>
  <app-layout>
    <v-container class="mx-auto max-width text-center">
      <h1 class="mb-3">Adding A Picture</h1>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-file-input
          label="Image"
          accept="image/*"
          color="green"
          outlined
          show-size
          :rules="imageRules"
          prepend-icon="mdi-camera"
        ></v-file-input>

        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Short name"
          color="green"
          outlined
        ></v-text-field>

        <v-textarea
          v-model="description"
          label="Description"
          color="green"
          outlined
        ></v-textarea>

        <v-checkbox
          class="my-n4"
          v-model="ownPicture"
          color="green"
          label="This is my own picture"
        ></v-checkbox>

        <v-text-field
          v-model="source"
          :rules="sourceRules(ownPicture)"
          :disabled="ownPicture"
          label="Source link"
          color="green"
          outlined
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Your email"
          color="green"
          outlined
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Submit!
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
      </v-form>
    </v-container>
  </app-layout>
</template>

<script>
import AppLayout from "../App.vue";
export default {
  components: {
    AppLayout,
  },
  data: () => ({
    valid: true,
    imageRules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!",
    ],
    name: "",
    nameRules: [
      (v) => !!v || "Short name is required",
      (v) => (v && v.length <= 20) || "Name is too long (max 20 characters)",
    ],
    description: "",
    source: "",
    ownPicture: false,
    sourceRules(ownPicture) {
      if (ownPicture) return [];
      else
        return [
          (v) => !!v || "Source link is required",
          (v) => /^.+:\/\/.+\..+$/.test(v) || "Link is invalid",
        ];
    },
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /^.+@.+\..+$/.test(v) || "Email is invalid",
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      // send
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.max-width {
  max-width: 600px;
}
</style>