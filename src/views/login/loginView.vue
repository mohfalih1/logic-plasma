<template>
  <div class="contenier">
    <div class="boold-1">
      <iframe src="https://embed.lottiefiles.com/animation/87081"></iframe>
      <iframe src="https://embed.lottiefiles.com/animation/87081"></iframe>
    </div>
    <div class="content">
      <v-card class="card" color="primary">
        <v-card-text>
          <div class="logo">
            <v-img width="120px" src="../../assets/plasmaLogo.png"></v-img>
            <br />
            <h2>تسجيل الدخول</h2>
          </div>
          <br />
          <br />
          <v-form class="form">
            <div>
              <v-text-field
                class="bg-white rounded-lg pa-0"
                variant="plain"
                placeholder="البريد الالكتروني"
                type="email"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <br />
              <v-text-field
                class="bg-white rounded-lg pa-0"
                variant="plain"
                placeholder="الرمز السري"
                type="password"
                prepend-inner-icon="mdi-key"
              ></v-text-field>
              <br />
              <!-- <v-alert  dismissible
                 type="error"
                >اسم المستخدم او كلمة المرور خطأ</v-alert
              > -->
              <v-btn
                class="mt-6 pa-1"
                large
                rounded
                block
                style="height: 50px !important"
                elevation="0"
                color="secondary"
                fluid
                >تسجيل دخول</v-btn
              >
            </div>
          </v-form>
        </v-card-text>

        <div></div>
      </v-card>
      <br />
    </div>
    <div class="boold-2">
      <iframe src="https://embed.lottiefiles.com/animation/87081"></iframe>
      <iframe src="https://embed.lottiefiles.com/animation/87081"></iframe>
    </div>

    <!-- <v-card width="350" tile elevation="0" class="mt-0 pt-0" color="background">

          <v-form  ref="form" class="mt-0">
            <v-text-field
              label="البريد الالكتروني"
              append-icon="mdi-email"
            ></v-text-field>
            <v-text-field
              label="كلمة المرور"
              autocomplete
            ></v-text-field>


            <v-btn
              class="mt-6"
              large
              rounded
              block
              style="    height: 50px !important;"
              elevation="0"
              color="primary"
              fluid
            >تسجيل دخول</v-btn>
          </v-form>
</v-card> -->
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  direction: rtl;
}
iframe {
  background: none;
  border: none;
}
.contenier {
  height: 100vh;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.boold-1 {
  display: flex;
  justify-content: space-between;
}
.boold-2 {
  display: flex;
  justify-content: space-between;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card {
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 50px 0 rgba(238, 76, 76, 0.5);
  z-index: 10;
}
</style>
