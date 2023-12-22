<template>
  <div class="relative inline-block">
    <input
      v-model="search"
      type="text"
      placeholder="البحث"
      class="pr-14 py-3 w-[30.35825rem] border border-gray-300 rounded-full focus:outline-none"
    />
    <div class="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 text-gray-400"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
};
</script>
