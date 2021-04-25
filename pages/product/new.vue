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
            <input-element 
            labelName="PRICE" 
            labelId="price" 
            inputType="number"
            :model="price" 
            @input="setPrice($event)" 
            class="my-2"
            />
            <!-- {{setPrice}} -->
            <input-element 
            labelName="CATEGORY" 
            labelId="category" 
            inputType="text"
            :model="category" 
            @input="setCategory($event)"
            class="my-2" 
            />
            <!-- {{setCategory}} -->
            <input-element 
            labelName="SUPPLIER NAME" 
            labelId="supplierName" 
            inputType="text"
            :model="supplierName" 
            @input="setSupplierName($event)" 
            class="my-2"
            />
            <!-- {{setSupplierName}} -->
            <input-element 
            labelName="QUANTITY" 
            labelId="quantity" 
            inputType="number"
            :model="quantity" 
            @input="setQuantity($event)" 
            class="my-2"
            />
            <!-- {{setQuantity}} -->
            <input-element 
            labelName="IMAGE URL" 
            labelId="imgSrc" 
            inputType="text"
            :model="imgSrc" 
            @input="setImgSrc($event)" 
            class="my-2"
            />
            <!-- {{setImgSrc}} -->
            <button type="button" class="py-2 px-4 bg-blue-500 text-white" @click="createProduct">Create</button>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
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
            }),
            ...mapActions({
                createProduct: "product/createProduct"
            })
        }
}
</script>

<style>

</style>