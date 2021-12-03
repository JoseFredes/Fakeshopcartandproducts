<template>
  <v-app>
    <navbar/>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import navbar from '~/components/Shared/Navbar.vue'
export default {
  components:{
    navbar,
  }
}
</script>
