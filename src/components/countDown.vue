<template>
  <div>
    <div class="countdown--container container mb-5">
      <div
        class="
          d-flex
          shadow-lg
          align-items-center
          justify-content-between
          bg-white
          rounded-lg
        "
      >
        <div class="timer text-center shadow-sm w-100 p-2">
          <h1 class="font-weight-bold" id="days"></h1>
          <p>days</p>
        </div>
        <div class="timer text-center shadow-sm w-100 p-2">
          <h1 class="font-weight-bold" id="hours"></h1>
          <p>hours</p>
        </div>
        <div class="timer text-center shadow-sm w-100 p-2">
          <h1 class="font-weight-bold" id="minutes"></h1>
          <p>minutes</p>
        </div>
        <div class="timer text-center shadow-sm w-100 p-2">
          <h1 class="font-weight-bold" id="seconds"></h1>
          <p>seconds</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  created() {
    var deadline = new Date("Jan 5, 2023 15:37:25").getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var t = deadline - now;
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById('days').innerText = days
document.getElementById('hours').innerText = hours
document.getElementById('minutes').innerText = minutes
document.getElementById('seconds').innerText = seconds
      if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  },
};
</script>