<template>
  <v-row justify="center">
    <v-dialog v-model="store.dialog" persistent width="664">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pt-4">
          <span> اضافة متبرع</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form>
              <v-row>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      clearable
                      variant="plain"
                      placeholder="اسم المتبرع"
                      type="text"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      clearable
                      variant="plain"
                      placeholder="رقم الهاتف"
                      type="Number"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      clearable
                      variant="plain"
                      placeholder="اسم المدينة"
                      type="text"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      clearable
                      variant="plain"
                      placeholder="نوع التبرع"
                      type="text"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      clearable
                      variant="plain"
                      placeholder="نوع الزمرة"
                      type="text"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-checkbox
                      :color="!select ? 'primary' : 'white'"
                      class="d-flex algin-center"
                      clearable
                      variant="plain"
                      label="هل هناك امراض مزمنة؟"
                      type="text"
                    ></v-checkbox>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="select">
                    <v-select
                      clearable
                      variant="plain"
                      placeholder="هل هناك امراض مزمنة؟"
                      type="text"
                      no-data-text="لا يوجد بيانات "
                    ></v-select></div
                ></v-col>
                <v-col cols="12">
                  <div class="select">
                    <v-text-field
                      clearable
                      variant="plain"
                      placeholder="العلاجات المستخدمة "
                      type="text"
                      no-data-text="لا يوجد بيانات "
                    ></v-text-field></div
                ></v-col>
                <v-col cols="12">
                  <div class="chip">
                    <h5>حسابات التواصل:</h5>
                    <div class="d-flex">
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        label="واتساب"
                        class="d-flex algin-center"
                      ></v-checkbox>
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        label="تلجرام"
                        class="d-flex algin-center"
                      ></v-checkbox>
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        label="فايبر"
                        class="d-flex algin-center"
                      ></v-checkbox>
                    </div></div
                ></v-col>
                <v-col cols="6">
                  <div class="select-file">
                    <v-file-input
                      clearable
                      variant="plain"
                      prepend-icon="mdi-file-image-plus"
                      label="مستند فحص الدم"
                    ></v-file-input>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select-file">
                    <v-file-input
                      clearable
                      variant="plain"
                      prepend-icon="mdi-file-image-plus"
                      label="مستند الرقم الوطني للمتبرع"
                    ></v-file-input>
                  </div>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="pb-5">
          <v-btn class="add-edit-button" :color="primary" variant="text">
            اضافة المتبرع
          </v-btn>
          <v-btn
            class="add-back-button"
            color="white"
            variant="text"
            to="/donations"
          >
            <v-icon icon="mdi-greater-than"></v-icon>
            العودة
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup>
import { useCounterStore } from "@/store/app";
import { primary } from "@/assets/style";
import router from "@/router";
const store = useCounterStore();
function closeDialog() {
  store.dialog = false;
  router.push("/donations");
}
</script>
<style scoped>
.chip {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1px;
  flex-wrap: wrap;
}
.sup-icon {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  background: #ffc0cc;
}
.add-don {
  width: 300px;
  height: 70px;
  border-radius: 8px;
}
.select {
  height: 40px;
  background: #f2f2f2;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.select-file {
  height: 50px;
  background: #f2f2f2;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
