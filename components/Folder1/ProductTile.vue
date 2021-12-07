<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-hover>
          <template #default="{ hover }">
            <v-card width="400" min-height="460" :elevation="hover ? 24 : 6">
              <v-img
                height="200px"
                :src="product.image"
                contain
                transition="fade-transition"
              >
                <v-app-bar flat color="rgba(0, 0, 0, 0)">
                  <v-spacer></v-spacer>
                </v-app-bar>
              </v-img>
              <v-card-text>
                <v-card-text class="text-h8 black--text pl-0 text-center">
                  {{ product.title }}
                </v-card-text>
                <div class="font-weight-bold gray--text mb-2 text-center">
                  {{ product.category.toUpperCase() }}
                </div>
                <div class="d-inline-flex">
                  <v-rating
                    :value="product.rating.rate"
                    color="#FFAB4C"
                    background-color="#142F43"
                    dense
                    half-increments
                    readonly
                    size="14"
                  >
                  </v-rating>
                  <div class="grey--text ms-4">
                    {{ product.rating.rate }} ({{ product.rating.count }})
                  </div>
                </div>
                <v-divider class="mx-4"></v-divider>
                <div class="d-inline-flex pa-2">
                  <div class="my-4 text-subtitle-1 black--text">
                    <b>$ {{ product.price }}</b>
                  </div>
                  <v-card-actions>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                          @click="addProdutcsToCart"
                        >
                          <v-icon right color="#B000B9">mdi-cart</v-icon>
                        </v-btn>
                      </template>

                      <span>Cart</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          v-bind="attrs"
                          v-on="on"
                          :to="`/${product.id}`"
                        >
                          <v-icon right color="#B000B9">mdi-plus</v-icon>
                        </v-btn>
                      </template>

                      <span>Description</span>
                    </v-tooltip>
                    <v-card-text> In Cart: {{ 0 }} </v-card-text>
                  </v-card-actions>
                </div>
              </v-card-text>
            </v-card>
          </template>
        </v-hover>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
// primero se impota el namespace, luego cualquier cosa de store
import { Vue, Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { CartItems, Product } from "@/store/types";
const shopModule = namespace("shop/");
@Component
export default class ProductTile extends Vue {
  @shopModule.Mutation("addToCart") addToCart!: Function;
  @shopModule.Getter("getQuantityforProduct") getQuantity!: number;
  @Prop({ required: true }) readonly product!: Product;

  quantitycart:number = 0;

  addProdutcsToCart() {
    this.addToCart(this.product);
    alert('The product has been added to the cart')
  }



  mounted(){
    
  }
}
</script>

<style scoped>
.description-card {
  float: right;
  display: inline-flex;
  color: #142f43;
}
</style>
