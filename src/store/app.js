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
  const chronic = [
    {
      arabic: "أمراض القلب الأوعية الدموية",
      english: "Cardiovascular Disease",
    },
    {
      arabic: "السكري",
      english: "Diabetes",
    },
    {
      arabic: "السرطان",
      english: "Cancer",
    },
    {
      arabic: "أمراض الجهاز التنفسي",
      english: "Respiratory System Diseases",
    },
    {
      arabic: "أمراض القلب الأوعية الدموية",
      english: "Cardiovascular Disease",
    },
    {
      arabic: "السكري",
      english: "Diabetes",
    },
    {
      arabic: "السرطان",
      english: "Cancer",
    },
    {
      arabic: "أمراض الجهاز التنفسي",
      english: "Respiratory System Diseases",
    },
    {
      arabic: "أمراض القلب الأوعية الدموية",
      english: "Cardiovascular Disease",
    },
    {
      arabic: "السكري",
      english: "Diabetes",
    },
    {
      arabic: "السرطان",
      english: "Cancer",
    },
    {
      arabic: "أمراض الجهاز التنفسي",
      english: "Respiratory System Diseases",
    },
    {
      arabic: "أمراض القلب الأوعية الدموية",
      english: "Cardiovascular Disease",
    },
    {
      arabic: "السكري",
      english: "Diabetes",
    },
    {
      arabic: "السرطان",
      english: "Cancer",
    },

  ];
  const notifications = [
    { title: "عنوان الاشعار", content: "محتوى الاشعار الخاص بالتطبيق" },
    { title: "عنوان الاشعار", content: "محتوى الاشعار الخاص بالتطبيق" },
    { title: "عنوان الاشعار", content: "محتوى الاشعار الخاص بالتطبيق" },
    { title: "عنوان الاشعار", content: "محتوى الاشعار الخاص بالتطبيق" },
    { title: "عنوان الاشعار", content: "محتوى الاشعار الخاص بالتطبيق" },
    { title: "عنوان الاشعار", content: "محتوى الاشعار الخاص بالتطبيق" },
    { title: "عنوان الاشعار", content: "محتوى الاشعار الخاص بالتطبيق" },
    { title: "عنوان الاشعار", content: "محتوى الاشعار الخاص بالتطبيق" },
  ];
  return { date, donations, dialog, chronic, notifications };
});
