<template>
  <div id="app">
    <router-link to="/">
      <header>
        <div class="icon"></div>
        <h1 v-once>{{ title }}</h1>
      </header>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'borrow',
  data() {
    return {
      title: 'lion\'s share'
    }
  }
}
</script>

<style>
body, html{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  padding-top: 12vh;
  height: 100vh;
  overflow: scroll;
}


.hoverBtn {
  height: 15vw;
  width: 15vw;
  font-size: 10vw;
  position: fixed;
  bottom: 5vw;
  right: 5vw;
  background: #093162;
  border-radius: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.24);
  transition: all 0.3s;
}

.btn {
  font-weight: bold;
  background: #8c9eff;
  color: #000;
  font-size: 18px;
  border: none;
  width: 30vw;
  border-radius: 2px;
  padding: 10px 5px;
  margin: 10px auto 0;
  min-width: 100px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.24);
}

.btn:hover{
  background: #7986cb;
  box-shadow: 0 1px 5px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.24);
  transition: all 0.3s;
}

.hoverBtn:hover {
  background: #1f2e82;
  box-shadow: 0 5px 28px rgba(0,0,0,0.25), 0 3px 10px rgba(0,0,0,0.22);
}

header {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 20px;
  background: #093162;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12vh;
  width: 100vw;
  position: fixed;
  z-index: 1;
}

h1 {
  margin: 0;
  padding: 5px 0;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 30vh auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  color: #000;
}

.modal-content .btn {
  width: 40%;
}

.close {
  color: red;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.icon {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url("assets/logo.svg");
}

/* link reset */
a {
  color: inherit;
  text-decoration: inherit;
}

/* table reset */
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

@media only screen and (min-device-width : 768px){
  .hoverBtn {
    min-width: 50px;
    min-height: 50px;
    width: 4vw;
    height: 4vw;
    font-size: 3vw;
    bottom: 2vw;
    right: 2vw;
  }
}
</style>
