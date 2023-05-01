<template>
  <loader v-if="isLoading" />
  <v-card class="card-temp">
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-bell-ring-outline"></v-icon>
      <h2>الاشعارات</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض الاشعارات</h3></div>
        <v-btn
          @click="addDialog = true"
          class="add"
          rounded="0"
          height="50"
          elevation="0"
        >
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة اشعار جديد</h3>
        </v-btn>
      </div>
    </v-card-text>
    <div class="grid-donations ma-5">
      <v-card
        class="chronic-card pb-0"
        v-for="item in notification"
        :key="item.id"
      >
        <div class="news-title">
          <v-icon icon="mdi-bell-ring-outline" class="ml-2"></v-icon>
          {{ item.titleArabic }}
        </div>
        <div class="news-title">
          {{ item.decArabic }}
        </div>
        <v-card-actions class="pa-0 mb-0">
          <div class="d-flex ma-0">
            <v-btn
              @click="showModel(item, 1)"
              class="chronic-edit-button"
              color="white"
              variant="text"
            >
              <v-icon icon="mdi-send" size="20"></v-icon>
              ارسال للجميع
            </v-btn>
            <v-btn
              @click="showModel(item, 2)"
              class="chronic-delte-button"
              color="red"
              variant="text"
            >
              <v-icon icon="mdi-trash-can-outline" size="22"></v-icon>
              حذف
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>

  <!-- start add notification  -->
  <v-row justify="center">
    <v-dialog v-model="addDialog" persistent width="300">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> اضافة شعار جديد</span>
        </v-card-title>
        <v-card-text class="pa-0">
          <v-container>
            <v-form>
              <v-col>
                <div class="active-button" width="100%">
                  <div>
                    <v-img
                      class="image-translate ma-0"
                      src="@/assets/Frame 88.svg"
                      width="50px"
                      height="36px"
                    ></v-img>
                  </div>
                  <div class="d-flex">
                    <v-btn class="lang-button" elevation="0" rounded="0"
                      >العربية</v-btn
                    >
                    <v-btn class="ma-0" elevation="0" rounded="0"
                      >English</v-btn
                    >
                  </div>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="select">
                  <v-icon color="red" icon="mdi-bell-ring-outline "></v-icon>
                  <v-text-field
                    v-model="addNotific.titleAr"
                    clearable
                    variant="plain"
                    placeholder="اضافة شعار.."
                    type="text"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="select-content">
                  <v-textarea
                    v-model="addNotific.decArabic"
                    clearable
                    variant="plain"
                    label="محتوى الشعار.."
                    type="text"
                  ></v-textarea>
                </div>
              </v-col>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="d-flex align-center justify-center pt-0">
          <div class="d-flex align-center justify-center my-1">
            <v-btn
              @click="addNotification()"
              class="delete-button"
              color="white"
              variant="text"
            >
              اضافة
            </v-btn>
            <v-btn
              @click="addDialog = false"
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

  <!-- end add notification  -->

  <!-- start send notification  -->
  <v-row justify="center">
    <v-dialog v-model="sendDialog" persistent width="400">
      <v-sheet
        elevation="12"
        max-width="600"
        rounded="lg"
        width="100%"
        class="pa-4 text-center mx-auto"
      >
        <v-icon
          class="mb-5"
          color="success"
          icon="mdi-check-circle"
          size="112"
        ></v-icon>

        <h2 class="mb-6">تم ارسال الاشعار</h2>

        <v-divider class="mb-4"></v-divider>

        <div>
          <v-btn
            @click="sendDialog = false"
            class="text-none"
            color="success"
            rounded
            variant="flat"
            width="90"
          >
            انهاء
          </v-btn>
        </div>
      </v-sheet>
    </v-dialog>
  </v-row>
  <!-- end send notification  -->

  <!-- end delete notification  -->
  <v-row justify="center">
    <v-dialog v-model="deleteDialog" persistent width="262">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> حذف الاشعار</span>
        </v-card-title>
        <v-card-text> هل انت متأكد من حذف الاشعار ؟ </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <div class="d-flex align-center justify-center my-1">
            <v-btn
              @click="deleteNotifications(selectedItem.id)"
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
  <!-- start delete notification  -->
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import { ref, onMounted, reactive } from "vue";
import axios from "@/server/axios";
const isLoading = ref(false);
const addDialog = ref(false);
const sendDialog = ref(false);
const deleteDialog = ref(false);
const selectedItem = ref();
onMounted(() => {
  getNotification();
});
const showModel = (item, type) => {
  selectedItem.value = item;
  type == 1
    ? sendNotification(selectedItem.value.id)
    : (deleteDialog.value = true);
  // editChron.value.nameArabic = item.nameArabic;
  // editChron.value.nameEnglish = item.nameEnglish;
};
const notification = ref([]);
const numberOfPage = ref(1);
const numberOfItemPerPage = ref(10);
function getNotification() {
  isLoading.value = true;
  axios
    .get(
      `Admin/GetNotifications?numberOfPage=${numberOfPage.value}&numberOfItemPerPage=${numberOfItemPerPage.value}`
    )
    .then((res) => {
      notification.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}
const addNotific = reactive({
  titleEn: "",
  titleAr: "",
  decEnglish: "",
  decArabic: "",
});
function addNotification() {
  const formData = new FormData();
  formData.append("titleEn", addNotific.titleEn);
  formData.append("titleAr", addNotific.titleAr);
  formData.append("decEnglish", addNotific.decEnglish);
  formData.append("decArabic", addNotific.decArabic);
  isLoading.value = true;
  axios
    .post("Admin/AddNotification", formData)
    .then((res) => {
      getNotification();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
      addDialog.value = false;
    });
}

function deleteNotifications(id) {
  isLoading.value = true;
  axios
    .put(`Admin/DeleteNotifications?id=${id}`)
    .then((res) => {
      getNotification();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
      deleteDialog.value = false;
    });
}
function sendNotification(id) {
  isLoading.value = true;
  axios
    .post(`Admin/SendNotification?ID=${id}`)
    .then((res) => {
      getNotification();
      console.log(id);
      sendDialog.value = true;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>
<style scoped>
.active-button {
  border: 1px solid #ffffff;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: start;
  align-items: start;
  width: 230px;
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
.image-translate {
  overflow: hidden;
}
.lang-button {
  background-color: #ff2c54;
  color: white;
}
</style>
