<template>
  <ion-app>
    <ion-menu content-id="main-content">
      <ion-header class="ion-no-border">
        <ion-toolbar>
          
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">This is the menu content.</ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import commonIonicComponents from './shared/commonIonicComponents';
export default defineComponent({
  name: "App",
  components: {
    ...commonIonicComponents
  },
  setup() {

    return {

    }
  },
})
</script>
