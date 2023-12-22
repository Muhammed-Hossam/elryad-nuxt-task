<template>
  <div class="relative inline-block text-center">
    <!-- Dropdown button -->
    <button type="button" @click="toggleDropdown" class="inline-flex items-center text-base font-medium focus:outline-none">
      {{ dropDownBtnText }}
      <!-- Dropdown arrow icon -->
      <div class="arrow-icon transition-transform duration-300 ease-in-out" :class="rotateArrowIcon">
        <img src="../static/icons/chevron-down.svg" alt="chevron-down-icon">
      </div>
    </button>

    <!-- Dropdown content -->
    <div
      v-if="isDropDownOpen"
      class="origin-top-right absolute right-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out">
      <div class="py-1 divide-y">
        <!-- Dropdown items -->
        <slot />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    dropDownBtnText: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      isDropDownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropDownOpen = !this.isDropDownOpen;
    }
  },
  computed: {
    rotateArrowIcon() {
      return this.isDropDownOpen ? 'rotate-180' : 'rotate-0';
    }
  },
}
</script>
