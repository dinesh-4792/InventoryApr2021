<template>
<div class="w-screen h-screen">
    <div class="w-full h-full flex">
        <div class="flex w-1/6 bg-blue-200">
          <side-menu>
            <template v-slot:sideMenuItems>
              <!-- Home -->
              <side-menu-item path="/" pathName="Home">
                <template v-slot:pathIcon>
                  <i class="fas fa-home"></i>
                </template>
              </side-menu-item>

              <!-- Product -->
              <side-menu-item path="/product" pathName="Product">
                <template v-slot:pathIcon>
                  <i class="fas fa-seedling"></i>
                </template>
              </side-menu-item>

              <!-- Product - Inactive -->
              <side-menu-item path="/product/inactive" pathName="Inactive Product">
                <template v-slot:pathIcon>
                  <i class="far fa-angry"></i>
                </template>
              </side-menu-item>

              <!-- Product - New -->
              <side-menu-item path="/product/new" pathName="New Product">
                <template v-slot:pathIcon>
                  <i class="far fa-star"></i>
                </template>
              </side-menu-item>

              <!-- Product - Update -->
              <side-menu-item path="/product/update" pathName="Update Product">
                <template v-slot:pathIcon>
                  <i class="far fa-edit"></i>
                </template>
              </side-menu-item>

            </template>
          </side-menu>
        </div>
        <div class="flex w-full bg-yellow-50"><Nuxt/></div>
    </div>
</div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
export default {
  components: { SideMenu },

}
</script>

<style>

</style>