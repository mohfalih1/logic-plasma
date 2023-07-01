<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp">
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-export-variant"></v-icon>
      <h2>رفع / تنزيل بيانات المتبرعين</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>رفع بيانات المتطوعين</h3></div>
        <v-btn class="add" rounded="0" height="50" elevation="0">
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>تنزيل بيانات المتطوعين</h3>
        </v-btn>
      </div>
    </v-card-text>
    <!-- start filters -->
    <div class="filters">
      <div class="filter-icon">
        <v-icon size="40" icon="mdi-filter-outline"></v-icon>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.bloodGroup"
          clearable
          variant="plain"
          placeholder="زمرة الدم"
          no-data-text="لايوجد بيانات"
          :items="bloodGroups"
          item-title="name"
          item-value="value"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.donorType"
          clearable
          variant="plain"
          placeholder="نوع التبرع"
          no-data-text="لايوجد بيانات"
          :items="donorTypes"
          item-title="name"
          item-value="value"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.governorate"
          clearable
          variant="plain"
          placeholder="المدينة"
          no-data-text="لايوجد بيانات"
          :items="governorates"
          item-title="nameArabic"
          item-value="id"
        ></v-select>
      </div>
      <div class="select-don-home">
        <v-select
          v-model="filter.subscribersType"
          clearable
          variant="plain"
          placeholder="نوع المستخدم"
          no-data-text="لايوجد بيانات"
          :items="subscribersType"
          item-title="name"
          item-value="value"
        ></v-select>
      </div>

      <div class="select-don-home">
        <v-select
          v-model="filter.HaveChronicDisease"
          clearable
          variant="plain"
          placeholder=" المرض المزمن"
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
          variant="plain"
          placeholder="نوع المرض المزمن"
          no-data-text="لايوجد بيانات"
          :items="typeChronicDiseases"
          item-title="nameArabic"
          item-value="id"
        ></v-select>
      </div>
      <fieldset class="select-don-home-date">
        <legend>من</legend>
        <input class="input-date" v-model="filter.DateFrom" type="date" />
      </fieldset>
      <fieldset class="select-don-home-date">
        <legend>الى</legend>
        <input class="input-date" v-model="filter.DateTo" type="date" />
      </fieldset>
    </div>

    <!-- end filters -->
    <v-card-actions class="pa-5 mb-5">
      <div class="d-flex ma-0">
        <v-btn
          @click="downloadExcelFiles(clearFilter)"
          class="import-delte-button"
          color="red"
          variant="text"
        >
          <v-icon icon="mdi-export" size="22"></v-icon>
          تنزيل بيانات المتبرعين
        </v-btn>
        <v-btn
          to="/import-export"
          class="import-edit-button"
          color="white"
          variant="text"
        >
          <v-icon icon="mdi-greater-than"></v-icon>
          العودة
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import axios from "@/server/axios";
import { saveAs } from "file-saver";
import { watch } from "vue";
import { ref, reactive, onMounted } from "vue";

const isLoading = ref(false);

onMounted(() => {
  getChronicDisease();
  getGovernorates();
});
const typeChronicDiseases = ref([]);
function getChronicDisease() {
  axios
    .get(`Admin/GetChronicDiseaseForStatistics`)
    .then((res) => {
      typeChronicDiseases.value = res.data;
    })
    .catch((err) => {});
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
const filter = reactive({
  bloodGroup: null,
  donorType: null,
  governorate: null,
  DateFrom: null,
  DateTo: null,
  HaveChronicDisease: null,
  TypeChronicDisease: null,
});
async function downloadExcelFiles() {
  const filteredQuery = Object.entries(filter)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const response = await axios.get(
    `Admin/ExportExcelFileForDoner?${filteredQuery}`,
    {
      responseType: "blob", // Make sure to set the responseType to 'blob'
    }
  );
  // Get the content-type from the headers
  const contentType = response.headers;
  let x = await response.data;
  // Create a Blob from the response data
  const fileBlob = new Blob([x], { type: contentType });
  saveAs(fileBlob, "doner.xlsx");
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
const subscribersType = ref([
  { name: "متبرع", value: 0 },
  { name: "مستفيد", value: 1 },
]);

const ChronicDisease = ref([
  { name: "يوجد", value: true },
  { name: "لا يوجد", value: false },
]);
watch(() => {
  filter;
});
</script>
<style scoped>
.select-don-home-date {
  height: 52px;
  width: 50px;

  border: 1px solid#BDBDBD;
  background-color: #ffff;
  border-radius: 8px;
  display: flex;
  padding-right: 2px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-top: 0;
}
.input-date {
  border: none;
  background-color: transparent;
  color: #bdbdbd;
  text-align: center;
  outline: none;
}
.filters {
  display: grid;
  grid-template-columns: 3% repeat(8, 12%);
  grid-template-rows: repeat(1, 50px);
  column-gap: 1px;
  row-gap: 1em;
  margin-right: 15px;
}
.select-import-home {
  height: 52px;
  border: 1px solid#BDBDBD;
  background-color: #ffff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}

.import-edit-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  gap: 10px;
  width: 119px;
  height: 40px;
  background: #56ccf2;
  border-radius: 8px;
}
.import-delte-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 70%;
  height: 40px;
  background: #ffc0cc;
  border-radius: 8px;
}
</style>
