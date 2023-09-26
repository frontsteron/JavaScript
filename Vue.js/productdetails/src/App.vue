<template>
  <div id="app">
    <ProductDetails :product="productData" />
  </div>
</template>

<script>
import ProductDetails from './components/ProductDetails.vue';

export default {
  data() {
    return {
      productData: {
        name: 'Example Product',
        price: 99.99,
        available: true,
      },
    };
  },
  components: {
    ProductDetails,
  },
};
</script>
