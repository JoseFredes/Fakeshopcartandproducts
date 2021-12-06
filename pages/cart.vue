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
       <cart-component/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import CartComponent from '~/components/Folder1/CartComponent.vue';
import { CartItems } from '@/store/types';
const shopModule = namespace('shop/');
@Component({
  components: { CartComponent },
})
export default class ViewCart extends Vue {
  @shopModule.State('cart') cart!: CartItems[];
}
</script>

