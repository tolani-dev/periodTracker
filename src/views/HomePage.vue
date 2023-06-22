<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- header and content -->
      <div class="relative">
        <ion-header class="ion-no-border">
          <ion-toolbar mode="ios" class="">
            <ion-buttons slot="end" class="absolute top-7 right-2 bg-white rounded-full">
              <ion-button>
                <ion-menu-button></ion-menu-button>
              </ion-button>
            </ion-buttons>
            <div class="p-7 bg-primary-shades">
              <div class="">
                <h3 class="text-2xl text-primary font-[500]">Good Morning,</h3>
                <h4 class="text-2xl font-[500]">Fauzziyyahh</h4>
              </div>
              <ion-searchbar show-clear-button="always" class="mt-4 pr-7"></ion-searchbar>
            </div>
          </ion-toolbar>
        </ion-header>
        <div class="-mt-20 z-[9999]">
          <ion-grid :fixed="true" class="bg-main w-[90%] rounded-lg mb-10 p-4">
            <ion-row>
              <ion-col size="8" class="">
                <div class="bg-main">
                  <p class="text-xs text-white">period in,</p>
                  <h4 class="text-[24px] text-white mt-2">4 Day</h4>
                  <p class="text-[10px] text-accent-shades mt-4">Lower chance of getting pregnant</p>
                </div>
              </ion-col>
              <ion-col size="4" class="">
                <div class="glass w-16 h-12 rounded-full ">
                </div>
                <div class="">
                  <img src="/icons/cal-removebg-preview.png" class="w-full" />
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>

        </div>
      </div>

      <div>
        <h4 class="text-sm font-bold pl-6">
          How are you feeling Today?
        </h4>
        <ion-grid>
          <ion-row class="flex justify-around">
            <ion-col size="5.5">
              <div class="bg-primary-tint rounded-lg p-6 flex flex-col items-center  h-[135px]">
                <img src="icons/share1.png" class="w-11 h-11 bg-white rounded-full p-2" />
                <p class="text-center text-xs font-bold mt-2">Share with us today</p>
              </div>
            </ion-col>
            <ion-col size="5.5">
              <div class="bg-primary-light rounded-lg p-6 flex flex-col items-center h-[135px]">
                <img src="icons/daily.png" class="w-11 h-11 bg-white rounded-full p-2" />
                <p class="text-center text-xs font-bold mt-2 w-[70px]">Your daily insight</p>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div class="overflow-auto mt-4">
        <h4 class="text-sm font-bold pl-6">Expert Insights</h4>
        <ion-grid class="over overflow-x-auto mt-2">
          <ion-row>
            <ion-col>
              <p class="px-4 py-[6px] bg-accent-light text-center text-xs rounded-full hover:bg-black hover:text-white">
                Discover</p>
            </ion-col>
            <ion-col>
              <p class="px-4 py-[6px] bg-accent-light text-center text-xs rounded-full hover:bg-black hover:text-white">
                Discover</p>
            </ion-col>
            <ion-col>
              <p class="px-4 py-[6px] bg-accent-light text-center text-xs rounded-full hover:bg-black hover:text-white">
                Discover</p>
            </ion-col>
            <ion-col>
              <p class="px-4 py-[6px] bg-accent-light text-center text-xs rounded-full hover:bg-black hover:text-white">
                Discover</p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div>
        <ion-grid>
          <ion-row class="flex justify-around">
            <ion-col size="5.5">
              <div class="bg-primary-tint rounded-lg p-6 flex flex-col justify-center items-center h-[135px]">
                <p class="text-center text-xs font-bold w-[90px]">Exercise Your body</p>
                <img src="icons/share.png" class="w-11 h-11 mt-2" />
              </div>
            </ion-col>
            <ion-col size="5.5">
              <div class="bg-primary-light rounded-lg p-6 flex flex-col items-center justify-center h-[135px]">
                <p class="text-center text-xs font-bold w-[110px]">Keep the mood in check </p>
                <img src="icons/share.png" class="w-11 h-11 mt-2" />
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import commonIonicComponents from '@/shared/commonIonicComponents';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "HomePage",
  components: {
    ...commonIonicComponents
  },
  setup() {
    return {
    }
  }
})
</script>
<style scoped>
.searchbar-input.sc-ion-searchbar-ios {
  background-color: white;
}

.glass {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  position: absolute;
  top: -0px;
  right: -160px;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 200px;
  border-radius: 0 0 150px 150px;
  /* transform: rotate(20deg); */
}

.over {
  overflow-x: scroll;
  height: 50px;
}

/* .active {
  background-color: #865a37;
  color: #fea964 !important;
  height: 60px;
} */
</style>
