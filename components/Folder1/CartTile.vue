<template>
  <v-container>
    <v-flex>
      <v-card>
        <div v-for="cartProduct in cart" :key="cartProduct.id">
          <ul>
            <li>
              <div class="d-inline-flex">
                <v-card-text class="text-h8 black--text pl-0">
                  {{ cartProduct.productCart.product.title }}
                </v-card-text>
                <v-card-text>
                  Price : {{ cartProduct.productCart.product.price }}
                  Quantity: {{ cartProduct.quantity }}
                </v-card-text>
                <v-spacer></v-spacer>
                <v-img
                  :src="cartProduct.productCart.product.image"
                  contain
                  max-height="70"
                  max-width="70"
                ></v-img>
              </div>
            </li>
          </ul>
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
    console.log(this.cart.values());
  }
  mounted() {
    this.cart;
    this.getProductsInCart();
  }
}
</script>
