<template>
  <div class="flex flex-col w-[21.75rem] h-[24.75538rem] rounded-lg bg-white shadow-md overflow-hidden">
    <!-- top Part: Book Image -->
    <div class="w-full h-1/2">
      <img :src="book.image" alt="Book Cover" class="object-cover w-full h-full rounded-t-lg" />
    </div>

    <!-- bottom Part: Book Details -->
    <div class="w-full h-1/2 p-4">
      <div class="book-details flex flex-col gap-5">
        <h2 class="text-xl text-[#3E3E3E] font-medium mb-2 truncate" style="direction: ltr;">{{ book.title }}</h2>
        <p class="text-[#3E3E3E] mb-2">
          <span class="book-price text-xl font-medium">{{ book.price }}</span>
          <span class="text-base">ريال</span>
        </p>
      </div>

      <NuxtLink
        :to="bookRoute" class="block w-full mt-3 bg-blue-500 text-white text-center px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
        شراء الكتاب
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bookRoute() {
      return `/book/${this.book.isbn13}`;
    }
  },
};
</script>

