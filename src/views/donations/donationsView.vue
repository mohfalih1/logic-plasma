<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp">
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-hand-heart-outline"></v-icon>
      <h2>المستخدمين</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض المستخدمين</h3></div>
        <v-btn
          @click="opnenAdd()"
          class="add"
          rounded="0"
          height="50"
          elevation="0"
        >
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة مستخدم</h3>
        </v-btn>
      </div>
    </v-card-text>
    <!-- start filters -->

    <div class="filters">
      <div class="select-don-home">
        <v-text-field
          v-model="filter.search"
          clearable
          append-icon="mdi-magnify"
          :variant="null"
          placeholder="بحث اسم او رقم هاتف"
          no-data-text="لايوجد بيانات"
        ></v-text-field>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.governorate"
          clearable
          :variant="null"
          placeholder="المدينة"
          no-data-text="لايوجد بيانات"
          :items="governorates"
          item-title="nameArabic"
          item-value="id"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.donorType"
          clearable
          :variant="null"
          placeholder="نوع التبرع"
          no-data-text="لايوجد بيانات"
          :items="donorTypes"
          item-title="name"
          item-value="value"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.bloodGroup"
          clearable
          :variant="null"
          placeholder="نوع الزمرة"
          no-data-text="لايوجد بيانات"
          :items="bloodGroups"
          item-title="name"
          item-value="value"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.HaveChronicDisease"
          clearable
          :variant="null"
          placeholder="امراض مزمنة"
          no-data-text="لايوجد بيانات"
          :items="ChronicDisease"
          item-title="name"
          item-value="value"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.TypeChronicDisease"
          clearable
          :variant="null"
          placeholder="نوع المرض المزمن"
          no-data-text="لايوجد بيانات"
          :items="typeChronicDisease"
          item-title="nameArabic"
          item-value="id"
        ></v-select>
      </div>
    </div>

    <!-- end filters -->
    <br />
    <div
      v-if="donations.length === 0"
      class="d-flex justify-center align-center mt-10"
    >
      <h3>لا يوجد مستخدمين لعرضهم !</h3>
    </div>
    <!-- <div class="grid-donations mt-5 mr-5 ml-1"> -->
    <div class="grid-donations">
      <v-card class="donations-card" v-for="item in donations" :key="item.id">
        <div class="news-title mb-2">
          <v-icon icon="mdi-hand-heart-outline" class="ml-2"></v-icon>
          {{ item.name }}
        </div>
        <div>المحافظة:{{ item.governorate }}</div>
        <div>رقم الهاتف:{{ item.phone }}</div>
        <div>نوع التبرع:{{ item.donorType === 0 ? "دم" : "بلازما" }}</div>
        <div>زمرة الدم:{{ bloodGroups[item?.bloodGroup]?.name }}</div>
        <v-card-actions class="pa-0">
          <v-btn
            @click="opnenShow()"
            class="don-button"
            :to="`/donations/${item.id}`"
            color="white"
            variant="text"
            >عرض المستخدم
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <br />
    <br />
    <!-- </div> -->
    <!-- pagination  -->
    <v-container class="pagination">
      <button :disabled="donations.length < 8" @click="nextPage">&lt;</button>
      <button
        v-if="donations.length >= 8"
        :disabled="donations.length < 8"
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

    <!-- pagination  -->
  </v-card>

  <!--start add snackbar  -->
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
  <!--end add snackbar  -->
  <!--start delet snackbar  -->
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
  <!--end add snackbar  -->
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import { ref, onMounted, reactive, watch } from "vue";
import router from "@/router";
import axios from "@/server/axios";
import { useCounterStore } from "@/store/app";
const store = useCounterStore();
const isLoading = ref(false);
onMounted(() => {
  getDoner();
  getGovernorates();
  getChronicDisease();
});
function opnenShow() {
  store.dialog = true;
}
function opnenAdd() {
  store.dialog = true;
  router.push("/donations/donations-add");
}
const governorates = ref([]);
function getGovernorates() {
  axios
    .get(`Admin/GetGovernoratesForStatistics`)
    .then((res) => {
      governorates.value = res.data;
    })
    .catch((err) => {});
}
const typeChronicDisease = ref([]);
function getChronicDisease() {
  axios
    .get(`Admin/GetChronicDiseaseForStatistics`)
    .then((res) => {
      typeChronicDisease.value = res.data;
      console.log(typeChronicDisease.value + "fffffffffffffff");
    })
    .catch((err) => {});
}
const filter = reactive({
  bloodGroup: null,
  donorType: null,
  governorate: null,
  HaveChronicDisease: null,
  TypeChronicDisease: null,
  search: null,
});

const donations = ref([]);

const numberOfPage = ref(1);
const numberOfItemPerPage = ref(8);
function getDoner() {
  isLoading.value = true;
  const filteredQuery = Object.entries(filter)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  axios
    .get(
      `Admin/GetDoner?${filteredQuery}&numberOfPage=${numberOfPage.value}&NumberOfItemPerPage=${numberOfItemPerPage.value}`
    )
    .then((res) => {
      donations.value = res.data;
      console.log(donations.value);
    })
    .catch((err) => {})
    .finally(() => {
      isLoading.value = false;
    });
}
// ...............filters ............
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
const donorTypes = ref([
  { name: "دم", value: 0 },
  { name: "بلازما", value: 1 },
]);

const ChronicDisease = ref([
  { name: "يوجد", value: true },
  { name: "لا يوجد", value: false },
]);
// .............pagination.............
function nextPage() {
  numberOfPage.value++;
  isLoading.value = true;
  getDoner();
}
function previousPage() {
  numberOfPage.value--;
  isLoading.value = true;
  getDoner();
}
watch(() => {
  if (
    filter.HaveChronicDisease ||
    filter.TypeChronicDisease ||
    filter.bloodGroup ||
    filter.donorType ||
    filter.governorate ||
    filter.search
  ) {
    getDoner();
  } else {
    getDoner();
  }
});
</script>
<style scoped>
.filters {
  margin-right: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 16%);
  column-gap: 7px;
  row-gap: 1em;
  margin-top: 1rem;
}
.filter-icon {
  margin: 5px;
}

.select-don-home {
  width: 100%;
  height: 50px;
  border: 1px solid#BDBDBD;
  background-color: #ffff;
  border-radius: 8px;
  display: flex;
  padding-right: -20px;
  padding-top: 20px;
  padding-left: -10px;
  align-items: center;
  justify-content: center;
}
.don-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  width: 100%;
  margin-top: auto;
  background: #ff2c54;
  border-radius: 999999px;
}
</style>
