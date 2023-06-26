<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp"
    ><v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-speedometer"></v-icon>
      <h2>الاحصائيات</h2>
    </v-card-title>
    <v-card-text>
      <!-- start filters -->

      <div class="filters">
        <div class="filter-icon">
          <v-icon size="40" icon="mdi-filter-outline"></v-icon>
        </div>
        <div class="select-don-home">
          <v-select
            v-model="query.bloodGroup"
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
            v-model="query.subscribersType"
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
            v-model="query.HaveChronicDisease"
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
            v-model="query.TypeChronicDisease"
            clearable
            variant="plain"
            placeholder="نوع المرض المزمن"
            no-data-text="لايوجد بيانات"
            :items="typeChronicDisease"
            item-title="nameArabic"
            item-value="id"
          ></v-select>
        </div>
        <div class="select-don-date">
          <VueDatePicker
            v-model="query.DateFrom"
            model-type="yyyy/MM/dd"
            placeholder="من"
            class="date-picker"
            auto-apply
          ></VueDatePicker>
        </div>
        <div class="select-don-date">
          <VueDatePicker
            v-model="query.DateTo"
            model-type="yyyy/MM/dd"
            placeholder="الى"
            class="date-picker"
            auto-apply
          ></VueDatePicker>
        </div>
        <!-- <fieldset class="select-don-home-date">
          <legend>من</legend>
          <input class="date-input" v-model="query.DateFrom" type="date" />
        </fieldset>

        <fieldset class="select-don-home-date">
          <legend>الى</legend>
          <input class="date-input" v-model="query.DateTo" type="date" />
        </fieldset> -->
      </div>

      <v-container>
        <v-row no-gutters class="mt-0">
          <!-- start graph-card  -->

          <v-col cols="8">
            <v-sheet class="pa-2 ma-2" width="100%">
              <div id="chart" class="graph-card">
                <apexchart
                  class="apex-chart"
                  type="line"
                  height="452"
                  width="100%"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </div>
            </v-sheet>
          </v-col>
          <!-- end graph-card  -->
          <!-- start donors-card  -->

          <v-col cols="3">
            <v-sheet class="pa-2 ma-2">
              <div class="donors-card">
                <div>
                  <h2>{{ statistics.totalStatisticsForDoners }}</h2>
                  <br />
                  <h6>مجموع عدد المتبرعين</h6>
                </div>

                <div>
                  <v-img
                    width="125"
                    height="66"
                    src="@/assets/Pulse.svg"
                  ></v-img>
                </div>
              </div>
            </v-sheet>
            <v-sheet class="pa-2 ma-2">
              <div class="donors-card">
                <div>
                  <h2>{{ statistics.totalStatisticsForRecipients }}</h2>
                  <br />
                  <h6>مجموع عدد المستفيدين</h6>
                </div>

                <div>
                  <v-img
                    width="125"
                    height="66"
                    src="@/assets/Pulse.svg"
                  ></v-img>
                </div>
              </div>
            </v-sheet>
            <v-sheet class="pa-2 ma-2">
              <div class="donors-card">
                <div>
                  <h2>{{ statistics.totalStatisticsForHaveChronicDisease }}</h2>
                  <br />
                  <h6>العدد الكلي للامراض المزمنة</h6>
                </div>

                <div>
                  <v-img
                    width="125"
                    height="66"
                    src="@/assets/Virus.svg"
                  ></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- end donors-card  -->

        <!-- start type Boold  -->
        <v-row no-gutters>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>+A</h2>
                  <br />
                  <h6>{{ statistics.aPositive }}</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>+O</h2>
                  <br />
                  <h6>{{ statistics.oPositive }}</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>+B</h2>
                  <br />
                  <h6>{{ statistics.bPositive }}</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>+AB</h2>
                  <br />
                  <h6>{{ statistics.abPositive }}</h6>
                </div>

                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>-A</h2>
                  <br />
                  <h6>{{ statistics.aNegative }}</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>-O</h2>
                  <br />
                  <h6>{{ statistics.oNegative }}</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>-B</h2>
                  <br />
                  <h6>{{ statistics.bNegative }}</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>-AB</h2>
                  <br />
                  <h6>{{ statistics.abNegative }}</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <!-- end type Boold  -->
    </v-card-text>

    <!-- <div class="svg">
      <img src="@/assets/Group 4.svg" alt="" width="" />
    </div> -->
  </v-card>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import { ref, onMounted, watch } from "vue";
import { primary } from "@/assets/style";
import axios from "@/server/axios";
const isLoading = ref(false);
const hi = ref("الاحصائيات");
onMounted(() => {
  getStatistics();
  getStatsGraph();
  getGovernorates();
  getChronicDisease();
});

