<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp-role">
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-calendar-month-outline"></v-icon>
      <h2>سجل النشاط</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <!-- start filters -->

        <div class="filters">
          <div class="filter-icon">
            <v-icon size="40" icon="mdi-filter-outline"></v-icon>
          </div>

          <div class="select-don-activites">
            <label> المشرف:</label>
            <v-select
              v-model="userId"
              clearable
              variant="plain"
              placeholder="المشرف"
              no-data-text="لايوجد بيانات"
              :items="userData"
              item-title="name"
              item-value="id"
            ></v-select>
          </div>
          <div class="select-don-activites">
            <label> الاجراء:</label>
            <v-select
              v-model="actionType"
              clearable
              variant="plain"
              placeholder="الاجراء"
              no-data-text="لايوجد بيانات"
              :items="ActionTypeEnm"
              item-title="name"
              item-value="value"
            ></v-select>
          </div>
          <div class="select-don-date">
            <VueDatePicker
              v-model="date"
              model-type="yyyy/MM/dd"
              placeholder="التاريخ"
              class="date-picker"
              auto-apply
            ></VueDatePicker>
          </div>
        </div>
      </div>
    </v-card-text>

    <v-table class="table-role ma-5">
      <thead>
        <tr class="bg-primary">
          <th class="text-center text-white">المشرف</th>
          <th class="text-center text-white">الاجراء</th>
          <th class="text-center text-white">التاريخ</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="item in activitesData" :key="item.id">
          <td class="">{{ item.name }}</td>
          <td>{{ item.descriptionAction }}</td>
          <!-- <td v-if="item.descriptionAction === 'حذف'" :class="['red']">
            {{ item.descriptionAction }}
          </td>
          <td
            v-else-if="item.descriptionAction === 'تعديل'"
            :class="['yellow']"
          >
            {{ item.descriptionAction }}
          </td>
          <td v-else :class="['blue']">{{  item.descriptionAction }}</td> -->
          <td>{{ dayjs(item.insertDate).format("YYYY-MM-DD") }}</td>
        </tr>
      </tbody>
    </v-table>
    <!-- pagination  -->
    <div class="pag">
      <v-container class="pagination">
        <button :disabled="activitesData.length < 10" @click="nextPage">
          &lt;
        </button>
        <button
          v-if="activitesData.length >= 10"
          :disabled="activitesData.length < 10"
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
    </div>
    <!-- pagination  -->
  </v-card>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import dayjs from "dayjs";
import { ref, onMounted, watch } from "vue";
import axios from "@/server/axios";
const isLoading = ref(false);

// .............pagination.............
function nextPage() {
  numberOfPage.value++;
  isLoading.value = true;
  getRecordActivities();
}
function previousPage() {
  numberOfPage.value--;
  isLoading.value = true;
  getRecordActivities();
}
onMounted(() => {
  getRecordActivities();
  getUsersForQuery();
});
const userData = ref([]);
function getUsersForQuery() {
  axios
    .get("Admin/GetUsersForQuery")
    .then((res) => {
      userData.value = res.data;
      console.log(userData.value);
    })
    .catch((err) => {
      console.log(err);
    });
}
const activitesData = ref({});
const numberOfPage = ref(1);
const NumberOfItemPerPage = ref(10);
const actionType = ref();
const userId = ref();
const date = ref();
function getRecordActivities() {
  isLoading.value = true;
  axios
    .get(
      `Admin/GetRecordActivities?numberOfPage=${
        numberOfPage.value
      }&NumberOfItemPerPage=${NumberOfItemPerPage.value}&actionType=${
        actionType.value ? actionType.value : (actionType.value = "")
      }&userId=${userId.value ? userId.value : (userId.value = "")}&date=${
        date.value ? date.value : (date.value = "")
      }`
    )
    .then((res) => {
      activitesData.value = res.data;
      console.log(activitesData.value);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}
function getDescriptionStyle() {
  if (activitesData.value.descriptionAction === "حذف") {
    return { color: "red" };
  } else if (activitesData.value.descriptionAction === "تعديل") {
    return { color: "yellow" };
  } else {
    return { color: "blue" };
  }
}
watch(() => {
  if (actionType.value || date.value || userId.value) {
    getRecordActivities();
  } else {
    getRecordActivities();
  }
});
const ActionTypeEnm = ref([
  { name: "اضافة", value: 0 },
  { name: "تعديل", value: 1 },
  { name: "حذف", value: 2 },
  { name: "رفع ملف اكسل", value: 3 },
  { name: "تنزيل ملف اكسل", value: 4 },
]);
</script>
<style scoped>
.card-temp-role {
  margin: 1px 10px 7px 7px;
  border-radius: 16px;
  width: 100%;
  height: 120vh;
}
.grid-role {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 55%);
  column-gap: 1px;
  row-gap: 1em;
  height: 70vh;
}
.filters {
  display: grid;
  grid-template-columns: 3% 31% 31% 31%;
  column-gap: 5px;
  row-gap: 1em;
  width: 100%;
  height: 10vh;
  margin: 0px 5px;
}
.filter-icon {
  margin-bottom: 10px;
}
.select-don-activites {
  height: 52px;
  border: 1px solid#BDBDBD;
  background-color: #ffff;
  border-radius: 8px;
  display: flex;
  padding-right: 10px;
  padding-top: 12px;
  align-items: center;
  justify-content: center;
}
.select-don-date {
  border-radius: 8px;
}
.table-body {
  background-color: rgba(255, 44, 84, 0.05);
  text-align: center;
}
.red {
  color: red;
}

.yellow {
  color: yellow;
}

.blue {
  color: blue;
}
</style>
