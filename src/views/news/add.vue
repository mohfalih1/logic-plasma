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
        <div class="d-flex justify-space-between align-center">
          <h4>fggfgfgf</h4>
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
        <div>
          dmkfdfndnfdnfdnfdjfndnfdfjdnfkdndvdncdvndvdkcdnvdksvndcsksnv nsc sncsk
        </div>

        <br />
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          class="news-image mx-auto"
          cover
          width="680px"
          height="348px"
        ></v-img>

        <br />
        <v-card-actions>
          <v-btn
            class="add-edit-button pa-5"
            prepend-icon="mdi-square-edit-outline"
            :color="primary"
            variant="text"
            >تعديل الخبر
          </v-btn>
          <v-btn
            class="add-delete-button pa-5"
            prepend-icon="mdi-trash-can-outline"
            color="white"
            variant="text"
            >مسح الخبر
          </v-btn>
          <v-btn
            prepend-icon="mdi-greater-than"
            to="/news"
            class="add-back-button pa-5"
            color="white"
            variant="text"
          >
            العودة
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>

<script setup>
import { primary } from "@/assets/style";
import { ref, onMounted } from "vue";
const model = ref("AR");
onMounted(() => {
  return model.value;
});
</script>
<style scoped>
.add-button {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;

  height: 36px;
  margin: 0px;

  /* mainColor */
  background: #ff2c54;
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
}
</style>
