<template>
  <v-container>
    <v-flex>
      <v-card max-width="1000px">
        <div v-for="item in cart" :key="item.id">
          <div class="d-inline-flex">
                <v-card-subtitle  class="card-subtitle-cart text-h8 black--text pl-0">
                  {{ item.productCart.title }}
                </v-card-subtitle>
                <v-spacer></v-spacer>
                <v-card-text>
                  Price : {{ item.productCart.price }}
                </v-card-text>
                <v-img
                  :src="item.productCart.image"
                  contain
                  max-height="70"
                  max-width="70"
                ></v-img>
              </div>
              <br>
              <v-card-acctions class="d-inline-flex">
                <v-btn icon @click.prevent="decreaseQuantityProduct(item.productCart)"><v-icon>mdi-minus</v-icon></v-btn>
                  <v-card-text>{{item.quantity}}</v-card-text>
                <v-btn icon @click.prevent="increaseQuantityProduct(item.productCart)"><v-icon>mdi-plus</v-icon></v-btn>
                <v-btn icon @click.prevent="removeToCart(item.productCart)"><v-icon>mdi-delete</v-icon></v-btn>
              </v-card-acctions>
        </div>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { CartItems, Product } from "@/store/types";

const shopModule = namespace("shop/");

@Component
export default class CartTile extends Vue {
  @shopModule.State("cart") cart!: CartItems[];
  @shopModule.Mutation("increaseQuantity") increaseQuantityProduct !: Function;
  @shopModule.Action("decreaseQuantityInCart") decreaseQuantityProduct !: Function;
  @shopModule.Mutation("removeToCart") removeToCart !: Function;
}
</script>

