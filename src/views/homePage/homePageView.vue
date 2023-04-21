<template>
  <v-card
    class="mr-3 mb-7 ml-7 mt-1 rounded-lg"
    elevation="5"
    width="98.8%"
    height="83vh"
    ><v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-speedometer"></v-icon>
      <h2>الاحصائيات</h2>
    </v-card-title>
    <v-card-text>
      <!-- start filters -->
      <div class="filter-icon">
        <v-icon size="40" icon="mdi-filter-outline"></v-icon>
      </div>
        <div class="filters">
          <div class="select">
            <v-select
              clearable
              variant="plain"
              placeholder="المدينة"
              no-data-text="لايوجد بيانات"
            ></v-select>
          </div>
          <label for="start-date">Start Date:</label>
          <input type="date" id="start-date" />

          <label for="end-date">End Date:</label>
          <input type="date" id="end-date" />
        </div>
      <!-- end filters -->
      <br />
      <!-- start card dononrs -->

      <!-- <div class="donors-card">
        <div class="card-icon">
          <div class="d-flex justify-center align-center pa-10 rounded-xl">
            <v-card-title>
              <h2>5600</h2>
              <h6>العدد الكلي للمتبرعين</h6>
            </v-card-title>
            <v-card-text>
              <div class="sup-icon">
                <v-icon
                  class="child-icon"
                  color="primary"
                  icon="mdi-hand-heart-outline"
                ></v-icon>
              </div>
            </v-card-text>
          </div>
        </div>

     
     
      </div> -->
      <div class="card-grid">
        <div class="donors-card">
          <div>
            <h2>5600</h2>
            <h6>العدد الكلي للمتبرعين</h6>
          </div>

          <div class="sup-icon">
            <v-icon
              class="child-icon"
              color="primary"
              icon="mdi-hand-heart-outline"
            ></v-icon>
          </div>
        </div>
        <div class="donors-card">
          <div>
            <h2>5600</h2>
            <h6>العدد الكلي للمتبرعين</h6>
          </div>

          <div class="sup-icon">
            <v-icon
              class="child-icon"
              color="primary"
              icon="mdi-hand-heart-outline"
            ></v-icon>
          </div>
        </div>
        <div class="donors-card">
          <div>
            <h2>5600</h2>
            <h6>العدد الكلي للمتبرعين</h6>
          </div>

          <div class="sup-icon">
            <v-icon
              class="child-icon"
              color="primary"
              icon="mdi-hand-heart-outline"
            ></v-icon>
          </div>
        </div>
        <div class="donors-card">
          <div>
            <h2>5600</h2>
            <h6>العدد الكلي للمتبرعين</h6>
          </div>

          <div class="sup-icon">
            <v-icon
              class="child-icon"
              color="primary"
              icon="mdi-hand-heart-outline"
            ></v-icon>
          </div>
        </div>
        <div class="donors-card">
          <div>
            <h2>5600</h2>
            <h6>العدد الكلي للمتبرعين</h6>
          </div>

          <div class="sup-icon">
            <v-icon
              class="child-icon"
              color="primary"
              icon="mdi-hand-heart-outline"
            ></v-icon>
          </div>
        </div>
      </div>
      <!-- end card dononrs -->
    </v-card-text>

    <!-- <div class="svg">
      <img src="@/assets/Group 4.svg" alt="" width="" />
    </div> -->
  </v-card>
</template>
<script setup>

</script>
<style scoped>
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
.filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    column-gap: 1px;
    row-gap: 1em;
}
.filter-icon {
  margin-bottom: 10px;
}
/*.donors-card{
    display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  width: 100%;
  
}
*/
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 207px);
  column-gap: 10px;
  row-gap: 1em;
}

.card-icon {
  width: 230px;
  height: 130px;
  border: 1px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}
.card-icon h2 {
  color: #ff2c54;
}
.sup-icon {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background: #ffc0cc;
}
.child-icon {
  border: 1px solid #ff2c54;
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.select {
  height: 52px;
  border: 1px solid#BDBDBD;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.svg {
  display: flex;
  justify-content: flex-end;
  align-items: end;
  height: 90vh;
  position: sticky;
}
.svg img {
  margin-left: 30px;
  margin-bottom: 120px;
  z-index: 1000;
  width: 360px;
  height: 329px;
}
</style>
