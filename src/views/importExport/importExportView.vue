<template>
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
    </div>
    <v-card-actions class="pa-5 mb-5">
      <div class="d-flex ma-0">
        <v-btn class="import-delte-button" color="red" variant="text">
          <v-icon icon="mdi-table-arrow-up" size="22"></v-icon>
          تنزيل بيانات المتبرعين
        </v-btn>
        <v-btn class="import-edit-button" color="white" variant="text">
          تنزيل القالب
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
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
