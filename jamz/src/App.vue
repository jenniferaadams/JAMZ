<template>
  <div class="background-color">
      <h2>JAMZ</h2>
      <video ref="videoPlayer" controls autoplay muted poster="@/assets/jamzImage.webp"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ws: null,
    };
  },
  mounted() {
    this.ws = new WebSocket("ws://localhost:3000");

    this.ws.onopen = () => {
      console.log("WebSocket connected!");
    };

    this.ws.onmessage = (event) => {
      const blob = new Blob([event.data], { type: "video/mp4" });
      const videoUrl = URL.createObjectURL(blob);
      this.$refs.videoPlayer.src = videoUrl;
    };

    this.ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    this.ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }
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
</style>
