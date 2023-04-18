

<template>
 <v-card 
 class="card"
 >
      <v-navigation-drawer
        color="primary"
        location="right"
        permanent
        class="rounded-lg ma-5"
        width="264"
      >
      <v-img to="/home" class="mt-5 mr-5" src="../assets/plasmaLogo.png" width="232"></v-img>
        <v-list class="mt-5 mr-5" width="232" >
          <v-list-item active-class="secondary--text" router to="/"  class="bg-white rounded-lg text-primary" prepend-icon="mdi-view-dashboard" title="الاخبار"></v-list-item>
          <br>
          <v-list-item active-class="secondary--text" router to="/" class="bg-white rounded-lg text-primary" prepend-icon="mdi-account-box" title="المحافظات"></v-list-item>
          <br>
          <v-list-item active-class="secondary--text" router to="/" class="bg-white rounded-lg text-primary" prepend-icon="mdi-gavel" title="المتبرعين"></v-list-item>
          <br>
          <v-list-item active-class="secondary--text" router to="/" class="bg-white rounded-lg text-primary" prepend-icon="mdi-gavel" title="استيراد / تصدير"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2 mb-10">
            <v-btn block color="secondary">
              تسجيل الخروج
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
  </v-card>
</template>

<style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");
* {
  font-family: "Cairo", sans-serif;
}

</style>