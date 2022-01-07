<template>
  <app-layout>
    <v-flex class="d-flex container justify-space-between flex-wrap max-width">
      <v-flex
        class="d-flex flex-column"
        v-for="(photo, index) in photos"
        :key="index"
      >
        <v-img
          v-bind:src="photo.href"
          max-height="150"
          max-width="250"
          class="mt-2"
        ></v-img>
        <v-card class="my-0 text-center" max-width="250">
          {{ photo.name }}
        </v-card>
      </v-flex>
    </v-flex>

    <v-container>
      <v-pagination
        class="max-width px-12"
        v-model="page"
        :length="100"
        circle
      ></v-pagination>
    </v-container>
  </app-layout>
</template>

<script>
import AppLayout from "../App.vue";
export default {
  components: {
    AppLayout,
  },
  methods: {
    lastPage() {
      console.log("last");
    },
    nextPage() {
      console.log("next");
    },
  },
  data: () => {
    return {
      page: 1,
      photos: [
        {
          href: "https://www.westerlynews.ca/wp-content/uploads/2017/11/9296935_web1_1280px-Wos_056x_-_Flickr_-_drewj1946-1024x680.jpg",
          name: "2",
          id: 0,
        },
        {
          href: "https://hopebc.ca/wp-content/uploads/2020/06/train.jpg",
          name: "3",
          id: 1,
        },
        {
          href: "https://video.cgtn.com/news/2021-12-05/What-can-be-found-on-the-train-of-the-China-Laos-Railway--15KvrEM4xyw/video/4267f465dcbb4179aada60850cdd7db6/4267f465dcbb4179aada60850cdd7db6.jpg",
          name: "4",
          id: 2,
        },
        {
          href: "https://altai-touristic.ru/img/blog/trans-siberian_railway_tour/hot_transsib.jpg",
          name: "5",
          id: 3,
        },
        {
          href: "https://www.travel-british-columbia.com/wp-content/uploads/2018/10/Via-Rail-Train-over-Skeena.jpg",
          name: "6",
          id: 4,
        },
        {
          href: "https://www.japan-guide.com/g17/2019_01.jpg",
          name: "7",
          id: 5,
        },
        {
          href: "https://www.westerlynews.ca/wp-content/uploads/2017/11/9296935_web1_1280px-Wos_056x_-_Flickr_-_drewj1946-1024x680.jpg",
          name: "2",
          id: 0,
        },
        {
          href: "https://hopebc.ca/wp-content/uploads/2020/06/train.jpg",
          name: "3",
          id: 1,
        },
        {
          href: "https://video.cgtn.com/news/2021-12-05/What-can-be-found-on-the-train-of-the-China-Laos-Railway--15KvrEM4xyw/video/4267f465dcbb4179aada60850cdd7db6/4267f465dcbb4179aada60850cdd7db6.jpg",
          name: "4",
          id: 2,
        },
        {
          href: "https://altai-touristic.ru/img/blog/trans-siberian_railway_tour/hot_transsib.jpg",
          name: "5",
          id: 3,
        },
        {
          href: "https://www.travel-british-columbia.com/wp-content/uploads/2018/10/Via-Rail-Train-over-Skeena.jpg",
          name: "6",
          id: 4,
        },
        {
          href: "https://www.japan-guide.com/g17/2019_01.jpg",
          name: "7",
          id: 5,
        },
      ],
    };
  },
};
</script>

<style scoped>
.max-width {
  max-width: 1800px;
  margin: auto;
}
</style>