<template>
    <div class="app-bar">
      <div class="wlecome-name">
        <h4>أهلا مروان</h4>

        <img src="../assets/Ellipse 1.png" />
      </div>
      <div class="all-frame">
        <img
          class="frame-1"
          src="../assets/Frame (1).png"
          height="49"
          width="49"
        />
        <img
          class="frame-2"
          src="../assets/Frame (1).png"
          height="49"
          width="49"
        />
      </div>
    </div>
  <!-- <div class="app-bar">
     <v-list-item
          
                prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            title="Jane Smith"
          ></v-list-item>
          <v-img src="../assets/Frame (1).png" width="100" height="100"></v-img>
</div> -->
</template>
<style scoped>
.app-bar {
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  box-shadow: none;
  padding: 8px 16px;
  background: #ffffff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  margin: 7px 27px 0px 7px;
  border-radius: 8px;
  height: 80px;
}
.wlecome-name {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  margin: 5px;
}
.wlecome-name img {
  width: 64px;
  height: 64px;
  border: 1px solid #c4c7c5;
  border-radius: 50%;
}
.all-frame {
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
}
.frame-1 {
  margin-top: 12px;
}
.frame-2 {
  margin: 0px 5px;
}
</style>
