// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore("counter", () => {
  const dialog = ref(false);

  const date = ref([
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
    { Image: "", title: "news-1", date: "3434343" },
  ]);
  const donations = ref([
    {
      name: "1محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "2محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
    {
      name: "محمد قاسم احمد",
      phoneNumber: "+9647736434814",
      city: "بغداد",
      typeBlood: "دم",
      typeGroup: "A+",
    },
  ]);
  return { date, donations, dialog };
});
