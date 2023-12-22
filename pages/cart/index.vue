<template>
  <div class="mt-9">
    <h1 class="inline-block text-4xl font-medium">سلة الشراء</h1>
    <div class="flex justify-between">
      <div class="flex flex-col gap-8 mt-8 divide-y-2 w-1/2">
        <CartItem v-for="(item, index) in cartItems" :key="index" :cart-item="item" />
      </div>
      <CartInvoice />
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import CartInvoice from '../../components/CartInvoice.vue';
export default {
    computed: {
        ...mapGetters('cart', ['cartItems'])
    },
    components: { CartInvoice, CartInvoice }
}
</script>
