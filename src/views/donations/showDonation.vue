<template>
  <v-row justify="center">
    <v-dialog v-model="store.dialog" persistent width="664">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary">
          <v-icon icon="mdi-hand-heart-outline"></v-icon>
          <span> محمد قاسم احمد</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-card class="show-donations-card" rounded="0">
                  <div>
                    <h5>اسم المتبرع:محمد قاسم احمد</h5>
                  </div>
                  <div>
                    <h5>اسم المدينة:بغداد</h5>
                  </div>
                  <div>
                    <h5>نوع الزمرة:A+</h5>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card class="show-donations-card" rounded="0">
                  <div>
                    <h5>رقم الهاتف:+9647736434814</h5>
                  </div>
                  <div>
                    <h5>نوع التبرع:دم</h5>
                  </div>
                  <div>
                    <h5>هل يوجد مرض مزمن ؟</h5>
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
                    <div class="sup-icon">
                      <v-icon
                        size="30"
                        :color="primary"
                        icon="mdi-whatsapp"
                      ></v-icon>
                    </div>
                    <div class="sup-icon">
                      <v-img
                        :color="primary"
                        src="@/assets/TelegramLogo.svg"
                        width="30"
                        height="30"
                      ></v-img>
                    </div>
                    <div class="sup-icon">
                      <v-img
                        :color="primary"
                        src="@/assets/viber-chat-app-svgrepo-com 1.svg"
                        width="30"
                        height="30"
                      ></v-img>
                    </div>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="6"
                ><v-card class="show-donations-card">
                <h5>مستند فحص الدم:</h5>  
                <v-img width="292" height="172" src="@/assets/Plasma Logo Color Original 1.png">

                </v-img>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card class="show-donations-card"><h5> هوية المتبرع:</h5>  
                <v-img width="292" height="172" src="@/assets/Plasma Logo Color Original 1.png">

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
