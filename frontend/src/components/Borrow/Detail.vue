<template>
  <div class="content">
    <div class="pic">
      <h2>{{ nm }}</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Goprohero5actioncamerapoweredon.jpg/1024px-Goprohero5actioncamerapoweredon.jpg">
    </div>

    <div class="btnRow">
      <div class="btn" id="checkout">check out</div>
      <div class="btn" id="return">return</div>
    </div>

    <p><strong>About this item:</strong> {{ desc }}</p>

    <p><strong>Adoption info:</strong> No user has claimed this item</p>
    <div class="btn" id="adopt">adopt</div>

    <!-- Checkout modal -->
    <div id="checkoutModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        Checkout how many?
        <select id="checkoutQuantity">
          <option v-for="n in quantityAvailable" :key="n">{{n}}</option>
        </select>
        <div class="btn confirm">confirm</div>
      </div>

    </div>

    <!-- Return modal -->
    <div id="returnModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        Return how many?
        <select id="checkoutQuantity">
          <option v-for="n in quantityCheckedOut" :key="n">{{n}}</option>
        </select>
        <div class="btn confirm">confirm</div>
      </div>

    </div>

    <router-link :to='{name: "ManageItem", params: {id: id}}' class="hoverBtn"><span>&#9998;</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      id: this.$route.params.id,
      nm: 'GoPro HERO',
      desc: 'Portable, wearable, mountable HD camera',
      quantityAvailable: parseInt('2'),
      quantityCheckedOut: parseInt('1')
    }
  },
  mounted() {
    let checkoutModal = document.getElementById('checkoutModal')
    let returnModal = document.getElementById('returnModal')

    var checkoutBtn = document.getElementById("checkout")
    var returnBtn = document.getElementById("return")

    var closeCheckout = document.getElementsByClassName("close")[0]
    var closeReturn = document.getElementsByClassName("close")[1]

    checkoutBtn.onclick = function() {
      checkoutModal.style.display = "block"
    }

    returnBtn.onclick = function() {
      returnModal.style.display = "block"
    }

    // When the user clicks on (x), close the modal
    closeCheckout.onclick = function() {
      checkoutModal.style.display = "none"
    }
    closeReturn.onclick = function() {
      returnModal.style.display = "none"
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target.className == "modal") {
        checkoutModal.style.display = "none"
        returnModal.style.display = "none"
      }
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
  padding-bottom: 20px;
}

.pic {
  position: relative;
  margin-top: 2vh;
}

.pic h2 {
  background: #fff;
  background: rgba(255,255,255,0.8);
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 5px;
  border-bottom-right-radius: 15px;
}

p {
  padding: 0 5px;
}

img {
  width: 100vw;
}

.btnRow {
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  box-sizing: border-box;
}

.btnRow .btn {
  display: inline-block;
}

.btn {
  background: #536dfe;
  color: #fff;
}

.btn:hover{
  background: #7986cb;
}

.confirm {
  margin-top: 40px;
}

@media only screen and (min-device-width : 768px){
  .pic, img {
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    max-width: 200px;
    font-size: 15px;
    box-sizing: border-box;
  }
}
</style>
