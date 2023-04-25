<template>
  <v-card
    class="mr-3 mb-7 ml-7 mt-1 rounded-lg"
    elevation="5"
    width="98.8%"
    height="83vh"
  >
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-virus-outline"></v-icon>
      <h2>الامراض المزمنة</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض الامراض المزمنة</h3></div>
        <v-btn
          @click="dialog = true"
          class="add"
          rounded="0"
          height="50"
          elevation="0"
        >
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة مرض مزمن</h3>
        </v-btn>
      </div>
    </v-card-text>
    <div class="grid-donations ma-5">
      <v-card
        class="chronic-card pb-0"
        v-for="item in store.chronic"
        :key="item.arabic"
      >
        <div class="news-title">
          <v-icon icon="mdi-virus-outline" class="ml-2"></v-icon>
          {{ item.arabic }}
        </div>
        <div class="news-title">
          <v-icon icon="mdi-virus-outline" class="ml-2"></v-icon>
          {{ item.english }}
        </div>
        <br />
        <v-card-actions class="pa-0 mb-0">
          <div class="d-flex ma-0">
            <v-btn class="chronic-edit-button" color="white" variant="text">
              <v-icon icon="mdi-square-edit-outline" size="22"></v-icon>
              تعديل
            </v-btn>
            <v-btn class="chronic-delte-button" color="red" variant="text">
              <v-icon icon="mdi-trash-can-outline" size="22"></v-icon>
              حذف
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>

  <!-- start add chronic -->
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="262">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> اضافة مرض مزمن</span>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-container>
            <v-form>
              <v-col cols="12">
                <div class="select">
                  <v-icon color="red" icon="mdi-virus-outline"></v-icon>
                  <v-text-field
                    class="text-center"
                    clearable
                    variant="plain"
                    placeholder="اضافة مرض مزمن.."
                    type="text"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="select">
                  <v-text-field
                    clearable
                    variant="plain"
                    placeholder="Enter chronic disease..."
                    type="text"
                  ></v-text-field>
                  <v-icon color="red" icon="mdi-virus-outline"></v-icon>
                </div>
              </v-col>
            </v-form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- end add chronic -->
</template>
<script setup>
import { primary } from "@/assets/style";
import { useCounterStore } from "@/store/app";
import { ref } from "vue";
const store = useCounterStore();
const dialog = ref(false);
</script>
<style scoped>
.grid-donations {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, 262px);
  column-gap: 1px;
  row-gap: 1em;
}
.select {
  height: 40px;
  background: #f2f2f2;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
