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
        <v-btn
          to="/import-export/export"
          class="add"
          rounded="0"
          height="50"
          elevation="0"
        >
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>تنزيل بيانات المتطوعين</h3>
        </v-btn>
      </div>
    </v-card-text>
    <div class="ma-5">
      <h3>رفع متطوعين بصيغة Excel مشابه للقالب التالي:</h3>
    </div>
    <div class="ma-5">
      <table>
        <tr>
          <th>blood_type</th>
          <th>number</th>
          <th>name</th>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
    <div class="filters">
      <div class="select-don-home">
        <v-select
          v-model="query.governorate"
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
          v-model="query.donorType"
          clearable
          variant="plain"
          placeholder="نوع التبرع"
          no-data-text="لايوجد بيانات"
          :items="donorTypes"
          item-title="name"
          item-value="value"
        ></v-select>
      </div>
    </div>
    <v-card-actions class="pa-5 mb-5">
      <div class="d-flex ma-0">
        <v-btn
          @click="isuplaodDialog = true"
          class="import-delte-button"
          color="red"
          variant="text"
        >
          <v-icon icon="mdi-tray-arrow-up" size="22"></v-icon>
          رفع البيانات المتبرعين
        </v-btn>
        <v-btn
          @click="downloadTemplate()"
          class="import-edit-button"
          color="white"
          variant="text"
        >
          تنزيل القالب
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
  <!--start uplaodDialog  -->
  <v-row justify="center">
    <v-dialog v-model="isuplaodDialog" persistent width="300">
      <v-card rounded="xl" height="300">
        <v-card-title class="text-center text-primary pb-0">
          <span> رفع ملف المتبرعين</span>
        </v-card-title>
        <v-card-text>
          <div class="d-flex justify-center align-center">
            <v-file-input
              class="mt-15"
              v-model="file"
              accept=".xlsx"
              label="اختر ملف"
              variant="filled"
            >
            </v-file-input>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <div class="d-flex align-center justify-center my-1">
            <v-btn
              @click="uploadExcelFileForDoner()"
              class="delete-button"
              color="white"
              variant="text"
            >
              رفع
            </v-btn>
            <v-btn
              @click="isuplaodDialog = false"
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
  <!--end uplaodDialog  -->
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import axios from "@/server/axios";
import { createExcelTemplate } from "@/utils/excel-template";
import { downloadExcelFile } from "@/utils/download-excel";
import { ref, reactive, onMounted } from "vue";
const isLoading = ref(false);
const isuplaodDialog = ref(false);

onMounted(() => {
  getGovernorates();
});

const governorates = ref([]);
function getGovernorates() {
  axios
    .get(`Admin/GetGovernoratesForStatistics`)
    .then((res) => {
      governorates.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
const query = reactive({
  governorate: null,
  donorType: null,
});
const file = ref("");
function uploadExcelFileForDoner() {
  const formData = new FormData();
  formData.append("file", file.value[0]);
  axios
    .post(
      `Admin/UploadExcelFileForDoner?governorate=${query.governorate}&donorType=${query.donorType}`,
      formData
    )
    .then((res) => {
      console.log(res);
      isuplaodDialog.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
}
function downloadTemplate() {
  const workbook = createExcelTemplate();
  downloadExcelFile(workbook, "temDoners.xlsx");
}

const donorTypes = ref([
  { name: "دم", value: 0 },
  { name: "بلازما", value: 1 },
]);

</script>
<style scoped>
.filters {
  display: grid;
  grid-template-columns: repeat(2, 48%);
  grid-template-rows: repeat(auto-fit, 50px);
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

table,
td,
th {
  border: 1px solid black;
  border-radius: 10px;
}
table {
  border-collapse: collapse;
  width: 97%;
}
th,
td {
  height: 40px;
}
th {
  background-color: #f2f2f2;
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
  background: #ff2c54;
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
