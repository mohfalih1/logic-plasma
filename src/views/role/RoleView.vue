<template>
  <Loader v-if="isLoading" />
  <v-card class="card-temp-role">
    <v-card-title class="d-flex ma-5">
      <v-icon class="ml-3" icon="mdi-shield-account-outline"></v-icon>
      <h2>المشرفين</h2>
    </v-card-title>
    <v-card-text class="pa-0">
      <div class="header">
        <div class="show"><h3>عرض المشرفين</h3></div>
        <v-btn
          @click="isAddRole = true"
          class="add"
          rounded="0"
          height="50"
          elevation="0"
        >
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
          <h3>اضافة مشرف جديد</h3>
        </v-btn>
      </div>
    </v-card-text>

    <div class="grid-role ma-5">
      <v-card class="role-card" v-for="item in roleData" :key="item.id">
        <div class="role-title">
          <div class="w-75">
            <v-icon icon="mdi-shield-account-outline" class="ml-2"></v-icon>
            {{ item.name }}
          </div>
          <div>
            <img src="@/assets/Frame(1).png" height="49" width="49" />
          </div>
        </div>
        <div>نوع المشرف: {{ item.role === 0 ? "ادمن" : "سوبر ادمن" }}</div>
        <hr class="w-100" />
        <div>الايميل: {{ item.email }}</div>
        <hr class="w-100" />
        <!-- <div class="password-card">
          <div>كلمة المرور:*******</div>
          <div class="icon-password">
            <v-icon color="primary" icon="mdi-eye"></v-icon>
          </div>
        </div> -->
        <v-card-actions class="pa-0">
          <div class="role-button">
            <v-btn
              @click="showModel('edit', item)"
              class="edit-button"
              color="white"
              variant="text"
              >تعديل المشرف
            </v-btn>
            <v-btn
              @click="showModel('block', item)"
              class="block-button"
              color="#ff2c54"
              variant="text"
            >
              تعطيل الحساب
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </div>
    <!-- pagination  -->
    <div class="pag">
      <v-container class="pagination">
        <button :disabled="roleData.length < 8" @click="nextPage">&lt;</button>
        <button
          v-if="roleData.length >= 8"
          :disabled="roleData.length < 8"
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
    </div>
    <!-- pagination  -->
  </v-card>

  <!-- start add role -->
  <v-row justify="center">
    <v-dialog v-model="isAddRole" persistent width="600">
      <v-form ref="validForm">
        <v-card rounded="xl">
          <v-card-title class="text-center text-primary pt-4">
            <span> اضافة مشرف جديد</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-model="newUser.name"
                      :rules="nameRules"
                      clearable
                      variant="plain"
                      placeholder="اسم المشرف"
                      type="text"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-model="newUser.email"
                      :rules="emailRules"
                      clearable
                      variant="plain"
                      placeholder="الايميل"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-model="newUser.password"
                      :rules="passwordRules"
                      clearable
                      variant="plain"
                      placeholder="كلمة المرور"
                      type="password"
                      :items="governorates"
                      item-title="nameArabic"
                      item-value="id"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-select
                      v-model="newUser.role"
                      :items="Admin"
                      item-title="name"
                      item-value="value"
                      clearable
                      variant="plain"
                      placeholder="نوع المشرف"
                      type="text"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="select">
                    <v-autocomplete
                      :items="MainRole"
                      v-model="newUser.cliams[0].privliages"
                      :rules="roleRules"
                      item-title="name"
                      item-value="value"
                      placeholder="صلاحية الوصول"
                      outlined
                      dense
                      multiple
                      chips
                      clearable
                      deletable-chips
                      small-chips
                      variant="plain"
                      persistent-hint
                    ></v-autocomplete>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="pb-5">
            <v-btn
              @click="validate()"
              class="add-edit-button"
              color="primary"
              variant="text"
            >
              اضافة المتبرع
            </v-btn>
            <v-btn
              class="add-back-button"
              color="white"
              variant="text"
              @click="isAddRole = false"
            >
              <v-icon icon="mdi-greater-than"></v-icon>
              العودة
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>

  <!-- end add role -->
  <!-- start edit role -->
  <v-row justify="center">
    <v-dialog v-model="isEditRole" persistent width="600">
      <v-form ref="validForm">
        <v-card rounded="xl">
          <v-card-title class="text-center text-primary pt-4">
            <span> تعديل المشرف </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-model="editUser.name"
                      :rules="nameRules"
                      clearable
                      variant="plain"
                      placeholder="اسم المشرف"
                      type="text"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-model="editUser.email"
                      :rules="phoneRules"
                      clearable
                      variant="plain"
                      placeholder="البريد الالكتروني"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-text-field
                      v-model="editUser.password"
                      :rules="passwordRules"
                      clearable
                      variant="plain"
                      placeholder="كلمة المرور"
                      type="password"
                      :items="governorates"
                      item-title="nameArabic"
                      item-value="id"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="select">
                    <v-select
                      v-model="editUser.role"
                      :items="Admin"
                      item-title="name"
                      item-value="value"
                      clearable
                      variant="plain"
                      placeholder="نوع المشرف"
                      type="text"
                    ></v-select>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="select">
                  <v-autocomplete
                    :items="MainRole"
                    v-model="editUser.cliams[0].privliages"
                    :rules="roleRules"
                    item-title="name"
                    item-value="value"
                    placeholder="صلاحية الوصول"
                    outlined
                    dense
                    multiple
                    chips
                    clearable
                    deletable-chips
                    small-chips
                    variant="plain"
                    persistent-hint
                  ></v-autocomplete>
                  </div>
                  <!-- <div class="chip">
                    <h5>صلاحية الوصول:</h5>
                    <div class="roles-check">
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        class="d-flex algin-center"
                        >الصفحة الرئيسية</v-checkbox
                      >
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        class="d-flex algin-center"
                        >الاخبار</v-checkbox
                      >
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        class="d-flex algin-center"
                      >
                        المتبرعين</v-checkbox
                      >
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        class="d-flex algin-center"
                      >
                        الامراض المزمنة
                      </v-checkbox>
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        class="d-flex algin-center"
                      >
                        ادارة المشرفين
                      </v-checkbox>
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        class="d-flex algin-center"
                      >
                        سجل النشاط
                      </v-checkbox>
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        class="d-flex algin-center"
                      >
                        الاشعارت
                      </v-checkbox>
                      <v-checkbox
                        :color="!select ? 'primary' : 'white'"
                        class="d-flex algin-center"
                      >
                        رفع وتنزيل البيانات
                      </v-checkbox>
                    </div>
                  </div> -->
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="pb-5">
            <v-btn
              @click="validate()"
              class="add-edit-button"
              color="primary"
              variant="text"
            >
              تعديل
            </v-btn>
            <v-btn
              class="add-back-button"
              color="white"
              variant="text"
              @click="isEditRole = false"
            >
              <v-icon icon="mdi-greater-than"></v-icon>
              العودة
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>

  <!-- end add role -->
  <!-- end delete notification  -->
  <v-row justify="center">
    <v-dialog v-model="isBlockeRole" persistent width="262">
      <v-card rounded="xl">
        <v-card-title class="text-center text-primary pb-0">
          <span> تعطيل حساب المشرف</span>
        </v-card-title>
        <v-card-text> هل انت متأكد من تعطيل حساب المشرف ؟ </v-card-text>
        <v-card-actions class="d-flex align-center justify-center">
          <div class="d-flex align-center justify-center my-1">
            <v-btn
              @click="deleteUser(selectedItem.id)"
              class="delete-button"
              color="white"
              variant="text"
            >
              تعطيل
            </v-btn>
            <v-btn
              @click="isBlockeRole = false"
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
import dayjs from "dayjs";
import { ref, onMounted } from "vue";
import axios from "@/server/axios";
const isLoading = ref(false);
const isBlockeRole = ref(false);
const isAddRole = ref(false);
const isEditRole = ref(false);
const selectedItem = ref({});
const showModel = (type, item) => {
  selectedItem.value = item;
  if (type === "edit") {
    isEditRole.value = true;
    blog.value = item;
  } else if (type === "block") {
    isBlockeRole.value = true;
  }
  editUser.value.name = item.name;
  editUser.value.email = item.email;
  editUser.value.role = item.role;
};
// .............pagination.............
function nextPage() {
  numberOfPage.value++;
  isLoading.value = true;
  geUsers();
}
function previousPage() {
  numberOfPage.value--;
  isLoading.value = true;
  geUsers();
}
onMounted(() => {
  geUsers();
});
const roleData = ref([]);
const numberOfPage = ref(1);
const NumberOfItemPerPage = ref(8);
function geUsers() {
  isLoading.value = true;
  axios
    .get(
      `Admin/GetUsers?numberOfPage=${numberOfPage.value}&NumberOfItemPerPage=${NumberOfItemPerPage.value}`
    )
    .then((res) => {
      roleData.value = res.data;
      console.log(roleData.value);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isLoading.value = false;
    });
}

