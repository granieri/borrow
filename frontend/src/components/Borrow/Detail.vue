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

    <!-- Checkout modal -->
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

    <div class="hoverBtn"><span>&#9998;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
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

    // When the user clicks on <span> (x), close the modal
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
  font-weight: bold;
  background: #536dfe;
  color: #fff;
  font-size: 15px;
  border: none;
  border-radius: 15px;
  padding: 10px 0;
  width: 30vw;
  min-width: 100px;
  margin: 0 auto;
}

.btn:hover{
  background: #7986cb;
}

.confirm {
  margin-top: 40px;
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
