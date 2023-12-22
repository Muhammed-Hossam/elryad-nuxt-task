// store/books.js

export const state = () => ({
  books: [],
})

export const mutations = {
  SET_BOOKS(state, books) {
    const formattedBooks = books.map(book => ({
      ...book,
      price: Number(book.price.replace(/\$/, '')),
    }));
    state.books = formattedBooks;
  },
}

export const actions = {
  async fetchBooks({ commit }) {
    try {
      const response = await this.$axios.get('https://api.itbook.store/1.0/new')

      commit('SET_BOOKS', response.data.books)
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  },
}
