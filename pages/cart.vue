<template>
  <div>
    <div v-if="cart.length === 0" class=" d-flex flex-column justify-space-between align-center text-center">
      <v-card >
        <v-card-title class="text-h5 black--text pl-10 text-center"> The Cart is Empty! </v-card-title>
        <v-card-subtitle class="text-h8  pl-10 text-center"> You can see more products in Home! </v-card-subtitle>
        <v-img
          contain
          max-height="800"
          max-width="800"
          src="https://i.imgur.com/LuyhYad.png"
          position="center"
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

