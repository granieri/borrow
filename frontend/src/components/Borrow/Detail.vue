<template>
  <div class="content">
    <div class="pic">
      <h2>{{ nm }}</h2>
      <img :src="picture">
      <div class="availability">{{ quantityAvailable }}/{{ quantityTotal }} available &bullet; you have {{ quantityCheckedOut }}</div>
    </div>

    <div class="btnRow">
      <div class="btn" id="checkout">check out</div>
      <div id="return" v-bind:class="{btn: true, hide: !quantityCheckedOut}">return</div>
    </div>

    <p v-if="desc">
      <strong>About this item:</strong> {{ desc }}
    </p>

    <p><strong>Contact:</strong><br> <span class="adopt_text">No user has claimed this item</span> <span class="btn adopt-btn" id="adopt">adopt</span></p>

    <!-- <h2>Borrowers</h2>

    <table class="borrowTable" v-if="borrowing > 0">
      <thead>
        <td>
          User
        </td>
        <td>
          Qty
        </td>
        <td>
          Time&nbsp;out
        </td>
        <td>
          Time&nbsp;left
        </td>
      </thead>
      <tr v-for="borrower in borrowing">
        <td>
          borrowing.user_id
        </td>
        <td>
          3
        </td>
        <td>
          2019-10-02 04:05:12
        </td>
        <td>
          2 hours
        </td>
      </tr>
    </table>
    <p v-else>No borrowers at this time.</p> -->

    <!-- Checkout modal -->
    <div id="checkoutModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        Checkout how many?
        <select id="checkoutQuantity">
          <option v-for="n in quantityAvailable" :key="n" v-model="checkoutNumber">{{n}}</option>
        </select>
        <div class="btn confirm" id="checkout-confirm">confirm</div>
      </div>

    </div>

    <!-- Return modal -->
    <div id="returnModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        Return how many?
        <select id="checkoutQuantity">
          <option v-for="n in quantityCheckedOut" :key="n" v-model="returnNumber">{{n}}</option>
        </select>
        <div class="btn confirm" id="return-confirm">confirm</div>
      </div>

    </div>

    <router-link :to='{name: "ManageItem", params: {id: this.id}}' class="hoverBtn"><span>&#9998;</span></router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      id: this.$route.params.id,
      nm: '',
      desc: '',
      quantityAvailable: '',
      quantityCheckedOut: '',
      quantityTotal: '',
      picture: '',
      checkoutNumber: 1,
      returnNumber: 1,
      borrowing: []
    }
  },
  mounted() {
    axios.post('http://lions-share-234722.appspot.com/getitembyid', {
      id: this.id
    }).then((res) => {
      let data = res.data[0]
      this.nm = data.name
      this.desc = data.description
      this.quantityAvailable = parseInt(data.quantity_available)
      this.quantityTotal = parseInt(data.total_quantity) || this.quantityAvailable
      this.quantityCheckedOut = parseInt(this.quantityTotal - this.quantityAvailable)
      this.picture = data.picture
    })

    let checkoutConfirm = document.getElementById('checkout-confirm')
    let returnConfirm = document.getElementById('return-confirm')

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

    // confirm actions
    checkoutConfirm.onclick = () => {
      axios.post('http://lions-share-234722.appspot.com/insertborrowerhistory',
        {
          borrower_id: '123',
          item_id: this.id,
          time_out: Date.now(),
          quantity: (this.quantityAvailable - this.checkoutNumber)
        }).then((res) => {
          console.log(res)
          this.$forceUpdate()
          axios.post('http://lions-share-234722.appspot.com/getitembyid', {
            id: this.id
          }).then((r) => {
            let data = res.data[0]
            this.nm = data.name
            this.desc = data.description
            this.quantityAvailable = parseInt(data.quantity_available)
            this.quantityTotal = parseInt(data.total_quantity) || this.quantityAvailable
            this.quantityCheckedOut = parseInt(this.quantityTotal - this.quantityAvailable)
            this.picture = data.picture
            window.location.reload()
          })
        })
    }
    returnConfirm.onclick = () => {
      axios.post('http://lions-share-234722.appspot.com/updateborrowhistory',
        {
          borrower_id: '123',
          item_id: this.id,
          time_in: Date.now(),
          limit: this.returnNumber,
          quantity: (this.quantityAvailable + this.returnNumber)
        }).then((res) => {
          console.log(res)
          axios.post('http://lions-share-234722.appspot.com/getitembyid', {
            id: this.id
          }).then((r) => {
            let data = res.data[0]
            this.nm = data.name
            this.desc = data.description
            this.quantityAvailable = parseInt(data.quantity_available)
            this.quantityTotal = parseInt(data.total_quantity) || this.quantityAvailable
            this.quantityCheckedOut = parseInt(this.quantityTotal - this.quantityAvailable)
            this.picture = data.picture
            window.location.reload()
          })
        })

      let adoptButton = document.getElementById('adopt')
      if(this.contact_id == '123') adoptButton.innerHTML = 'adopt'
      else adoptButton.innerHTML = 'release'
      adoptButton.onclick = () => {
        axios.post('http://lions-share-234722.appspot.com/updateitem', {
          active_flag: 1,
          contact_id: (this.contact_id == '123') ? '123' : null,
          rental_period: this.rentalPeriod,
          total_quantity: this.quantity,
          name: this.nm,
          description: this.desc,
          item_id: this.id
        })
        .then((response) => {
          console.log(response)
          window.location.reload()
        })
      }
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
  padding-bottom: 20vw;
}

.content > h2 {
  text-align: left;
  padding: 5px;
}

.hide {
  display: none !important;
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

.pic .availability {
  background: #e8e8e8;
  position: absolute;
  bottom: 4px;
  right: 0;
  padding: 2px 10px;
  border-top-left-radius: 15px;
}

p {
  padding: 0 5px;
}

img {
  width: 100vw;
}

.borrowTable thead {
  font-weight: bold;
}

.borrowTable td {
  text-align: left;
  padding: 3px;
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

.adopt-btn{
  width: auto;
  min-width: 50px;
  padding: 2px 5px;
  margin: 0 auto;
  display: inline-block;
  background: #7986cb;
}

.confirm {
  margin-top: 40px;
}

@media only screen and (min-device-width : 768px){
  .content{
    padding-bottom: 6vw;
  }

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
