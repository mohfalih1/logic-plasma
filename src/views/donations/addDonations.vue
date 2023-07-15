<template>
  <Loader v-if="isLoading" />
  <v-row justify="center">
    <v-dialog
      v-model="store.dialog"
      persistent
      width="664"
      scrollable="true"
      height="105vh"
    >
      <v-form v-model="valid" @submit.prevent="validate">
        <v-card rounded="xl" scroolable="true" height="100vh">
          <v-card-title class="text-center text-primary pt-4">
            <span> اضافة مستخدم</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-model="form.Name"
                      :rules="nameRules"
                      clearable
                      variant="plain"
                      placeholder="اسم المستخدم"
                      type="text"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-model="form.Phone"
                      :rules="phoneRules"
                      clearable
                      variant="plain"
                      placeholder="رقم الهاتف"
                      type="Number"
                    ></v-text-field>
                  </div>
                  <div v-if="resPhone" color="primary" class="mt-4">
                    {{ resPhone }}
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-select
                      v-model="form.Governorate"
                      :rules="governorateRules"
                      clearable
                      variant="plain"
                      placeholder="اسم المدينة"
                      type="text"
                      :items="governorates"
                      item-title="nameArabic"
                      item-value="id"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-select
                      v-model="form.Gender"
                      :rules="genderRules"
                      clearable
                      variant="plain"
                      placeholder="الجنس"
                      type="text"
                      :items="genderData"
                      item-title="name"
                      item-value="value"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-select
                      v-model="form.DonorType"
                      :rules="donorTypeRules"
                      clearable
                      variant="plain"
                      placeholder="نوع التبرع"
                      type="text"
                      :items="donorTypes"
                      item-title="name"
                      item-value="value"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-select
                      v-model="form.BloodGroup"
                      :rules="bloodGroupRules"
                      clearable
                      variant="plain"
                      placeholder="نوع الزمرة"
                      type="text"
                      :items="bloodGroups"
                      item-title="name"
                      item-value="value"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="6">
                  <VueDatePicker
                    v-model="form.BirthDate"
                    model-type="yyyy/MM/dd"
                    placeholder="تاريخ الميلاد"
                    auto-apply
                  ></VueDatePicker>
                  <!-- <div v-if="BirthDateValid">
                    <span class="text-danger"> {{ BirthDateValid }}</span>
                  </div> -->
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-checkbox
                      v-model="form.DoYouSmoke"
                      :color="!select ? 'primary' : 'white'"
                      class="d-flex algin-center"
                      clearable
                      variant="plain"
                      label="هل المستخدم مدخن؟"
                      type="text"
                    ></v-checkbox>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="select">
                    <v-checkbox
                      v-model="form.HasChronicDisease"
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
                    <v-autocomplete
                      v-if="form.HasChronicDisease"
                      v-model="form.ChronicDiseaseId"
                      clearable
                      variant="plain"
                      placeholder="اختر نوع المرض المزمن"
                      type="text"
                      no-data-text="لا يوجد بيانات "
                      :items="typeChronicDisease"
                      item-title="nameArabic"
                      item-value="id"
                      multiple=""
                    ></v-autocomplete></div
                ></v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-select
                      v-model="form.TakingAnyMedication"
                      clearable
                      variant="plain"
                      placeholder="هل يوجد علاجات مستخدمة ؟"
                      type="text"
                      no-data-text="لا يوجد بيانات "
                      :items="isAnyMedications"
                      item-title="name"
                      item-value="value"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-if="form.TakingAnyMedication"
                      v-model="form.Medications"
                      clearable
                      variant="plain"
                      placeholder="العلاجات المستخدمة "
                      type="text"
                      no-data-text="لا يوجد بيانات "
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="chip">
                    <h5>حسابات التواصل:</h5>
                    <div class="d-flex">
                      <v-checkbox
                        v-model="form.Whatsapp"
                        :color="!select ? 'primary' : 'white'"
                        label="واتساب"
                        class="d-flex algin-center"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="form.Telegram"
                        :color="!select ? 'primary' : 'white'"
                        label="تلجرام"
                        class="d-flex algin-center"
                      ></v-checkbox>
                      <v-checkbox
                        v-model="form.Viber"
                        :color="!select ? 'primary' : 'white'"
                        label="فايبر"
                        class="d-flex algin-center"
                      ></v-checkbox>
                    </div>
                  </div>
                </v-col>

                <v-col cols="6">
                  <div class="select-file">
                    <v-file-input
                      v-model="form.ImageLinkBloodTest"
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
                      v-model="form.ImageLinkDonorID"
                      clearable
                      variant="plain"
                      prepend-icon="mdi-file-image-plus"
                      label="مستند الرقم الوطني للمستخدم"
                    ></v-file-input>
                  </div>
                </v-col>
                <v-col cols="12">
                  <v-card-actions class="pb-5">
                    <v-btn
                      type="submit"
                      class="add-edit-button"
                      :color="primary"
                      variant="text"
                    >
                      اضافة المستخدم
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
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import { useCounterStore } from "@/store/app";
import { primary } from "@/assets/style";
import router from "@/router";
import axios from "@/server/axios";
import { reactive, ref, onMounted } from "vue";
const isLoading = ref(false);
const isDialog = ref(true);
const isSnackBarDelete = ref(false);
const store = useCounterStore();
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
    })
    .catch((err) => {});
}

