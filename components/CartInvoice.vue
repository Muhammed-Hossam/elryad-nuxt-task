<template>
  <div class="w-80 h-96 p-8 py-10 shadow-xl rounded-lg -translate-y-8">
    <div class="flex flex-col gap-8 border-b pb-8">
      <div class="total-price flex justify-between items-center">
        <span class="text-lg font-normal text-[#777777]">المجموع الكلي:</span>
        <div class="text-2xl font-medium text-[#2A7DE5]">
          <span>{{ cartTotalPrice }}</span>
          <span>ر.س</span>
        </div>
      </div>
      <div class="discount flex justify-between items-center">
        <span class="text-lg font-normal text-[#777777]">الخصم:</span>
        <div class="text-2xl font-medium text-[#2A7DE5]">
          <span>0</span>
          <span>ر.س</span>
        </div>
      </div>
    </div>
    <div class="discount-code__form mt-5">
      <form>
        <div class="flex flex-col">
          <label for="discount-code" class="text-sm text-[#777777] mb-2">هل لديك كود خصم؟</label>
          <div class="flex gap-3">
            <input class="w-3/4 p-2 outline-0 border border-gray-300 rounded-lg" type="text" />
            <button class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 ease-in-out">إضافة</button>
          </div>
          <button class="subscribe py-4 px-6 bg-[#FFC107] hover:bg-amber-500 rounded-full mt-8 transition-colors duration-300 ease-in-out font-medium">أشترك الأن</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'cartInvoice',
  computed: {
    ...mapGetters('cart', ['cartTotalPrice'])
  }
}
</script>
