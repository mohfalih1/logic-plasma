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
    <div class="d-flex justify-center align-center h-75">
      <v-card elevation="0">
        <div class="active-button" width="100%">
          <div>
            <v-img
              class="image-translate ma-0"
              src="@/assets/Frame 88.svg"
              width="50px"
              height="36px"
            ></v-img>
          </div>
          <div>
            <v-btn class="lang-button" elevation="0" rounded="0">العربية</v-btn>
            <v-btn class="ma-0" elevation="0" rounded="0">English</v-btn>
          </div>
        </div>

        <br />
        <v-text-field variant="plain" class="h-50" placeholder="عنوان الخبر...">
        </v-text-field>

        <br />
        <v-textarea variant="plain"  label="محتوى الخبر..."> </v-textarea>
        <v-card class="drag-box mb-3" >
         <v-file-input
         class="drag-box-content"
         variant="plain"
    v-model="file"
    accept="image/*"
    @change="uploadFile"
    show-size
    prepend-icon="mdi-image-plus-outline"
  ></v-file-input>
        </v-card>
        <v-card-actions>
          <v-btn class="add-edit-button pa-5" :color="primary" variant="text">
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
    </div>
  </v-card>
</template>
<script setup>
import { primary } from "@/assets/style";
import { ref } from "vue";
const file=ref(null)
async function uploadFile() {
      const formData = new FormData();
      formData.append("file", this.file);

      // Send formData to server for upload
      // Here, you can use axios or any other HTTP library to send the form data to your server

      console.log("File uploaded successfully!");
    };

</script>
<style scoped>
.drag-box {
  position: relative;
  width: 425px;
  height: 200px;
  background-color: #FFC0CC;
}

.drag-box-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.active-button {
  border: 1px solid #ffffff;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: start;
  align-items: start;
}
.image-translate {
  overflow: hidden;
}
.lang-button {
  background-color: #ff2c54;
  color: white;
}
</style>