onMounted(() => {
  getChronicDisease();
  getGovernorates();
});
const BirthDateValid = ref("");
const form = reactive({
  Name: null,
  Phone: null,
  Whatsapp: null,
  Viber: null,
  Telegram: null,
  Governorate: null,
  BloodGroup: null,
  IsCheckForNotitifiction: false,
  HasChronicDisease: null,
  ChronicDiseaseId: null,
  TakingAnyMedication: null,
  Medications: null,
  Latitude: null,
  Longitude: null,
  DonorType: null,
  SubscribersType: 0,
  ImageLinkBloodTest: null,
  ImageLinkDonorID: null,
  IsHasLocation: null,
  Gender: null,
  BirthDate: null,
  DoYouSmoke: null,
  // IsActive: null,
});
function addSubscribers() {
  console.log(form.ChronicDiseaseId);
  isLoading.value = true;
  const formData = new FormData();
  form.ChronicDiseaseId?.forEach((element) => {
    formData.append("ChronicDiseaseId", element);
  });

  formData.append(
    "ImageLinkBloodTest",
    form.ImageLinkBloodTest === null ? "" : form.ImageLinkBloodTest[0]
  );
  formData.append(
    "ImageLinkDonorID",
    form.ImageLinkDonorID === null ? "" : form.ImageLinkDonorID[0]
  );
  formData.append("Name", form.Name);
  formData.append("Phone", form.Phone);
  formData.append("Whatsapp", form.Whatsapp === null ? false : form.Whatsapp);
  formData.append("Telegram", form.Telegram === null ? false : form.Telegram);
  formData.append("Telegram", form.Viber === null ? false : form.Viber);
  formData.append("Governorate", form.Governorate);
  formData.append("BloodGroup", form.BloodGroup);
  formData.append(
    "HasChronicDisease",
    form.HasChronicDisease === null ? false : form.HasChronicDisease
  );

  formData.append(
    "TakingAnyMedication",
    form.TakingAnyMedication === null ? false : form.TakingAnyMedication
  );
  formData.append("Medications", form.Medications);
  formData.append("DonorType", form.DonorType);
  formData.append("SubscribersType", form.SubscribersType);

  formData.append("Gender", form.Gender);
  formData.append("BirthDate", form.BirthDate === null ? "" : form.BirthDate);
  formData.append(
    "DoYouSmoke",
    form.DoYouSmoke === null ? false : form.DoYouSmoke
  );
  axios
    .post("Admin/AddSubscribers", formData)
    .then((res) => {
      store.isSnackbarAdd = true;
      store.resAdd = res.data;
      store.dialog = false;
      router.push("/donations");
    })
    .catch((err) => {
      BirthDateValid.value = "تاريخ الميلاد مطلوب";
    })
    .finally(() => {
      isLoading.value = false;
    });
}
const resPhone = ref();
function checkPhone() {
  resPhone.value = "";
  const formData = new FormData();
  formData.append("phoneNumber", form.Phone);
  axios
    .post("Admin/CheckPhone", formData)
    .then((res) => {})
    .catch((err) => {
      resPhone.value = err.response.data;
      console.log(resPhone.value);
    });
}
const valid = ref(true);

const nameRules = ref([
  (v) => {
    if (v) return true;
    return "الاسم مطلوب";
  },
]);
const bloodGroupRules = ref([
  (v) => {
    if (v || v === 0) return true;
    return "زمرة الدم مطلوبة";
  },
]);
const governorateRules = ref([
  (v) => {
    if (v || v === 0) return true;
    return "المحافظة مطلوبة";
  },
]);

const donorTypeRules = ref([
  (v) => {
    if (v || v === 0) return true;
    else if (!v) return "نوع المتبرع مطلوب";
  },
]);
const BirthDateRules = ref([
  (v) => {
    if (v) return true;
    return "تاريخ الميلاد مطلوب";
  },
]);
const genderRules = ref([
  (v) => {
    if (v || v === 0) return true;
    return "الجنس مطلوب";
  },
]);

const phoneRules = ref([
  (v) => {
    if (!v) return "رقم الهاتف مطلوب";
    else if (!(v.length <= 15 && v.length >= 11))
      return "يجب ان يكون رقم الهاتف بين 11 الى 15 كحد اقصى";
    else return true && checkPhone() && resPhone.value;
  },
]);
function validate() {
  if (valid.value) {
    isLoading.value = false;
    addSubscribers();
  }
}

const isAnyMedications = ref([
  { name: "يوجد", value: true },
  { name: "لا يوجد", value: false },
]);
const donorTypes = ref([
  { name: "دم", value: 0 },
  { name: "بلازما", value: 1 },
  { name: "كلاهما", value: 2 },
]);
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
const genderData = ref([
  { name: "ذكر", value: 0 },
  { name: "انثى", value: 1 },
]);
</script>
<style scoped>
.dp__theme_light {
  --dp-background-color: #f2f2f2 !important;
  --dp-primary-color: #ff2c54 !important;
  --dp-border-color: transparent !important;
  --dp-border-color-hover: transparent !important;
}
.dp__main {
  height: 40px !important;
}
.dp__main :deep(.dp__pointer) {
  height: 40px !important;
}
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
  padding-top: 1.2rem;
}
</style>
