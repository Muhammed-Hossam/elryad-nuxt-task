<template>
  <div>
    <AppHeader />
    <GradientLayer />
    <main class="min-h-screen mt-5">
      <div class="container mx-auto px-12">
        <Breadcrumb :crumbs="breadcrumbs" />
        <Nuxt />
      </div>
    </main>
    <AppFooter />
  </div>
</template>


<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      breadcrumbs: [],
    };
  },
  watch: {
    $route(to) {
      this.updateBreadcrumbs(to);
    },
  },
  mounted() {
    this.updateBreadcrumbs(this.$route);
  },
  methods: {
    updateBreadcrumbs(route) {
      const segments = route.path.split('/').filter(segment => segment !== '');
      this.breadcrumbs = segments.map((segment, index) => ({
        text: segment === 'store' ? 'المتجر' : segment === 'cart' ? 'السلة' : segment,
        to: `/${segments.slice(0, index + 1).join('/')}`,
      }));
    },
  },
  async created() {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    await this.$store.dispatch('cart/initCart', storedCartItems);
  },
}
</script>
