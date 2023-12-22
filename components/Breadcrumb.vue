<template>
<nav class="w-full rounded-md">
  <ol class="list-reset flex">
    <li>
      <NuxtLink
        to="/"
        class="text-[#777777] text-sm transition duration-150 ease-in-out"
        >الرئيسية
      </NuxtLink>
    </li>
    <li>
      <span class="mx-2 text-neutral-500 dark:text-neutral-400">></span>
    </li>
    <li v-for="(crumb, index) in crumbs" :key="index" class="text-base text-[#222222]" :class="{ 'text-blue-500': index === crumbs.length - 1 }">
      <NuxtLink :to="crumb.to">{{ crumb.text }}</NuxtLink>
    </li>
  </ol>
</nav>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true,
    },
  },
};
</script>

