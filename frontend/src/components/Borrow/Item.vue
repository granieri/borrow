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
  props: ['id'],
  data () {
    return {
      nm: 'GoPro HERO',
      description: 'this is a camera',
      quantity: '2'
    }
  }
}
</script>

<style scoped>
.item {
  height: 50vw;
  width: 100vw;
  display: block;
}

.pic{
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Goprohero5actioncamerapoweredon.jpg/1024px-Goprohero5actioncamerapoweredon.jpg');
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
