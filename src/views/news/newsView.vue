<template>
  <Loader v-if="isLoading" />
  <v-card
    class="mr-3 mb-7 ml-7 mt-1 rounded-lg"
    elevation="5"
    width="98.8%"
    height="90vh"
  >
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-newspaper-variant-outline"></v-icon>
      <h2>الاخبار</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض الاخبار</h3></div>
        <v-btn to="news/add" class="add" rounded="0" height="50" elevation="0">
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة خبر</h3>
        </v-btn>
      </div>
    </v-card-text>
    <div class="grid-news ma-5">
      <v-card class="news-card" v-for="item in blog" :key="item.id">
        <v-img
          :src="item.image"
          lazy-src="@\assets\plasmaLogo.png"
          class="news-image"
          cover
        ></v-img>

        <div class="news-title">{{ item.titleArabic }}</div>

        <div class="news-date">
          <v-icon icon="mdi-calendar-outline"> </v-icon
          ><span>{{ item.updateDate }}</span>
        </div>

        <v-card-actions class="pa-0">
          <v-btn
            to="/news/show"
            class="news-button"
            color="white"
            variant="text"
            >عرض الخبر
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <!-- pagination  -->
    <v-container class="pagination">
      <button :disabled="blog.length < 10" @click="nextPage">&lt;</button>
      <button
        v-if="blog.length >= 10"
        :disabled="blog.length < 10"
        @click="nextPage"
      >
        {{ numberOfPaPage + 1 }}
      </button>
      <button class="current">{{ numberOfPaPage }}</button>
      <button
        v-if="numberOfPaPage != 1"
        :disabled="numberOfPaPage <= 1"
        @click="previousPage"
      >
        {{ numberOfPaPage - 1 }}
      </button>
      <button :disabled="numberOfPaPage <= 1" @click="previousPage">></button>
    </v-container>
    <!-- pagination  -->
  </v-card>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import { ref, onMounted } from "vue";
import axios from "@/server/axios";
const isLoading = ref(false);
const numberOfPaPage = ref(1);
const numberOfItemPerPage = ref(10);
const blog = ref({});
function getBlog() {
  isLoading.value = true;
  axios
    .get(
      `Admin/GetBlog?numberOfPage=${numberOfPaPage.value}&numberOfItemPerPage=${numberOfItemPerPage.value}`
    )
    .then((res) => {
      blog.value = res.data;
      console.log(blog.value);
      isLoading.value = false;
    })
    .catch((res) => {
      console.log(res);
    });
}

// .............pagination.............
function nextPage() {
  numberOfPaPage.value++;
  showLoader.value = true;
  getBlog();
}
function previousPage() {
  numberOfPaPage.value--;
  showLoader.value = true;
  getBlog();
}
onMounted(() => {
  getBlog();
});
</script>
<style></style>
