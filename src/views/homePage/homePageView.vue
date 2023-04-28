<template>
  <v-card
    class="mr-3 mb-7 ml-7 mt-1 rounded-lg"
    elevation="5"
    width="98.8%"
    height="auto"
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
            clearable
            variant="plain"
            placeholder="زمرة الدم"
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
            placeholder="المدينة"
            no-data-text="لايوجد بيانات"
          ></v-select>
        </div>
        <div class="select-don-home">
          <v-select
            clearable
            variant="plain"
            placeholder="نوع المستخدم"
            no-data-text="لايوجد بيانات"
          ></v-select>
        </div>
        <div class="select-don-home">
          <v-select
            clearable
            variant="plain"
            placeholder=" التاريخ"
            no-data-text="لايوجد بيانات"
          ></v-select>
        </div>
        <div class="select-don-home">
          <v-select
            clearable
            variant="plain"
            placeholder=" المرض المزمن"
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
      <!-- <label for="start-date">Start Date:</label>
          <input type="date" id="start-date" />

          <label for="end-date">End Date:</label>
          <input type="date" id="end-date" /> -->
      <!-- end filters -->
      <br />

      <v-container>
        <v-row no-gutters>
          <!-- start graph-card  -->

          <v-col cols="9">
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

          <v-col>
            <v-sheet class="pa-2 ma-2">
              <div class="donors-card">
                <div>
                  <h2>5600</h2>
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
                  <h2>5600</h2>
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
                  <h2>30</h2>
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

        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>+A</h2>
                  <br />
                  <h6>1200</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>+O</h2>
                  <br />
                  <h6>1200</h6>
                </div>
                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>+B</h2>
                  <br />
                  <h6>1200</h6>
                </div>

                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2">
              <div class="group-card">
                <div class="con">
                  <h2>+AB</h2>
                  <br />
                  <h6>1200</h6>
                </div>

                <div class="red-img">
                  <v-img width="100" src="@/assets/Group.svg"></v-img>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2"> </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2"> </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2"> </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2"> </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <!-- start card dononrs -->
      <div class="card-grid"></div>
      <!-- end card dononrs -->
    </v-card-text>

    <!-- <div class="svg">
      <img src="@/assets/Group 4.svg" alt="" width="" />
    </div> -->
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import { primary } from "@/assets/style";
const series = ref([
  {
    name: " دم ",
    data: [28, 29, 33, 36, 32, 32, 33],
  },
  {
    name: " بلازما",
    data: [12, 11, 14, 18, 17, 13, 13],
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
    // title: {
    //   text: "Month",
    // },
  },
  yaxis: {
    title: {
      text: "",
    },
    min: 5,
    max: 40,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
});
</script>

<style scoped>
.filters {
  display: grid;
  grid-template-columns: 3% repeat(7, 13.4%);
  grid-template-rows: repeat(auto-fit, 50px);
  column-gap: 1px;
  row-gap: 1em;
}
.filter-icon {
  margin-bottom: 10px;
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
  font-weight: bold;
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
label {
  display: block;
  margin-bottom: 10px;
}

input[type="date"] {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
}
</style>
