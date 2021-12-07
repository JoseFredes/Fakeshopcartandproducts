<template>
  <v-main class="img">
    <v-img 
    :src="product.image"
    height="200"
    width="230"
    contain
    >
    </v-img>
  </v-main>
</template>

<script lang="ts">
// primero se impota el namespace, luego cualquier cosa de store
import { Vue, Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Product } from "@/store/types";
const shopModule = namespace("shop/");
@Component
export default class Carousel extends Vue {
  @Prop({ required: true }) readonly product!: Product;
  name: 'carrousel-product'
   
}
</script>

<style>
    .img{
        position: fixed;
    }
</style>