<template>
  <div class="h-screen w-screen flex">
      <div class="my-auto mx-auto">
          <input-element 
            labelName="PRODUCT NAME" 
            labelId="productName" 
            inputType="text"
            :model="productName" 
            @input="setProductName($event)" 
          />
          {{productName}}
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
        layout:"dashboard",
        data(){
            return{

            }
        },
        computed:{
            ...mapState({
                productName: state => state.product.productName,
                price: state => state.product.price,
                category: state => state.product.category,
                supplierName: state => state.product.supplierName,
                quantity: state => state.product.quantity,
                imgSrc: state => state.product.imgSrc,
            })
        },
        methods:{
            ...mapMutations({
                setProductName : 'product/setProductName',
                setPrice : 'product/setPrice',
                setCategory : 'product/setCategory',
                setSupplierName : 'product/setSupplierName',
                setQuantity : 'product/setQuantity',
                setImgSrc : 'product/setImgSrc',
            })
        }
}
</script>

<style>

</style>