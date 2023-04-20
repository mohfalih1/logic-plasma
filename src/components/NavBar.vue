<template>
  <v-card class="card">
    <v-navigation-drawer
      color="primary"
      location="right"
      permanent
      class="rounded-xl ma-5"
      width="264"
      height="100vh"
    >
      <v-img
        to="/home"
        class="mt-5 mr-5 ml-5"
        src="../assets/plasmaLogo.png"
        width="232"
      ></v-img>
      <v-list class="mt-5 mr-5" width="232">
        <v-list-item
          active-class="secondary--text"
          router
          to="/"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-speedometer"
          title="الصفحة الرئيسية"
        ></v-list-item>
        <br />
        <v-list-item
          router
          to="/news"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-newspaper-variant-outline"
          title="الاخبار"
        ></v-list-item>
        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/provinces"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-city-variant-outline"
          title="المحافظات"
        ></v-list-item>
        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/chroni-diseases"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-virus-outline"
          title="الامراض المزمنة"
        ></v-list-item>
        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/donations"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-hand-heart-outline"
          title="المتبرعين"
        ></v-list-item>
        <br />
        <v-list-item
          active-class="secondary--text"
          router
          to="/import-export"
          class="bg-white rounded-lg text-primary"
          prepend-icon="mdi-export-variant"
          title="استيراد / تصدير"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2 mb-10">
          <v-btn block color="secondary"> تسجيل الخروج </v-btn>
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
