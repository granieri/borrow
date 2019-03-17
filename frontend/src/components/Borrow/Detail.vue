<template>
  <div class="content">
    <h2>{{ nm }}</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Goprohero5actioncamerapoweredon.jpg/1024px-Goprohero5actioncamerapoweredon.jpg">
    <p>{{ desc }}</p>
    <p>There are {{ quantity }} available</p>

    <div class="btn">check out</div>
    <div class="btn">return</div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      nm: 'GoPro HERO',
      desc: 'This is a camera',
      quantity: '2',

    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  background: #8c9eff;
  font-size: 15px;
}

img {
  width: 100vw;
}

.btn {
  font-weight: bold;
  background: #536dfe;
  color: #fff;
  font-size: 18px;
  border: none;
  width: 40vw;
  border-radius: 15px;
  padding: 10px 5px;
  margin: 10px auto;
}

.btn:hover{
  background: #7986cb;
}

@media only screen and (min-device-width : 768px){
  img{
    width: 50vw;
    margin: 0 auto;
  }

  .btn {
    max-width: 200px;
    font-size: 15px;
    box-sizing: border-box;
  }
}
</style>