// ................API................
const statistics = ref([]);
const query = ref({
  bloodGroup: null,
  donorType: null,
  governorate: null,
  subscribersType: null,
  DateFrom: null,
  DateTo: null,
  HaveChronicDisease: null,
  TypeChronicDisease: null,
});
function getStatistics() {
  // const filteredQuery = Object.entries(query.value)
  //   .filter(([key, value]) => value !== null)
  //   .map(([key, value]) => `${key}=${value}`)
  //   .join("&");
  axios
    .get(`Admin/GetStatistics`, {
      params: {
        bloodGroup: query.value.bloodGroup,
        donorType: query.value.donorType,
        governorate: query.value.governorate,
        subscribersType: query.value.subscribersType,
        DateFrom: query.value.DateFrom,
        DateTo: query.value.DateTo,
        HaveChronicDisease: query.value.HaveChronicDisease,
        TypeChronicDisease: query.value.TypeChronicDisease,
      },
    })
    .then((res) => {
      statistics.value = res.data;
      console.log(statistics.value);
    })
    .catch((err) => {
      console.log(err);
    });
}
const year = ref(2023);

const statisticsGraph = ref([]);
function getStatsGraph() {
  isLoading.value = true;
  axios.get(`Admin/GetStatisticsForGraph?year=${year.value}`).then((res) => {
    statisticsGraph.value = res.data;
    series.value[0].data = statisticsGraph.value.subscribersBloodByMonth.map(
      (item) => item.count
    );
    series.value[1].data = statisticsGraph.value.subscribersPlasmaByMonth.map(
      (item) => item.count
    );
    isLoading.value = false;
  });
}
const governorates = ref([]);
function getGovernorates() {
  axios
    .get(`Admin/GetGovernoratesForStatistics`)
    .then((res) => {
      governorates.value = res.data;
      console.log(governorates.value + "fffffffffffffff");
    })
    .catch((err) => {
      console.log(err);
    });
}
const typeChronicDisease = ref([]);
function getChronicDisease() {
  axios
    .get(`Admin/GetChronicDiseaseForStatistics`)
    .then((res) => {
      typeChronicDisease.value = res.data;
      console.log(typeChronicDisease.value + "fffffffffffffff");
    })
    .catch((err) => {
      console.log(err);
    });
}
const series = ref([
  {
    name: " دم ",
    data: [],
  },
  {
    name: " بلازما",
    data: [],
  },
]);

const chartOptions = ref({
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  colors: [primary, "#292D30"],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "الاحصائيات",
    align: "top",
  },

  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    title: {
      text: "",
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
});

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
  if (
    query.value.bloodGroup ||
    query.value.donorType ||
    query.value.HaveChronicDisease ||
    query.value.DateFrom ||
    query.value.DateTo
  ) {
    getStatistics();
  } else {
    getStatistics();
  }
});
</script>
<style scoped>
.select-don-date {
  height: 52px;

  border-radius: 8px;
  display: flex;
  padding-right: 2px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-top: 0;
}
.date-input {
  border: none;
  background-color: transparent;
  color: #bdbdbd;
  text-align: center;
  outline: none;
}

@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");
.filters {
  display: grid;
  grid-template-columns: 3% repeat(8, 12%);
  column-gap: 1px;
  row-gap: 1em;
}
.filter-icon {
  margin-bottom: 10px;
}
.select-don-date {
  border-radius: 8px;
}
.graph-card {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 100%;
  height: 100%;
}
.apex-chart {
  width: 100%;
  font-family: "Cairo", sans-serif;
}
.donors-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 16px;
  width: 340px;
  height: 140px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border: 1;
}
.donors-card h2 {
  font-size: 36px;
  font-weight: bold;
  color: red;
}
.donors-card h6 {
  font-size: 12px;
  font-weight: bold;
  color: black;
}
.group-card {
  box-sizing: border-box;
  overflow: hidden;
  padding: 20px;
  gap: 8px;
  isolation: isolate;
  width: 340px;
  height: 150px;
  background: #ffffff;
  border: 1px solid #ff2c54;
  border-radius: 16px;
}
.group-card h2 {
  font-size: 40px;
  font-weight: bold;
  color: red;
}
.group-card h6 {
  font-size: 28px;
  font-weight: 400;
  color: red;
}
.con {
  display: inline-block;
  align-items: center;
  justify-content: start;
  margin-right: 10px;
}
.red-img {
  margin-right: 220px;
  margin-top: -53px;
  width: 100%;
}
</style>
