<template>
  <div>
    This is {{products}}
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
      layout:"dashboard",
      computed:{
        ...mapState({
          products: state => state.product.products
        })
      },
      methods: {
        ...mapActions({
          getProducts: 'product/getProducts'
        })
      },
      mounted(){
        this.getProducts();
      }
}
</script>

<style>

</style>