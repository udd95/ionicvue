<template>
  <ion-page>
    <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title><img src="../assets/logo.png" alt=""></ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content :fullscreen="true">
      <div>
        &#127844;
      </div>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
<style lang="scss">
div {
  height: 3000px;
}
</style>