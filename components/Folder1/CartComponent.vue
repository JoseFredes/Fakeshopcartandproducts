<template>
  <v-container>
    <v-flex>
      <v-row>
        <v-col cols="6" >
          <div>
            <v-card max-width="1000px" >
              <div v-for="item in cart" :key="item.id">
                <div class="d-inline-block">
                  <v-card-subtitle
                    class="card-subtitle-cart text-h8 black--text pl-10"
                  >
                    {{ item.productCart.title }}
                  </v-card-subtitle>
                  <v-spacer></v-spacer>
                  <v-card-text class="text-left pl-10">
                    Price : {{ item.productCart.price }}
                  </v-card-text>
                  <v-img
                    :src="item.productCart.image"
                    contain
                    max-height="70"
                    max-width="70"
                    position="right"
                    class="pl-10"
                  ></v-img>
                </div>
                <br />
                <v-card-actions class="d-inline-flex pl-10">
                  <v-btn
                    icon
                    @click.prevent="decreaseQuantityProduct(item.productCart)"
                    ><v-icon>mdi-minus</v-icon></v-btn
                  >
                  <v-card-text>{{ item.quantity }}</v-card-text>
                  <v-btn
                    icon
                    @click.prevent="increaseQuantityProduct(item.productCart)"
                    ><v-icon>mdi-plus</v-icon></v-btn
                  >
                  <v-btn icon @click.prevent="removeToCart(item.productCart)"
                    ><v-icon>mdi-delete</v-icon></v-btn
                  >
                  <v-divider></v-divider>
                </v-card-actions>
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col cols="6">
          <v-card max-width="1000px" class="pl-10" >
            <v-card-title>Total Account</v-card-title>
            <v-card-text> Total to Pay: {{ totalToPay }}</v-card-text>
            <v-card-actions>
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#B000B9"
                    class="white--text"
                    v-bind="attrs"
                    v-on="on"
                    >Pay!</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title> Detail </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text v-for="item in cart" :key="item.id">
                    <ul>
                      <li>
                        {{ item.productCart.title }} <br />
                        Unitary Price : {{ item.productCart.price }} - Quantity
                        :
                        {{ item.quantity }}
                      </li>
                    </ul>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-subtitle>Total</v-subtitle>
                  <v-card-text>
                    ${{ totalToPay }}
                    <v-btn @click="cleanCart">Go!</v-btn>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { CartItems} from "@/store/types";

const shopModule = namespace("shop/");

@Component
export default class CartTile extends Vue {
  @shopModule.State("cart") cart!: CartItems[];
  @shopModule.Mutation("increaseQuantity") increaseQuantityProduct!: Function;
  @shopModule.Action("decreaseQuantityInCart")
  decreaseQuantityProduct!: Function;
  @shopModule.Mutation("removeToCart") removeToCart!: Function;
  @shopModule.Getter("getTotalToPay") totalToPay!: number;
  @shopModule.Mutation("clearCart") cleanCart!: Function;

  dialog = false;
}
</script>


