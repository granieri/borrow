<template>
  <router-link :to="{ name: 'BorrowItem', params: {id: id}}" class="item">
    <div class="pic">
      <div class="itemName">
        {{nm}}
      </div>
    </div>
    <div class="quantity">
      {{ quantity }} available
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Item',
  props: ['id', 'quantity', 'nm', 'pic'],
  data () {
    return {
    }
  },
  mounted() {
    let thisComponent = this.$el
    if(this.pic){
      thisComponent.children[0].style.backgroundImage = 'url("' + this.pic + '")'
    } else {
      thisComponent.children[0].style.display = none
    }
  }
}
</script>

<style scoped>
.item {
  height: 50vw;
  width: 100vw;
  display: block;
  margin-bottom: 40px;
  box-shadow: 0 25px 10px rgba(0,0,0,0.12);
}

.pic{

  background-size: cover;
  height: 100%;
  width: 100%;
}

.itemName{
  background: rgba(10, 58, 150, 0.7);
  font-size: 20px;
  text-align: left;
  color: white;
  padding-left: 5vw;
  box-sizing: border-box;
}

.quantity{
  background: #e8e8e8;
  color: #000;
  font-size: 15px;
  text-align: right;
  padding-right: 5vw;
  box-sizing: border-box;
}

@media only screen and (min-device-width : 768px){
  .item{
    height: 30vw;
    width: 30vw;
    margin: 20px;
  }

  .itemName{
    padding-left: 2vw;
  }

  .quantity{
    padding-right: 2vw;
  }
}
</style>
