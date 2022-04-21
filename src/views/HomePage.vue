<template>
  <div>
    <hero-section></hero-section>
    <count-down></count-down>

    <!-- Connect With your friends  -->
    <div class="connect--container bg-white mb-5">
      <div class="connect container">
        <div class="connect--main py-5" style="">
          <div class="">
            <img
              src="@/assets/img/Feed-and-Followers-1024x1024.png"
              width="100%"
              alt=""
              srcset=""
            />
          </div>
          <div class="">
            <p class="mb-3 font-weight-bold">FIDLE COMMUNITY</p>
            <h2 class="text-main mb-5 font-weight-bold">
              The Best Way to Connect With Your Friends!
            </h2>
            <p>
              Fidle is the world's first totally decentralized social network of
              communities built on Blockchain technology where people or users
              can explore their interests , passion and hobbies and earn
              Bantcoin while Connecting with love ones, friends and families
              Bantcoint is the official token of the Fidle platform, a digital
              token that is totally tradeable on global exchanges can also be
              exchanged for digital and physical goods and services on the Fidle
              platform. Bantcoin can be stored in a digital wallet, traded,
              swapped, exchanged and fully decentralized. This is the NO
              CENSORSHIP platform of the world; totally decentralized and open.
              Each post, comment, like or multimedia content has an equal
              opportunity on the Fidle network to be converted into an NFT(Non
              Fungible Token) and exchanged for Bantcoin, seamlessly and in real
              time.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Earning Cards  -->
    <earning-cards></earning-cards>

    <!-- Main Features  -->
    <main-features></main-features>

    <!-- Why Fidle  -->
    <why-fidle></why-fidle>

    <!-- App Footer  -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import HeroSection from "@/components/heroSection.vue";
import countDown from "@/components/countDown.vue";
import earningCards from "@/components/earningCards.vue";
import mainFeatures from "@/components/mainFeatures.vue";
import whyFidle from "@/components/whyFidle.vue";
import AppFooter from "@/components/appFooter.vue";
export default {
  components: {
    HeroSection,
    countDown,
    earningCards,
    mainFeatures,
    whyFidle,
    AppFooter,
  },
};
</script>