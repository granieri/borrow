<template>
  <div class="nav">
    <router-link to="/borrow" class="opt">
      <div v-once>{{ borrow }}</div>
    </router-link>
    <router-link to="/lend" class="opt">
      <div v-once>{{ lend }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'splash',
  data () {
    return {
      borrow: 'borrow',
      lend: 'lend'
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding-top: 18vh;
}

.opt {
  font-weight: bold;
  height: 50%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24pt;
  color: #fff;
}

.opt:nth-child(1){
  background: #8c9eff;
}

.opt:nth-child(1):hover,.opt:nth-child(1):active{
  background: #5568d1;
}


.opt:nth-child(2){
  background: #3949ab;
}

.opt:nth-child(2):hover,.opt:nth-child(2):active{
  background: #4c58a5;
}


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
