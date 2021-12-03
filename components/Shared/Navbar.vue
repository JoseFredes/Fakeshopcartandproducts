<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template #img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-title>Fakeshop</v-app-bar-title>

      <v-spacer></v-spacer>
      <template #extension>
        <v-tabs align-with-title>
            <v-tab><v-btn outlined nuxt to="/">Home</v-btn></v-tab>
            <v-tab><v-btn outlined nuxt to="/cart">Cart</v-btn></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="300"
    >
      <v-container style="height: 220px"></v-container>
    </v-sheet>
  </v-card>
</template>
