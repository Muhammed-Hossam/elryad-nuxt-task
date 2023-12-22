<template>
  <div class="mt-9">
    <div class="flex gap-20">
      <h1 class="inline-block text-4xl font-medium">المتجر</h1>
      <SearchBar />
    </div>
    <div class="flex flex-wrap gap-5 justify-center mt-20">
      <BookCard v-for="(book, index) in paginatedBooks" :key="index" :book="book" />
    </div>
    <div class="flex flex-row-reverse justify-center mt-14 mb-32">
      <PaginationBtn v-for="(page, index) in totalPages" :key="index" :index="index" :current-page="currentPage" @go-to-page="goToPage" />
    </div>
  </div>
</template>


<script>
export default {
  name: 'book-store',
  data() {
    return {
      currentPage: 0,
      booksPerPage: 9
    }
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    }
  },
  computed: {
    books() {
      return this.$store.state.books
    },
    paginatedBooks() {
      const start = this.currentPage * this.booksPerPage;
      const end = start + this.booksPerPage;
      return this.books.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.books.length / this.booksPerPage);
    }
  },

  async mounted() {
    await this.$store.dispatch('fetchBooks')
  },
  watch: {
    books(newBooks) {
      console.log(newBooks)
    }
  }
}
</script>

