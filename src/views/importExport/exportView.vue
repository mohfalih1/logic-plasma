<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp">
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-export-variant"></v-icon>
      <h2>رفع / تنزيل بيانات المستخدمين</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>رفع بيانات المستخدمين</h3></div>
        <v-btn class="add" rounded="0" height="50" elevation="0">
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>تنزيل بيانات المستخدمين</h3>
        </v-btn>
      </div>
    </v-card-text>
    <!-- start filters -->
    <div class="filters">
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
      <div class="select-don-date">
        <VueDatePicker
          v-model="filter.DateFrom"
          model-type="yyyy/MM/dd"
          placeholder="من"
          class="dp__pointer"
          auto-apply
        ></VueDatePicker>
      </div>
      <div
        class="select-don-date"
        style="margin-left: 12px; margin-right: -7px"
      >
        <VueDatePicker
          v-model="filter.DateTo"
          model-type="yyyy/MM/dd"
          placeholder="الى"
          class="dp__pointer"
          auto-apply
        ></VueDatePicker>
      </div>
    </div>
    <v-table class="table-role ma-5" v-if="donerData.length > 0">
      <thead>
        <tr class="bg-primary">
          <th class="text-center text-white">الاسم</th>
          <th class="text-center text-white">الهاتف</th>
          <th class="text-center text-white">فصيلة الدم</th>
          <th class="text-center text-white">المحافظة</th>
          <th class="text-center text-white">لديه مرض مزمن</th>
          <th class="text-center text-white">نوع المرض المزمن</th>
          <th class="text-center text-white">نوع التبرع</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="item in donerData" :key="item.id">
          <td class="">{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.bloodGroup }}</td>
          <td>{{ item.governorate }}</td>
          <td>{{ item.hasChronicDisease }}</td>
          <td>{{ item.chronicDiseases }}</td>
          <td>{{ item.donorType }}</td>
        </tr>
      </tbody>
    </v-table>

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
          تنزيل بيانات المستخدمين
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
  // ExportDoner();
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
const donerData = ref([]);
function ExportDoner() {
  const filterQuery = Object.entries(filter)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  axios
    .get(`Admin/ExportDoner?${filterQuery}`)
    .then((res) => {
      donerData.value = res.data;
    })
    .catch((err) => {});
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
  { name: "كلاهما", value: 2 },
]);
const subscribersType = ref([
  { name: "مستخدم", value: 0 },
  { name: "مستفيد", value: 1 },
]);

const ChronicDisease = ref([
  { name: "يوجد", value: true },
  { name: "لا يوجد", value: false },
]);
watch(
  () => filter,
  (newVal, oldVal) => {
    ExportDoner();
  },

  { deep: true }
);
</script>
<style scoped>
.select-don-date {
  height: 52px;
  width: 8.5rem;

  background-color: #ffff;
  border-radius: 8px;
  display: flex;
  padding-right: 2px;
  align-items: center;
  justify-content: center;
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
  grid-template-columns: repeat(auto-fit, 130px);
  gap: 1rem;
  margin-right: 15px;
  margin-top: 1rem;
}
.dp__pointer {
  height: 52px !important;
  border-radius: 8px;
  border: none !important;
  cursor: pointer;
  height: 51px !important;
  padding-right: -10px !important;
}
.dp__main {
  height: 52px !important;
  --dp-border-color: #bdbdbd;
}
.dp__main :deep(.dp__pointer) {
  height: 52px !important;
}
.select-don-home {
  width: 8.5rem;
  height: 52px;
  border: 1px solid#BDBDBD;
  background-color: #ffff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
.table-body {
  background-color: rgba(255, 44, 84, 0.05);
  text-align: center;
}
</style>
