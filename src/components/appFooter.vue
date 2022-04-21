<template>
  <div>
    <footer class="footer">
      <div class="container py-3">
        <div class="footer--top">
          <div class="d-flex align-items-center justify-content-between" >
            <div class="">
              <router-link to="/"><img src="@/assets/img/logo.svg" width="50" alt="" /></router-link>
              <p class="small">Social and Message Place</p>
            </div>
            <div class=" d-flex" style="gap:40px">
                <a href="#"><i class="fa fa-facebook fa-2x text-primary" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-twitter fa-2x text-info" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-instagram fa-2x text-danger" aria-hidden="true"></i></a>
                <!-- <a href=""><i class="fa fa-youtube-play fa-2x" aria-hidden="true" style="color: #f00"></i></a> -->
            </div>
          </div>
        </div>

        <div class="footer--copyright">
          <hr class="w-50 mx-auto" />
          <div class="d-flex align-items-center justify-content-center">
            <span class="material-symbols-outlined"> copyright </span>
            <span>Copyright 2022</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>