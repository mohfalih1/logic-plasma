<template>
  <v-card
    class="mr-3 mb-7 ml-7 mt-1 rounded-lg"
    elevation="5"
    width="98.8%"
    height="100vh"
  >
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-newspaper-variant-outline"></v-icon>
      <h2>الاخبار</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض الاخبار</h3></div>
        <v-btn class="add" rounded="0" height="50" elevation="0">
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة خبر</h3>
        </v-btn>
      </div>
    </v-card-text>
    <div class="grid-news ma-5">
      <v-card class="news-card" v-for="item in date">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          class="news-image"
          cover
        ></v-img>

        <div class="news-title">{{ item.title }}</div>

        <div class="news-date">
          <v-icon icon="mdi-calendar-outline"> </v-icon
          ><span>{{ item.date }}</span>
        </div>

        <v-card-actions class="pa-0">
          <v-btn to="/news/add" class="news-button" color="white" variant="text"
            >عرض الخبر
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
const date = ref([
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
  { Image: "", title: "news-1", date: "3434343" },
]);
</script>
