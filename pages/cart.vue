<template>
  <div>
    <div v-if="cart.length === 0" class="no-cart-products">
      <v-card>
        <v-card-title> The Cart is Empty! </v-card-title>
        <v-card-subtitle> You can see more products in Home! </v-card-subtitle>
        <v-img
          contain
          max-height="500"
          max-width="500"
          src="https://i.imgur.com/LuyhYad.png"
        ></v-img>
      </v-card>
    </div>
    <div v-else>
      <!-- <v-col v-for="itemcart in cart" :key="itemcart.id" cols="12" md="4">
        <cart-tile :cart="itemcart"/>
      </v-col>
       -->

       <cart-tile/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import CartTile from '@/components/Folder1/CartTile.vue';
import { Cart } from '@/store/types';
const shopModule = namespace('shop/');
@Component({
  components: { CartTile },
})
export default class ViewCart extends Vue {
  @shopModule.State('cart') cart!: Cart[];
}
</script>

