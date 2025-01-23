<template>
    <div class="background-color login-container">
    <div class="middle-container">
      <img src="@/assets/jamzImage.webp" class="jamz-image" id="jamzImage">
      <div class="login-box" id="loginBox">
        <h2 class="login-text">Login</h2>
        <form class="login-text" @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="login-btn">Login</button>
        </form>
      </div>
      <div class="message-box" id="messageBox" style="display: none">
        <h2 class="login-text">Please preform your 2-factor identification dance!</h2>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.email && this.password) {
        const loginBox = document.getElementById('loginBox');
        const jamzImage = document.getElementById('jamzImage');
        loginBox.style.display = 'none';
        jamzImage.style.display = 'none';
        const messageBox = document.getElementById('messageBox');
        messageBox.style.display = 'block';
      } else {
        alert('Please enter both email and password.');
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.background-color {
  background-color: pink;
}

.jamz-image {
  width: 60%;
  z-index: -1;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

body {
  background-color: #fb90ca;
}
.login-text{
  font-family: 'Monteserrat', sans-serif;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 100;
}
.middle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box, .message-box {
  background-color: white;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  min-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #6028d0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #2a55d0;
}
</style>
