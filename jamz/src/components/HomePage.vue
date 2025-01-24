<template>
<div class="main-container">
    <iframe width="1300" height="800" src="https://10.0.210.97:8554/"></iframe>
</div>
<div class="bottom-image-div">
    <img class="bottom-image" src="@/assets/images/big.webp">
</div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

video {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
}
.background-color {
  background-color: #fb90ca;
  height: 100vh;
}
h2 {
  text-align: center;
  padding-top: 20px;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
}
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
}
.bottom-image-div {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    width: 65%;
    padding-top: 45px;
}
.bottom-image {
    width: 75%;
}

</style>