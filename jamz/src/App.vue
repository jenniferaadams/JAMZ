<template>
  <div class="background-color main-container">
    <div class="headline-box">
      <img class="jam-image" src="assets/images/jam.jpg">
      <h2 class="jamz-text">jamz</h2>
    </div>
      <iframe width="1300" height="800" src="https://10.0.210.97:8554/"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
   
    };
  },
};
</script> 

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
}
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
  height: 200px;
}
</style>
