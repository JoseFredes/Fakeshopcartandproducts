<template>
  <v-container>
    <v-flex>
      <v-card>
        <div v-for="cartProduct in cart" :key="cartProduct.id">
          <v-card-text>
            {{ cartProduct.productCart.product.title}}
          </v-card-text>
        </div>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Cart, Product } from "@/store/types";

const shopModule = namespace("shop/");

@Component
export default class CartTile extends Vue {
  @shopModule.State("cart") cart!: Cart[];

  getProductsInCart() {
     console.log(this.cart.values())
  }
  mounted() {
    this.cart;
    this.getProductsInCart();
  }
}
</script>
