<template>
  <footer class="h-[24.3125rem]">
    <div class="footer-content px-32">
      <div class="mt-14 mb-20 w-full h-[0.0625rem] bg-[#3E3E3E] opacity-20" ></div>
      <div class="flex flex-col justify-center items-center gap-10">
        <div class="meem-logo">
          <img src="../static/meem-logo.png" alt="meem-logo">
        </div>
        <ul class="links flex justify-center gap-9">
          <li>
            <NuxtLink class="text-[#3E3E3E] text-base font-normal" to="/">الصفحة الرئيسية</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-[#3E3E3E] text-base font-normal" to="#">عن المنصة</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-[#3E3E3E] text-base font-normal" to="#">الأسئلة الشائعة</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-[#3E3E3E] text-base font-normal" to="#">الشروط والأحكام</NuxtLink>
          </li>
          <li>
            <NuxtLink class="text-[#3E3E3E] text-base font-normal" to="#">اتصل بنا</NuxtLink>
          </li>
        </ul>
        <div class="copyright mt-24 flex w-full justify-between items-center">
          <p class="text-[#3E3E3E]/[0.5]">جميع الحقوق محفوظة لدى منصة ميم التعليمية</p>
          <div class="flex gap-2">
            <span>
              <img src="../static/icons/elryad-logo.png" alt="">
            </span>
            <span class="text-[#2E386B] text-sm">تصميم شركة الرياض</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
