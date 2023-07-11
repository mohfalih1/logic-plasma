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
        <v-btn class="add" rounded="0" height="50" elevation="0">
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة خبر</h3>
        </v-btn>
      </div>
    </v-card-text>
    <v-form v-model="valid" @submit.prevent="validate">
      <v-card class="input-flex" elevation="0">
        <div class="filed-flex">
          <div class="w-100 mt-5">
            <h4>اضف خبر باللغة العربية:</h4>
            <v-text-field
              v-model="addBlo.TitleArabic"
              variant="underlined"
              class="h-50"
              clearable=""
              label="عنوان الخبر..."
              :rules="titleRule"
            >
            </v-text-field>
            <v-textarea
              v-model="addBlo.ContentArabic"
              variant="underlined"
              clearable=""
              label="محتوى الخبر..."
              :rules="contentRule"
            >
            </v-textarea>
          </div>
          <div class="w-100 mt-5">
            <h4>اضف خبر باللغة الانكليزية:</h4>
            <v-text-field
              v-model="addBlo.TitleEnglish"
              :rules="titleRule"
              clearable=""
              variant="underlined"
              class="h-50"
              label="عنوان الخبر..."
            >
            </v-text-field>
            <v-textarea
              v-model="addBlo.ContentEnglish"
              :rules="contentRule"
              clearable=""
              variant="underlined"
              label="محتوى الخبر..."
            >
            </v-textarea>
          </div>
        </div>
        <div class="w-50">
          <v-text-field
            label="اضف رابط الخبر"
            clearable=""
            variant="underlined"
            prepend-icon="mdi-link"
          >
          </v-text-field>
        </div>

        <v-card class="drag-box mb-3">
          <v-card-title class="drag-box-title">
            <p>اضف صورة مربعة 1*1</p>
          </v-card-title>
          <v-file-input
            class="drag-box-content"
            variant="plain"
            :rules="imageRule"
            v-model="addBlo.ImageFile"
            accept="image/*"
            hint="يرجى رفع صورة مربعة"
            show-size
            prepend-icon="mdi-image-plus-outline"
          >
          </v-file-input>
          <v-card-text> </v-card-text>
        </v-card>
        <v-card-actions>
          <v-btn
            type="submit"
            class="add-edit-button pa-5"
            :color="primary"
            variant="text"
          >
            نشر الخبر
          </v-btn>
          <v-btn
            to="/news"
            class="add-back-button pa-5"
            color="white"
            variant="text"
          >
            <v-icon icon="mdi-greater-than"></v-icon>
            العودة
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-card>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import { primary } from "@/assets/style";
import { ref, reactive } from "vue";
import axios from "@/server/axios";
import router from "@/router";
const isLoading = ref(false);
const addBlo = reactive({
  TitleArabic: null,
  TitleEnglish: null,
  ImageFile: null,
  ContentArabic: null,
  ContentEnglish: null,
});

function addBlog() {
  const formData = new FormData();
  formData.append("TitleArabic", addBlo.TitleArabic);
  formData.append("TitleEnglish", addBlo.TitleEnglish);
  formData.append(
    "ImageFile",
    addBlo.ImageFile ? addBlo.ImageFile[0] : addBlo.ImageFile
  );
  formData.append("ContentArabic", addBlo.ContentArabic);
  formData.append("ContentEnglish", addBlo.ContentEnglish);
  isLoading.value = true;
  axios
    .post(`Admin/AddBlog`, formData)
    .then((res) => {
      router.push("/news");

      console.log(res.data);
    })
    .catch((err) => {})
    .finally(() => {
      isLoading.value = false;
      router.push("/news");
      console.log("add suc");
    });
}

// .............validation.............
const valid = ref(false);
const titleRule = ref([
  (v) => {
    if (v) return true;

    return "العنوان مطلوب";
  },
]);
const contentRule = ref([
  (v) => {
    if (v) return true;

    return "المحتوى مطلوب";
  },
]);
const imageRule = ref([
  (v) => {
    if (v) return true;

    return "الصورة مطلوبة";
  },
]);

function validate() {
  if (valid.value) {
    isLoading.value = false;
    addBlog();
  }
}
</script>
<style scoped>
.input-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.filed-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
  width: 70%;
}
.drag-box {
  position: relative;
  width: 425px;
  height: 200px;
  background-color: #ffc0cc;
}
.drag-box-title {
  background-color: #ff2c54;
  color: white;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
}

.drag-box-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.image-translate {
  overflow: hidden;
}
.lang-button {
  background-color: #ff2c54;
  color: white;
}
</style>