const newUser = ref({
  name: null,
  email: null,
  password: null,
  role: null,
  cliams: [
    {
      privliages: null,
      create: true,
      read: true,
      update: true,
      delete: true,
    },
  ],
});
function addUser() {
  isLoading.value = true;
  axios
    .post("Admin/AddUser", newUser.value)
    .then((res) => {
      console.log(res);
      geUsers();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isAddRole.value = false;
      isLoading.value = false;
    });
}
const editUser = ref({
  name: null,
  email: null,
  password: null,
  role: null,
  cliams: [
    {
      privliages: null,
      create: null,
      read: null,
      update: null,
      delete: null,
    },
  ],
});
function updateUser(id) {
  isLoading.value = true;
  axios
    .put(`Admin/EditUser?id=${id}`, editUser.value)
    .then((res) => {
      console.log(res);
      geUsers();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isEditRole.value = false;
      isLoading.value = false;
    });
}
function deleteUser(id) {
  isLoading.value = true;
  axios
    .put(`Admin/DeleteUser?id=${id}`)
    .then((res) => {
      console.log(res);
      geUsers();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isBlockeRole.value = false;
      isLoading.value = false;
    });
}
const validForm = ref();
const valid = ref(true);

const passwordRules = ref([(v) => !!v || "الرمز مطلوب"]);
const nameRules = ref([(v) => !!v || " الاسم مطلوب"]);
const emailRules = ref([(v) => !!v || " الايميل مطلوب"]);
const adminRules = ref([(v) => !!v || " نوع المشرف مطلوب"]);
const roleRules = ref([(v) => !!v || "يجب تحديد واحد على الاقل"]);
async function validate() {
  valid.value = await validForm.value.validate();

  if (valid.value) {
    isLoading.value = false;
    addUser();
  }
}
const MainRole = ref([
  { name: "الصفحة الرئيسية", value: 0 },
  { name: "الاخبار", value: 1 },
  { name: "المتبرعين", value: 2 },
  { name: "الامراض المزمنة", value: 3 },
  { name: "ادارة المشرفين", value: 4 },
  { name: "سجل النشاط", value: 5 },
  { name: "الاشعارات", value: 6 },
  { name: "رفع/تنزيل البيانات", value: 7 },
]);
const Admin = ref([
  { name: "ادمن", value: 0 },
  { name: "سوبر ادمن", value: 1 },
]);
</script>
<style scoped>
.card-temp-role {
  margin: 1px 10px 7px 7px;
  border-radius: 16px;
  width: 100%;
  height: 120vh;
}
.grid-role {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 55%);
  column-gap: 1px;
  row-gap: 1em;
  height: 70vh;
}

.role-card {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 8px;
  gap: 8px;
  width: 262px;
  height: 220px;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}
.role-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
}
.password-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
}
.icon-password {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #ff2c5433;
}
.role-button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15rem;
  height: 100%;
}
.edit-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  width: 50%;
  height: 36px;
  background: #ff2c54;
  border-radius: 8px;
}
.block-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  width: 50%;
  height: 36px;
  color: #ff2c54;
  background: #ff2c5433;
  border-radius: 8px;
}
.pag {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 40vh;
}
.roles-check {
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 55%);
}
.roles-check > * {
  width: 3rem;
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
</style>
