<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp">
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
          ><span>{{
            dayjs(item.updateDate).format("YYYY/MM/DD, HH:MM A")
          }}</span>
        </div>

        <v-card-actions class="pa-0">
          <v-btn
            :to="`/news/${item.id}`"
            class="news-button"
            color="white"
            variant="text"
            >عرض الخبر
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- pagination  -->
    <div class="pag">
      <v-container class="pagination">
        <button :disabled="blog.length < 10" @click="nextPage">&lt;</button>
        <button
          v-if="blog.length >= 10"
          :disabled="blog.length < 10"
          @click="nextPage"
        >
          {{ numberOfPage + 1 }}
        </button>
        <button class="current">{{ numberOfPage }}</button>
        <button
          v-if="numberOfPage != 1"
          :disabled="numberOfPage <= 1"
          @click="previousPage"
        >
          {{ numberOfPage - 1 }}
        </button>
        <button :disabled="numberOfPage <= 1" @click="previousPage">></button>
      </v-container>
    </div>
    <!-- pagination  -->
  </v-card>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import dayjs from "dayjs";
import { ref, onMounted } from "vue";
import axios from "@/server/axios";
const isLoading = ref(false);
const numberOfPage = ref(1);
const numberOfItemPerPage = ref(10);
const blog = ref({});
function getBlog() {
  isLoading.value = true;
  axios
    .get(
      `Admin/GetBlog?numberOfPage=${numberOfPage.value}&numberOfItemPerPage=${numberOfItemPerPage.value}`
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
  numberOfPage.value++;
  isLoading.value = true;
  getBlog();
}
function previousPage() {
  numberOfPage.value--;
  isLoading.value = true;
  getBlog();
}
onMounted(() => {
  getBlog();
});
</script>
<style scoped>

</style>
