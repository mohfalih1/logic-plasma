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
    <v-card class="d-flex justify-center align-center flex-row" elevation="0">
      <div class="god-content">
        <div class="content">
          <h4>{{ blog.titleArabic }}</h4>
          <div>
            <v-switch
              v-model="model"
              true-value="EN"
              false-value="AR"
              :label="`اللغة: ${model}`"
              :color="primary"
            ></v-switch>
          </div>
        </div>
        <br />
        <p>
          {{ blog.contentArabic }}
        </p>

        <br />
        <v-img
          :src="blog.image"
          lazy-src="@\assets\plasmaLogo.png"
          class="news-image mx-auto"
          cover
          width="680px"
          height="348px"
        ></v-img>

        <br />
        <v-card-actions>
          <v-btn
            @click="isEditDialog = true"
            class="add-edit-button pa-5"
            :color="primary"
            variant="text"
          >
            <v-icon icon="mdi-square-edit-outline" size="22"></v-icon>
            تعديل الخبر
          </v-btn>
          <v-btn
            @click="deleteBlog()"
            class="add-delete-button pa-5"
            color="white"
            variant="text"
          >
            <v-icon icon="mdi-trash-can-outline" size="22"></v-icon>
            مسح الخبر
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
      </div>
    </v-card>
  </v-card>
  <!-- start edit news -->
  <v-row justify="center">
    <v-dialog v-model="isEditDialog" persistent width="350">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> تعديل الخبر</span>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-container>
            <v-form>
              <div >
                <v-text-field
                class="select"
                  variant="plain"
                  label="عنوان الخبر..."
                >
                </v-text-field>
              </div>

              <br />
              <div>
                <v-textarea class="select" variant="plain" label="محتوى الخبر...">
                </v-textarea>
              </div>
              <br>
              <div>
              <v-file-input
                class="select"
                variant="plain"
                accept="image/*"
                show-size
                prepend-icon="mdi-image-plus-outline"
              ></v-file-input>
              </div>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <div class="d-flex align-center justify-center my-1">
            <v-btn class="delete-button" color="white" variant="text">
              حفظ
            </v-btn>
            <v-btn
              @click="isEditDialog = false"
              class="back-button"
              color="white"
              variant="text"
            >
              <v-icon icon="mdi-greater-than" size="20"></v-icon>
              العودة
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- end edit news -->
</template>

<script setup>
import Loader from "@/components/Loader.vue";
import { primary } from "@/assets/style";
import { ref, onMounted, reactive } from "vue";
import router from "@/router";
import axios from "@/server/axios";
const isLoading = ref(true);
const isEditDialog = ref(false);
const model = ref("AR");
const blog = ref({});
const donorId = router.currentRoute.value.params.id;

function getBlogById() {
  axios
    .get(`Admin/GetBlogByID?ID=${donorId}`)
    .then((res) => {
      blog.value = res.data;
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}

function deleteBlog() {
  axios
    .put(`Admin/DeleteBlog?ID=${donorId}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
      router.push("/news");
    });
}
onMounted(() => {
  getBlogById();
  return model.value, donorId;
});
</script>
<style scoped>
.select {
  height: 100%;
  background: #f2f2f2;
  border-radius: 8px;
  padding: 10px;

}
.god-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  min-width: 70ch;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin: 0;
}
.add-button {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  height: 36px;
  margin: 0px;
  background: #ff2c54;
  border-radius: 8px;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
}
</style>
