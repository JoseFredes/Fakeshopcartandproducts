<template>
  <v-main>
    <v-card class="mt-5">
      <v-row>
        <v-col cols="6" class="pl-5">
          <v-card-title>{{ product.title }}</v-card-title>
          <v-divider></v-divider>
          <v-img
            class="mt-10"
            height="200px"
            :src="product.image"
            contain
            transition="fade-transition"
          ></v-img>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="6" class="pr-5">
          <v-card-title>Product Description</v-card-title>
          <v-divider></v-divider>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-subtitle class="font-weight-bold gray--text">
            {{ product.category.toUpperCase() }}
          </v-card-subtitle>
          <div class="d-inline-flex ml-3">
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
          <v-card-subtitle>$ {{ product.price }}</v-card-subtitle>

          <v-card-actions>
            <v-btn @click="addProdutcsToCart">
              <v-icon color="#B000B9">mdi-cart</v-icon>
              <span>Add To Cart</span>
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
    <v-sheet class="mx-auto mt-5" elevation="8" max-width="1200">
      <v-card-title>More products {{ product.category }}</v-card-title>
      <v-slide-group
        class="pa-4"
        show-arrows
      >
        <v-slide-item v-for="item in productByCategory" :key="item.id">
          <v-card
            class="ma-4 d-flex align-center justify-center"
            height="220"
            width="250"
          >
            <carousel-product :product="item" />
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-main>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Product } from "@/store/types";
import { namespace } from "vuex-class";
import CarouselProduct from '../components/Folder1/CarouselProduct.vue';

const shopModule = namespace("shop/");
@Component({
  components:{
    CarouselProduct,
  }
})
export default class ProductDescription extends Vue {
  idProduct = this.$route.params.id;
  @shopModule.State("products") products !: Product[];
  @shopModule.Mutation("removeToCart") removeToCart!: Function;
  @shopModule.Mutation("addToCart") addToCart!: Function;

  // Add de product to the cart form _id page
  addProdutcsToCart() {
    this.addToCart(this.product);
    alert("The product has been added to the cart");
  }

  //Get the product
  get product() {
    return this.products.find((item) => item.id.toString() == this.idProduct);
  }
  // Filter and get the product by its category
  get productByCategory() {
    return this.products.filter(
      (item) => item.category == this.product?.category
    );
  }
}
</script>