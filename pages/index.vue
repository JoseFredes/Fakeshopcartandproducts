<template>
  <v-row>
    <div v-if="fetching.active">
      <v-progress-circular
        class="progress-circular"
        :size="200"
        :width="20"
        color="#FF5F7E"
        indeterminate
      ></v-progress-circular>
    </div>
    <p v-else-if="displayError">Hubo un error</p>
    <v-col v-for="product in products" :key="product.id" cols="12" md="4">
      <product-tile :product="product" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';
import { Product } from '@/store/types';
import { Flags } from '@/store/shop/types';
import ProductTile from '@/components/Folder1/ProductTile.vue';

const shopModule = namespace('shop/');

@Component({
  components: { ProductTile },
})
export default class Index extends Vue {
  @shopModule.State('fetching') fetching!: Flags;
  @shopModule.State('products') products!: Product[];
  @shopModule.Getter('showError') displayError!: boolean;
  @shopModule.Action('fetchProducts') getProducts!: Function;

  mounted() {
    this.getProducts();
  }

  
}
</script>

<style >
.progress-circular{
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}



</style>