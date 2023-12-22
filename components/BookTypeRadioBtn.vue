<template>
  <div class="flex gap-10">
  <div class="inline-flex items-center">
    <label class="relative flex items-center p-3 pr-0 rounded-full cursor-pointer" htmlFor="printed">
      <input name="type" type="radio"
        class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-[#777777] text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        id="printed"
        value="كتاب مطبوع"
        v-model="bookType"
        @change="emitBookType"
        />
      <span
        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-1/2 left-[67%] transform -translate-y-1/2 -translate-x-1/2 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
    </label>
    <label class="mt-px font-medium text-sm text-gray-700 cursor-pointer select-none" htmlFor="printed">
      كتاب مطبوع
    </label>
  </div>
  <div class="inline-flex items-center">
    <label class="relative flex items-center p-3 pr-0 rounded-full cursor-pointer" htmlFor="pdf">
      <input name="type" type="radio"
        class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-[#777777] text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        id="pdf"
        value="pdf"
        v-model="bookType"
        @change="emitBookType"
      />
      <span
        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-1/2 left-[65%] transform -translate-y-1/2 -translate-x-1/2 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
        </svg>
      </span>
    </label>
    <label class="mt-px font-medium text-sm text-gray-700 cursor-pointer select-none" htmlFor="pdf">
      كتاب PDF
    </label>
  </div>
</div>
</template>


<script>
export default {
  emits: ['book-type-change'],
  data() {
    return {
      bookType: null,
    }
  },
  methods: {
    emitBookType() {
      this.$emit('book-type-change', this.bookType);
    }
  },
  watch: {
    bookType(newValue) {
      console.log('book type: ', this.bookType)
    }
  }
}
</script>
