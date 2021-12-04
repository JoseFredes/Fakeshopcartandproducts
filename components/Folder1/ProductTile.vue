<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-hover>
          <template #default="{ hover }">
            <v-card width="400" height="460" :elevation="hover ? 24 : 6">
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
                  <div class="grey--text ms-4">{{ product.rating.rate}} ({{product.rating.count}})</div>
                </div>
                <v-divider class="mx-4"></v-divider>
                <div class="d-inline-flex pa-2">
                  <div class="my-4 text-subtitle-1 black--text">
                    <b>$ {{ product.price }}</b>
                  </div>
                  <v-card-actions>
                    <v-btn icon @click="addProdutcsToCart">
                      <v-icon right color="#B000B9">mdi-cart</v-icon>
                    </v-btn>
                  </v-card-actions>
                </div>
                <v-card-actions class="description-card">
                  <v-expansion-panels flat>
                    <v-expansion-panel :key="product.id" accordion>
                      <v-expansion-panel-header>
                        Description
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        {{ product.description }}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-card-actions>
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Product } from '@/store/types';
const shopModule = namespace('shop/');
@Component
export default class ProductTile extends Vue {
  @shopModule.Mutation('addToCart') addToCart!: Function;
  @Prop({ required: true }) readonly product!: Product;

  
  addProdutcsToCart() {
    this.addToCart({ product: this.product });
  }

  mounted() {
   
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
