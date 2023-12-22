<template>
  <div class="flex">
    <div class="book-img w-52 h-40 rounded-md">
      <img :src="cartItem.image" class="w-full h-full rounded-md" alt="book-img">
    </div>
    <div class="flex flex-col justify-around">
      <p class="book-title text-base font-medium">{{ cartItem.title }}</p>
      <div class="book-price text-xl text-[#2A7DE5] font-medium">
        <span>{{ cartItem.price }}</span>
        <span>ر.س</span>
      </div>
      <div class="count text-base">
        <span class="font-medium">العدد:</span>
        <span> {{ cartItem.count }} </span>
      </div>
      <div class="book-type">
        <span class="font-medium">نوع الكتاب:</span>
        <span> {{ cartItem.bookType }} </span>
      </div>
      <button @click="removeCartItem" class="remove-item flex w-fit items-center text-gray-400 hover:text-gray-500 transition-colors duration-300 ease-in-out">
        <span>
          <img src="../static/icons/trash.svg" alt="trash-icon">
        </span>
        <span>حذف من السلة</span>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'cartItem',
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeCartItem() {
      this.$store.dispatch('cart/removeItem', this.cartItem.isbn13);
    }
  }
}
</script>
