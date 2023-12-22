<template>
  <header class="p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <div class="brand-icon">
        <img src="../static/meem-logo.png" alt="meem-logo">
      </div>

      <nav class="hidden md:flex gap-20">
        <ul class="flex gap-5">
          <li>
            <NuxtLink to="/" class="text-base font-medium">الرئيسية</NuxtLink>
          </li>
          <li>
            <drop-down dropDownBtnText="الدورات">
              <a href="#" class="block px-4 py-2 text-end text-base text-gray-700 hover:bg-gray-100">جميع الدورات</a>
              <a href="#" class="block px-4 py-2 text-end text-base text-gray-700 hover:bg-gray-100">تقنيات التعلم</a>
              <a href="#" class="block px-4 py-2 text-end text-base text-gray-700 hover:bg-gray-100">أدوات ومصادر تعليمية</a>
            </drop-down>
          </li>
          <li>
            <drop-down dropDownBtnText="الرخصة المهنية">
              <a href="#" class="block px-4 py-2 text-end text-base text-gray-700 hover:bg-gray-100">جميع الدورات</a>
              <a href="#" class="block px-4 py-2 text-end text-base text-gray-700 hover:bg-gray-100">تقنيات التعلم</a>
              <a href="#" class="block px-4 py-2 text-end text-base text-gray-700 hover:bg-gray-100">أدوات ومصادر تعليمية</a>
            </drop-down>
          </li>
          <li>
            <drop-down dropDownBtnText="حاسبة النقاط">
              <a href="#" class="block px-4 py-2 text-end text-base text-gray-700 hover:bg-gray-100">إحسب نقاط مفاضلتك</a>
              <a href="#" class="block px-4 py-2 text-end text-base text-gray-700 hover:bg-gray-100">إحسب نقاطك الموزونة</a>
            </drop-down>
          </li>
          <li>
            <NuxtLink to="/store" class="text-base font-medium">المتجر</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="icons-group flex gap-7">
        <NuxtLink to="/cart" class="relative">
          <img src="../static/icons/shopping-cart.svg" alt="">
          <div  class="absolute top-[-5px] right-[-6px] bg-red-500 text-white w-4 h-4 text-center rounded-full text-xs">
            {{ cartCount }}
          </div>
        </NuxtLink>
        <NuxtLink to="#">
          <img src="../static/icons/bell.svg" alt="">
        </NuxtLink>
        <NuxtLink to="#">
          <img src="../static/icons/search.svg" alt="">
        </NuxtLink>
        <div class="lang">
          <button class="flex gap-2">
            <span class="text-base font-medium">English</span>
            <img src="../static/icons/globe.svg" alt="">
          </button>
        </div>
      </div>
      <div class="user-profile flex gap-3 hover:cursor-pointer">
        <div class="user-photo rounded-full">
          <img src="../static/user-photo.jpg" class="rounded-full" width="35" height="35" alt="user-photo">
        </div>
        <div class="username flex items-center font-medium">
          <span class="name">محمد هارون</span>
          <span>
            <img src="../static/icons/chevron-down.svg" alt="chevron-down">
          </span>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters('cart', ['cartItemCount']),
    cartCount() {
      return this.cartItemCount;
    }
  }
}
</script>
