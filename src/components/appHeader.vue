<template>
  <div>
    <div class="top--nav bg-white shadow-sm py-3 sticky">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="logo">
          <img src="@/assets/img/logo.svg" width="40" alt="" />
        </div>

        <div class="menu--items ml-auto web-nav">
          <ul
            class="list-unstyled d-flex align-items-center m-0"
            style="gap: 25px"
          >
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/">About</router-link>
            </li>
            <li>
              <router-link to="/">Why Fidle?</router-link>
            </li>
            <li>
              <a href="https://bantcoin.io">Bant Coin</a>
            </li>
            <li>
              <a href="https://bantnetwork.com">Bant Network</a>
            </li>
            <li>
              <router-link to="/" class="primary--btn">Contact Us</router-link>
            </li>
          </ul>
        </div>

        <div class="mobile-nav">
          <span class="material-symbols-outlined" style="font-size: 2rem" id="tog"> menu </span>
        </div>
      </div>
    </div>


    <!-- Mobile Nav Menu  -->

    <div class="mobile-menu-items shadow-lg ml-auto" id='side-bar'>
          <div class="text-right mb-5">
            <span class="material-symbols-outlined p-3" style="color:#fff; font-size: 2rem">
close
</span>
          </div>
          <ul
            class="list-unstyled m-0"
            style="gap: 25px"
          >
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/">About</router-link>
            </li>
            <li>
              <router-link to="/">Why Fidle?</router-link>
            </li>
            <li>
              <a href="https://bantcoin.io">Bant Coin</a>
            </li>
            <li>
              <a href="https://bantnetwork.com">Bant Network</a>
            </li>
            <li>
              <router-link to="/" class="primary--btn">Contact Us</router-link>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
   mounted(){
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        // const closeMenu = document.getElementById('close-menu');
        const bodyEl = document.getElementsByTagName('html')[0]
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
            bodyEl.classList.remove("active");
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        bodyEl.classList.toggle("active")
        }
        // closeMenu.onclick = function(){
        // sidee.classList.remove('active');
        // bodyEl.classList.remove("active")
        // }
    },
}
</script>