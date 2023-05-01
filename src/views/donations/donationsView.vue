<template>
  <v-card class="card-temp">
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-hand-heart-outline"></v-icon>
      <h2>المتبرعين</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض المتبرعين</h3></div>
        <v-btn
          @click="opnenAdd()"
          class="add"
          rounded="0"
          height="50"
          elevation="0"
        >
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
      <div class="select-don-home">
        <v-text-field
          clearable
          append-icon="mdi-magnify"
          variant="plain"
          placeholder="بحث.."
          no-data-text="لايوجد بيانات"
        ></v-text-field>
      </div>
      <div class="select-don-home">
        <v-select
          clearable
          variant="plain"
          placeholder="المدينة"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          clearable
          variant="plain"
          placeholder="نوع التبرع"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          clearable
          variant="plain"
          placeholder="نوع الزمرة"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          clearable
          variant="plain"
          placeholder="امراض مزمنة"
          no-data-text="لايوجد بيانات"
        ></v-select>
      </div>
      <div class="select-don-home">
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
      <v-card class="donations-card" v-for="item in donations" :key="item.id">
        <div class="news-title">
          <v-icon icon="mdi-hand-heart-outline" class="ml-2"></v-icon>
          {{ item.name }}
        </div>
        <br />
        <div>المحافظة:{{ item.governorate }}</div>
        <div>رقم الهاتف:{{ item.phone }}</div>
        <div>نوع التبرع:{{ item.donorType === 0 ? "دم" : "بلازما" }}</div>
        <div>زمرة الدم:{{ bloodGroups[item?.bloodGroup]?.name }}</div>
        <v-card-actions class="pa-0">
          <v-btn
            @click="opnenShow()"
            class="news-button"
            :to="`/donations/${item.id}`"
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
import { ref, onMounted } from "vue";
import router from "@/router";
import axios from "@/server/axios";
import { useCounterStore } from "@/store/app";
const store = useCounterStore();
onMounted(() => {
  getDoner();
});
function opnenShow() {
  store.dialog = true;
}
function opnenAdd() {
  store.dialog = true;
  router.push("/donations/donations-add");
}
const donations = ref([]);
const numberOfPage = ref(4);
const numberOfItemPerPage = ref(15);
function getDoner() {
  axios
    .get(
      `Admin/GetDoner?numberOfPage=${numberOfPage.value}&numberOfItemPerPage=${numberOfItemPerPage.value}`
    )
    .then((res) => {
      donations.value = res.data;
      console.log(donations.value);
    })
    .catch((err) => {
      console.log(err);
    });
}
const bloodGroups = ref([
  {
    name: "A+",
    value: 0,
  },
  { name: "A-", value: 1 },
  { name: "B+", value: 2 },
  { name: "B-", value: 3 },
  { name: "AB+", value: 4 },
  { name: "AB-", value: 5 },
  { name: "O+", value: 6 },
  { name: "O-", value: 7 },
]);
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

.grid-donations {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, 262px);
  column-gap: 1px;
  row-gap: 1em;
}
</style>
