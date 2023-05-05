<template>
  <v-row justify="center">
    <v-dialog v-model="store.dialog" persistent width="664">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary">
          <v-icon icon="mdi-hand-heart-outline"></v-icon>
          <span>{{ donor.name }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-card class="show-donations-card" rounded="0">
                  <div>
                    <h5>اسم المتبرع:{{ donor.name }}</h5>
                  </div>
                  <div>
                    <h5>اسم المدينة:{{ donor?.governorate }}</h5>
                  </div>
                  <div>
                    <h5>
                      نوع الزمرة:{{ bloodGroups[donor?.bloodGroup]?.name }}
                    </h5>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card class="show-donations-card" rounded="0">
                  <div>
                    <h5>رقم الهاتف:{{ donor?.phone }}</h5>
                  </div>
                  <div>
                    <h5>
                      نوع التبرع:{{ donor.donorType === 0 ? "دم" : "بلازما" }}
                    </h5>
                  </div>
                  <div>
                    <h5>
                      المرض المزمن:{{
                        donor.hasChronicDisease === true ? "يوجد" : "لا يوجد"
                      }}
                    </h5>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12"
                ><v-card class="show-donations-card">
                  <div class="chip">
                    <h5>نوع المرض المزمن:</h5>
                    <v-chip :color="primary">السكري</v-chip>
                    <v-chip :color="primary">امراض المفاصل</v-chip>
                    <v-chip :color="primary">امراض الجهاز الهضمي</v-chip>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12"
                ><v-card class="show-donations-card"
                  ><div class="chip">
                    <h5>العلاجات المستخدمة:</h5>
                    <v-chip :color="primary">السكري</v-chip>
                    <v-chip :color="primary">امراض المفاصل</v-chip>
                  </div></v-card
                >
              </v-col>
              <v-col cols="12"
                ><v-card class="show-donations-card">
                  <div class="chip">
                    <h5>حسابات التواصل:</h5>
                    <div v-if="donor.whatsapp === true" class="sup-icon">
                      <v-icon
                        size="30"
                        :color="primary"
                        icon="mdi-whatsapp"
                      ></v-icon>
                    </div>
                    <div v-if="donor.telegram === true" class="sup-icon">
                      <v-img
                        :color="primary"
                        src="@/assets/TelegramLogo.svg"
                        width="30"
                        height="30"
                      ></v-img>
                    </div>
                    <div v-if="donor.viber === true" class="sup-icon">
                      <v-img
                        :color="primary"
                        src="@/assets/viber-chat-app-svgrepo-com1.svg"
                        width="30"
                        height="30"
                      ></v-img>
                    </div>
                    <div
                      v-if="
                        donor.whatsapp === false &&
                        donor.telegram === false &&
                        donor.viber === false
                      "
                    >
                      لا يوجد حسابات للتواصل
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="6"
                ><v-card class="show-donations-card">
                  <h5>مستند فحص الدم:</h5>
                  <v-img
                    width="292"
                    height="172"
                    :src="donor?.imageLinkBloodTest"
                  >
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card class="show-donations-card"
                  ><h5>هوية المتبرع:</h5>
                  <v-img
                    width="292"
                    height="172"
                    :src="donor?.imageLinkDonorID"
                  >
                  </v-img></v-card
              ></v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn class="add-delete-button" color="white" variant="text">
            <v-icon icon="mdi-trash-can-outline" size="22"></v-icon>
            حذف المتبرع
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

  <!-- start edit chronic -->
  <v-row justify="center">
    <v-dialog v-model="editDialog" persistent width="262">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> تعديل المرض المزمن</span>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-container>
            <v-form>
              <v-col cols="12">
                <div class="select">
                  <v-icon color="red" icon="mdi-virus-outline"></v-icon>
                  <v-text-field
                    v-model="editChron.nameArabic"
                    class="text-center"
                    clearable
                    variant="plain"
                    type="text"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="select">
                  <v-text-field
                    v-model="editChron.nameEnglish"
                    clearable
                    variant="plain"
                    type="text"
                  ></v-text-field>
                  <v-icon color="red" icon="mdi-virus-outline"></v-icon>
                </div>
              </v-col>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <div class="d-flex align-center justify-center my-1">
            <v-btn
              @click="UpdateChronicDisease(selectedItem.id)"
              class="delete-button"
              color="white"
              variant="text"
            >
              حفظ
            </v-btn>
            <v-btn
              @click="editDialog = false"
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
  <!-- end edit chronic -->
</template>
<script setup>
import { useCounterStore } from "@/store/app";
import { primary } from "@/assets/style";
import { ref, onMounted } from "vue";
import router from "@/router";
import axios from "@/server/axios";
const store = useCounterStore();

const donorId = ref(router.currentRoute.value.params.id);
function closeDialog() {
  store.dialog = false;
  router.push("/donations");
}

const donor = ref({});
function getDonor() {
  axios.get(`/Admin/GetDonerById?ID=${donorId.value}`).then((res) => {
    donor.value = res.data;
  });
}
function deleteSubscribers() {
  axios.delete(`Admin/DeleteSubscribers?id=${donorId.value}`).then((res) => {
    closeDialog();
  });
}
onMounted(() => {
  getDonor();
});

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
</script>
<style scoped>
.chip {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 8px;
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
</style>
