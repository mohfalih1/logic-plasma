<template>
  <v-card
    class="mr-3 mb-7 ml-7 mt-1 rounded-lg"
    elevation="5"
    width="98.8%"
    height="90vh"
  >
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-hand-heart-outline"></v-icon>
      <h2>المتبرعين</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض المتبرعين</h3></div>
        <v-btn class="add" rounded="0" height="50" elevation="0">
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة متبرع</h3>
        </v-btn>
      </div>
    </v-card-text>
    <!-- start filters -->

    <div class="filters">
      <div class="filter-icon">
        <v-icon size="40" icon="mdi-filter-outline"></v-icon>
      </div>
      <div class="select">
        <v-text-field
          clearable
          append-icon="mdi-magnify"
          variant="plain"
          placeholder="بحث.."
          no-data-text="لايوجد بيانات"
        ></v-text-field>
      </div>
      <div class="select">
        <v-select
          clearable
          variant="plain"
          placeholder="المدينة"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
      <div class="select">
        <v-select
          clearable
          variant="plain"
          placeholder="نوع التبرع"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
      <div class="select">
        <v-select
          clearable
          variant="plain"
          placeholder="نوع الزمرة"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
      <div class="select">
        <v-select
          clearable
          variant="plain"
          placeholder="امراض مزمنة"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
      <div class="select">
        <v-select
          clearable
          variant="plain"
          placeholder="نوع المرض المزمن"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
    </div>
    <!-- end filters -->
    <br />

    <div class="grid-donations ma-5">
      <v-card
        class="donations-card"
        v-for="item in store.donations"
        :key="item.name"
      >
        <div class="news-title">
          <v-icon icon="mdi-hand-heart-outline" class="ml-2"></v-icon>
          {{ item.name }}
        </div>
        <br />
        <div>المحافظة:{{ item.city }}</div>
        <div>رقم الهاتف:{{ item.phoneNumber }}</div>
        <div>نوع التبرع:{{ item.typeBlood }}</div>
        <div>زمرة الدم:{{ item.typeBlood }}</div>

        <div class="news-date"></div>

        <v-card-actions class="pa-0">
          <v-btn
            @click="opnenShow()"
            class="news-button"
            color="white"
            variant="text"
            >عرض المتبرع
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/app";
import router from "@/router";
const store = useCounterStore();
function opnenShow() {
  store.dialog = true;
  router.push("/donations/donations-show");
}
</script>
<style scoped>
.filters {
  display: grid;
  grid-template-columns: 3% repeat(6, 16%);
  grid-template-rows: repeat(auto-fit, 50px);
  column-gap: 1px;
  row-gap: 1em;
}
.filter-icon {
  margin: 5px;
}
.select {
  height: 52px;
  border: 1px solid#BDBDBD;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}
.grid-donations {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, 262px);
  column-gap: 1px;
  row-gap: 1em;
}
.donations-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 8px;
  gap: 8px;
  width: 262px;
  height: 250px;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}
</style>
