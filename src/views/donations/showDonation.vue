<template>
  <v-row justify="center">
    <v-dialog v-model="store.dialog" persistent width="664">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary">
          <v-icon icon="mdi-hand-heart-outline" class="ml-2"></v-icon>
          <span>{{ donor.name }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-card class="show-donations-card" rounded="0">
                  <div>
                    <h5>اسم المتبرع: {{ donor.name }}</h5>
                  </div>
                  <div>
                    <h5>اسم المدينة: {{ donor?.governorate }}</h5>
                  </div>

                  <div>
                    <h5>رقم الهاتف: {{ donor?.phone }}</h5>
                  </div>
                  <div>
                    <h5>
                      الجنس:
                      {{
                        donor.gender === 0
                          ? "ذكر"
                          : donor.gender === 0
                          ? "انثى"
                          : "---"
                      }}
                    </h5>
                  </div>
                  <div>
                    <h5>
                      العمر:
                      {{
                        dayjs(donor?.birthDate).format("YYYY/MM/DD") === null
                          ? "---"
                          : dayjs(donor?.birthDate).format("YYYY/MM/DD")
                      }}
                    </h5>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card class="show-donations-card" rounded="0">
                  <div>
                    <h5>
                      حالة المستخدم:
                      {{
                        donor.isActive === true
                          ? "نشط"
                          : donor.isActive === false
                          ? "غير نشط"
                          : "---"
                      }}
                    </h5>
                  </div>
                  <div>
                    <h5>
                      نوع الزمرة:
                      {{ bloodGroups[donor?.bloodGroup]?.name }}
                    </h5>
                  </div>
                  <div>
                    <h5>
                      نوع التبرع:
                      {{
                        donor.donorType === 0
                          ? "دم"
                          : donor.donorType === 1
                          ? "بلازما"
                          : "---"
                      }}
                    </h5>
                  </div>
                  <div>
                    <h5>
                      المرض المزمن:
                      {{
                        donor.hasChronicDisease === true
                          ? "يوجد"
                          : donor.hasChronicDisease === false
                          ? "لا يوجد"
                          : "---"
                      }}
                    </h5>
                  </div>
                  <div>
                    <h5>
                      هل المتبرع مدخن:
                      {{
                        donor.doYouSmoke === true
                          ? "مدخن "
                          : donor.doYouSmoke === false
                          ? "غير مدخن"
                          : "---"
                      }}
                    </h5>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12"
                ><v-card class="show-donations-card">
                  <h5>نوع المرض المزمن:</h5>

                  <div
                    class="chip"
                    v-for="(med, i) in donor.chronicDiseases"
                    :key="i"
                  >
                    <v-chip v-if="donor.chronicDiseases" :color="primary">
                      {{ med.nameArabic }}</v-chip
                    >
                  </div>
                  <!-- <h6 v-if="(donor.chronicDiseases===null)">
                    لايوجد امراض مزمنة
                  </h6> -->
                </v-card>
              </v-col>
              <v-col cols="12"
                ><v-card class="show-donations-card"
                  ><div class="chip">
                    <h5>العلاجات المستخدمة:</h5>
                    <v-chip v-if="donor.medications" :color="primary">
                      {{ donor.medications }}</v-chip
                    >
                  </div>
                  <h6 v-if="!donor.medications">
                    لايوجد علاجات مستخدمة
                  </h6></v-card
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
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card class="show-donations-card">
                  <h5>سجل التبرع:</h5>
                  <div v-if="donRecord.length === 0">
                    <h6>لا يوجد تبرعات</h6>
                  </div>
                  <div v-if="donRecord.length > 0">
                    <table>
                      <tr>
                        <th>نوع التبرع</th>
                        <th>تاريخ التبرع</th>
                      </tr>
                      <tr v-for="item in donRecord" :key="item.id">
                        <td>{{ item.donorType === 0 ? "دم" : "بلازما" }}</td>
                        <td>
                          {{ dayjs(item.donationDate).format("YYYY/MM/DD") }}
                        </td>
                      </tr>
                    </table>
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
                    lazy-src="@\assets\plasmaLogo.png"
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
                    lazy-src="@\assets\plasmaLogo.png"
                  >
                  </v-img></v-card
              ></v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="deleteDialog = true"
            class="add-delete-button"
            color="white"
            variant="text"
          >
            <v-icon icon="mdi-trash-can-outline" size="22"></v-icon>
            حذف المتبرع
          </v-btn>
          <v-btn
            @click="closeDialog()"
            class="add-back-button"
            color="white"
            variant="text"
          >
            <v-icon icon="mdi-greater-than"></v-icon>
            العودة
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

  <v-row justify="center">
    <v-dialog v-model="deleteDialog" persistent width="262">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> حذف المتبرع</span>
        </v-card-title>
        <v-card-text> هل انت متأكد من حذف المتبرع ؟ </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <div class="d-flex align-center justify-center my-1">
            <v-btn
              @click="deleteSubscribers()"
              class="delete-button"
              color="white"
              variant="text"
            >
              حذف
            </v-btn>
            <v-btn
              @click="deleteDialog = false"
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
  <!-- start delete donattion  -->
  <!-- end edit chronic -->
</template>
<script setup>
import router from "@/router";
import { useCounterStore } from "@/store/app";
import { primary } from "@/assets/style";
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import axios from "@/server/axios";
const deleteDialog = ref(false);
const store = useCounterStore();

const donorId = ref(router.currentRoute.value.params.id);
function closeDialog() {
  router.push("/donations");
}
const donor = ref({});
function getDonor() {
  axios.get(`/Admin/GetDonerById?ID=${donorId.value}`).then((res) => {
    donor.value = res.data;
  });
}
const donRecord = ref([]);
function getDonationRecord() {
  axios
    .get(`Admin/GetDonerDonationRecord?DonerId=${donorId.value}`)
    .then((res) => {
      donRecord.value = res.data;
    });
}
function deleteSubscribers() {
  axios.delete(`Admin/DeleteSubscribers?id=${donorId.value}`).then((res) => {
    deleteDialog.value = false;
    store.dialog = false;
    router.push("/donations");
  });
}
onMounted(() => {
  getDonor();
  getDonationRecord();
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
table,
td,
th {
  border: 1px solid black;
  padding: 5px;
  text-align: center;
}
table {
  border-collapse: collapse;
  width: 35rem;
  font-size: 12px;
}

th {
  background-color: #ffc0cc;
}
td {
  font-weight: bold;
}
</style>
