<template>
  <div class="nav">
    <div class="opt">
      <div>{{ borrow }}</div>
    </div>
    <div class="opt">
      <div>{{ lend }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'borrow',
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

.opt:nth-child(1):hover{
  background: #8c9eff;
}


.opt:nth-child(2){
  background: #3949ab;
}

.opt:nth-child(2):hover{
  background: #3949ab;
}


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
