<template>
  <button  @click="goToPage(index)"
    class="mx-2 px-4 py-2 bg-[#F8F7FB] text-black rounded cursor-pointer"
    :class="{ '!bg-[#2A7DE5] !text-white': index === currentPage }">
    {{ index + 1 }}
  </button>
</template>


<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  emits: ['go-to-page'],
  methods: {
    goToPage(page) {
      this.$emit('go-to-page', page);
    }
  }
}
</script>
