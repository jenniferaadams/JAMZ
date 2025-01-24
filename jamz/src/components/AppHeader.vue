<template>
    <div class="headline-box">
      <img class="jam-image" src="@/assets/images/jam.png">
      <img class="jam-image" src="@/assets/images/jam2.png">
      <h2 class="jamz-text">jamz</h2>
      <img class="jam-image" src="@/assets/images/jam1.png">
      <img class="jam-image" src="@/assets/images/jam3.png">
    </div>
</template>
<style>
.jamz-text {
  color: #47044f;
  font-size: 4rem;
}

.headline-box {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.jam-image {
  height: 100px;

  /* Add animation */
  animation: sway 2s ease-in-out infinite; /* Animation name, duration, timing, repeat */
}
@keyframes sway {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg); 
  }
}
</style>
