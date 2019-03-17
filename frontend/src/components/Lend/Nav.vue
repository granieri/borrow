<template>
  <div class="content">
    <router-link to="lend/track" class="opt">track</router-link>
    <router-link to="lend/add" class="opt">add</router-link>
    <router-link to="lend/mgmt" class="opt">manage</router-link>
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
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #3949ab;
  color: white;
}

.opt {
  font-weight: bold;
  margin: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  font-size: 24pt;
  color: #fff;
  align-items: flex-start;
}

.opt:nth-child(1){
  background: #3949ab;
}

.opt:nth-child(2){
  background: #3f51b5;
}

.opt:nth-child(3){
  background: #5c6bc0;
}

</style>
