<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp-news">
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
    <div
      v-if="blog.length === 0"
      class="d-flex justify-center align-center mt-10"
    >
      <h3>لا يوجد اخبار لعرضهم !</h3>
    </div>
    <div class="grid-news ma-5">
      <v-card class="news-card" v-for="item in blog" :key="item.id">
        <v-img
          :src="item.image"
          lazy-src="@\assets\plasmaLogo.png"
          class="news-image"
          cover
        ></v-img>
        <div class="news-title px-2">{{ item.titleArabic }}</div>

        <div class="news-date px-2">
          <v-icon icon="mdi-calendar-outline ml-1"> </v-icon
          ><span>{{
            dayjs(item.updateDate).format("YYYY/MM/DD, HH:MM A")
          }}</span>
        </div>

        <v-card-actions class="px-2 w-100">
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
        <button :disabled="blog.length < 8" @click="nextPage">&lt;</button>
        <button
          v-if="blog.length >= 8"
          :disabled="blog.length < 8"
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

  <!--start Add snackbar  -->
  <div class="text-center ma-2">
    <v-snackbar v-model="store.isSnackbarAdd" timeout="2000">
      <p>{{ store.resAdd }}</p>
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="store.isSnackbarAdd = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <!--end Add snackbar  -->
  <!--start Edit snackbar  -->
  <div class="text-center ma-2">
    <v-snackbar v-model="store.isSnackbarEdit" timeout="2000">
      <p>{{ store.resEdit }}</p>
      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="store.isSnackbarEdit = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <!--end Edit snackbar  -->
  <!--start Delete snackbar  -->
  <div class="text-center ma-2">
    <v-snackbar v-model="store.isSnackbarDele" timeout="2000">
      <p>{{ store.resDele }}</p>
      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="store.isSnackbarDele = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <!--end Delete snackbar  -->
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import dayjs from "dayjs";
import { ref, onMounted } from "vue";
import axios from "@/server/axios";
import { useCounterStore } from "@/store/app";
const store = useCounterStore();
const isLoading = ref(false);
const numberOfPage = ref(1);
const numberOfItemPerPage = ref(8);
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
    .catch((res) => {});
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
.card-temp-news {
  border-radius: 16px;
  width: 100%;
}
.grid-news {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  gap: 2rem;
}
.pag {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
