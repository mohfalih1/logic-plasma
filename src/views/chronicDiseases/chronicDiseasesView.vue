<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp">
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-virus-outline"></v-icon>
      <h2>الامراض المزمنة</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض الامراض المزمنة</h3></div>
        <v-btn
          @click="addDialog = true"
          class="add"
          rounded="0"
          height="50"
          elevation="0"
        >
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة مرض مزمن</h3>
        </v-btn>
      </div>
    </v-card-text>
    <div class="grid-chron mt-5 mr-5 ml-1">
      <v-card
        class="chronic-card pb-0"
        v-for="item in chronicDiseases"
        :key="item.id"
      >
        <div class="news-title">
          <v-icon icon="mdi-virus-outline" class="ml-2"></v-icon>
          {{ item.nameArabic }}
        </div>
        <div class="news-title">
          <v-icon icon="mdi-virus-outline" class="ml-2"></v-icon>
          {{ item.nameEnglish }}
        </div>
        <br />
        <v-card-actions class="pa-0 mb-0">
          <div class="d-flex ma-0">
            <v-btn
              @click="showModel(item, 1)"
              class="chronic-edit-button"
              color="white"
              variant="text"
            >
              <v-icon icon="mdi-square-edit-outline" size="22"></v-icon>
              تعديل
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

    <!-- pagination  -->
    <v-container class="pagination">
      <button :disabled="chronicDiseases.length < 10" @click="nextPage">
        &lt;
      </button>
      <button
        v-if="chronicDiseases.length >= 10"
        :disabled="chronicDiseases.length < 10"
        @click="nextPage"
      >
        {{ numberOfPage + 1 }}
      </button>
      <button class="current">{{ numberOfPage }}</button>
      <button
        v-if="numberOfPage != 1"
        :disabled="numberOfPage <= 1"
        @click="previousPage"
      >
        {{ numberOfPage - 1 }}
      </button>
      <button :disabled="numberOfPage <= 1" @click="previousPage">></button>
    </v-container>

    <!-- pagination  -->
  </v-card>

  <!-- start add chronic -->
  <v-row justify="center">
    <v-dialog v-model="addDialog" persistent width="262">
      <v-form v-model="valid" @submit.prevent="validate()">
        <v-card rounded="xl">
          <v-card-title class="text-center text-primary pb-0">
            <span> اضافة مرض مزمن</span>
          </v-card-title>
          <v-card-text class="pa-0">
            <v-container>
              <v-col cols="12">
                <div class="select">
                  <v-icon color="red" icon="mdi-virus-outline"></v-icon>
                  <v-text-field
                    v-model="addChron.nameArabic"
                    class="text-center"
                    clearable
                    variant="plain"
                    placeholder="اضافة مرض مزمن.."
                    type="text"
                    :rules="titleRule"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="select">
                  <v-text-field
                    v-model="addChron.nameEnglish"
                    clearable
                    variant="plain"
                    placeholder="Enter chronic disease..."
                    type="text"
                    :rules="titleRuleEn"
                  ></v-text-field>
                  <v-icon color="red" icon="mdi-virus-outline"></v-icon>
                </div>

                <div>
                  {{ checkDis }}
                </div>
              </v-col>
            </v-container>
          </v-card-text>
          <v-card-actions class="d-flex align-center justify-center">
            <div class="d-flex align-center justify-center my-1">
              <v-btn
                type="submit"
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
      </v-form>
    </v-dialog>
  </v-row>
  <!-- end add chronic -->

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
  <!-- start delete chronic -->
  <v-row justify="center">
    <v-dialog v-model="deleteDialog" persistent width="262">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> حذف المرض المزمن</span>
        </v-card-title>
        <v-card-text> هل انت متأكد من حذف المرض ؟ </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <div class="d-flex align-center justify-center my-1">
            <v-btn
              @click="deleteChronicDisease(selectedItem.id)"
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
  <!-- end delete chronic -->
  <!--start add snackbar  -->
  <div class="text-center ma-2">
    <v-snackbar v-model="addsnackbar" timeout="2000">
      <p>{{ successAdd }}</p>
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="addsnackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <!--end add snackbar  -->
  <!--start edit snackbar  -->
  <div class="text-center ma-2">
    <v-snackbar v-model="editsanckbar" timeout="2000">
      <p>تم التعديل بنجاح</p>
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="editsanckbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <!--end edit snackbar  -->
  <!--start edit snackbar  -->
  <div class="text-center ma-2">
    <v-snackbar v-model="deletesanckbar" timeout="2000">
      <p>تم الحذف بنجاح</p>
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="deletesanckbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <!--end edit snackbar  -->
</template>
<script setup>
import Loader from "@/components/Loader.vue";
import { primary } from "@/assets/style";
import { ref, onMounted } from "vue";
import axios from "@/server/axios";
const isLoading = ref(false);
const addDialog = ref(false);
const editDialog = ref(false);
const deleteDialog = ref(false);
const addsnackbar = ref(false);
const editsanckbar = ref(false);
const deletesanckbar = ref(false);
const selectedItem = ref();
const showModel = (item, type) => {
  selectedItem.value = item;
  type == 1 ? (editDialog.value = true) : (deleteDialog.value = true);
  editChron.value.nameArabic = item.nameArabic;
  editChron.value.nameEnglish = item.nameEnglish;
};
onMounted(() => {
  getChronicDiseases();
});
const numberOfPage = ref(1);
const numberOfItemPerPage = ref(10);
const chronicDiseases = ref([]);
function getChronicDiseases() {
  isLoading.value = true;
  axios
    .get(
      `Admin/GetChronicDisease?numberOfPage=${numberOfPage.value}&numberOfItemPerPage=${numberOfItemPerPage.value}`
    )
    .then((res) => {
      chronicDiseases.value = res.data;
    })
    .catch((err) => {})
    .finally(() => {
      isLoading.value = false;
    });
}
const addChron = ref({
  nameArabic: "",
  nameEnglish: "",
});
const checkDis = ref("");
const successAdd = ref();
function addChronicDiseas() {
  isLoading.value = true;
  axios
    .post("Admin/AddChronicDisease", addChron.value)
    .then((res) => {
      addDialog.value = false;
      successAdd.value = res.data;
      getChronicDiseases();
    })
    .catch((err) => {
      checkDis.value = err.response.data;
    })
    .finally(() => {
      isLoading.value = false;
      addChron.value = {};
      addsnackbar.value = true;
    });
}
const editChron = ref({
  nameArabic: "",
  nameEnglish: "",
});
function UpdateChronicDisease(id) {
  isLoading.value = true;
  axios
    .put(`Admin/UpdateChronicDisease?id=${id}`, editChron.value)
    .then((res) => {
      editDialog.value = false;
      getChronicDiseases();
    })
    .catch((err) => {})
    .finally(() => {
      isLoading.value = false;
      editsanckbar.value = true;
    });
}
function deleteChronicDisease(id) {
  isLoading.value = true;
  axios
    .put(`Admin/DeleteChronicDisease?id=${id}`)
    .then((res) => {
      deleteDialog.value = false;
      getChronicDiseases();
    })
    .finally(() => {
      isLoading.value = false;
      deletesanckbar.value = true;
    });
}

// .............pagination.............
function nextPage() {
  numberOfPage.value++;
  isLoading.value = true;
  getChronicDiseases();
}
function previousPage() {
  numberOfPage.value--;
  isLoading.value = true;
  getChronicDiseases();
}
// .............validation.............
const valid = ref(true);

const titleRule = ref([
  (v) => {
    if (v) return true;
    return "العنوان مطلوب";
  },
]);
const titleRuleEn = ref([
  (v) => {
    if (v) return true;
    return "title is requierd";
  },
]);

function validate() {
  if (valid.value) {
    isLoading.value = false;
    addChronicDiseas();
  }
}
</script>
<style scoped>
.select {
  height: 40px;
  background: #f2f2f2;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-chron {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, 260px);
  gap: 1rem;
}
</style>
