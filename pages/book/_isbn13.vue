<template>
  <div>
    <div class="flex justify-between gap-10 mt-20">
      <div class="book-details flex flex-col">
        <div class="book-details__content">
          <p class="book-title text-3xl text-[#222222] font-medium">{{ bookTitle }}</p>
          <div class="book-choose__controls mt-7">
            <p class="text-base font-medium">أختر نوع الكتاب:</p>
            <BookTypeRadioBtn @book-type-change="getBookType" />
            <p v-if="bookTypeErrorMessage" class="text-base text-red-500">{{ bookTypeErrorMessage }}</p>
          </div>
          <p class="book-price text-3xl text-[#3E3E3E] font-medium mt-8">{{ bookPrice }} ريال</p>
          <div class="addcart-controls flex justify-between mt-10">
            <div class="addToCart-btn">
              <button @click="addToCart" class="py-3.5 px-7 bg-[#FFC107] rounded-full hover:bg-amber-500 transition-colors duration-300 ease-in-out">أضف إلى السلة</button>
            </div>
            <div class="count-controls flex justify-between items-center gap-5">
              <button @click="increaseBookCount" class="plus-btn p-3 border border-[#A9CDFF] rounded-full">
                <img src="../../static/icons/plus-small.svg" alt="plus-icon">
              </button>
              <span class="count text-base font-medium">{{ bookCount }}</span>
              <button @click="decreaseBookCount" class="minus-btn p-3 border border-[#A9CDFF] rounded-full">
                <img src="../../static/icons/minus-small.svg" alt="minus-icon">
              </button>
            </div>
          </div>
        </div>
        <div class="book-description w-[31.89744rem] mt-16">
          <p class="text-xl font-bold">عن الكتاب:</p>
          <p class="text-base font-normal">{{ bookDescription }}</p>
        </div>
      </div>
      <div class="book-image w-[33.125rem] h-[21.23681rem] bg-gray-200 rounded-lg">
        <img :src="bookImage" class="w-full h-full object-fill rounded-lg" alt="">
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  name: 'book-details',
  data() {
    return {
      bookISBN13: this.$route.params.isbn13,
      bookDetails: null,
      bookCount: 1,
      bookType: null,
      bookTypeErrorMessage: null
    }
  },
  computed: {
    bookImage() {
      if (this.bookDetails) {
        return this.bookDetails.image;
      }
    },
    bookTitle() {
      if (this.bookDetails) {
        return this.bookDetails.title;
      }
    },
    bookPrice() {
      if (this.bookDetails) {
        return this.bookDetails.price;
      }
    },
    bookDescription() {
      if (this.bookDetails) {
        return this.bookDetails.desc;
      }
    }
  },
  methods: {
    async getBookDetails() {
      try {
        const response = await this.$axios.get(`https://api.itbook.store/1.0/books/${this.bookISBN13}`);
        this.bookDetails = response.data;
        this.removeDollarSignFromPrice();
      } catch(error) {
        console.error('Error fetching book details:', error)
      }
    },
    removeDollarSignFromPrice() {
      // Check if bookDetails and price are present
      if (this.bookDetails && this.bookDetails.price) {
        // Modify the price property in the bookDetails object
        this.bookDetails.price = parseFloat(this.bookDetails.price.replace('$', ''));
      }
    },
    increaseBookCount() {
      this.bookCount++;
    },
    decreaseBookCount() {
      if (this.bookCount !== 1) {
        this.bookCount--;
      }
    },
    getBookType(type) {
      this.bookType = type;
    },
    addToCart() {
      const cartItem = {
        isbn13: this.bookISBN13,
        title: this.bookTitle,
        image: this.bookImage,
        bookType: this.bookType,
        price: this.bookPrice,
        count: this.bookCount
      }
      if (this.bookType) {
        this.$store.dispatch('cart/addItem', cartItem)
        this.bookTypeErrorMessage = null;
      }else {
        this.bookTypeErrorMessage = 'يرجى اختيار نوع الكتاب قبل إضافته إلي السلة'
      }
    }
  },
  mounted() {
    console.log('bookISBN13: ', this.bookISBN13);
    this.getBookDetails();
  },
  watch: {
    bookDetails(newValue) {
      console.log(newValue);
    },
  }
}
</script>
