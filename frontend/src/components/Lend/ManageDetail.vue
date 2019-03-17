<template>
  <div class="content">
    <table class="tableForm">
      <tr>
        <td>
          <label for="itemName">Item name:</label>
        </td>
        <td>
          <input id="itemName" name="itemName" type="text" v-model="nm">
        </td>
      </tr>
      <tr>
        <td class="desc_cell" colspan="2">
          <label for="itemDesc">Description:</label><br> <textarea name="itemDesc" id="itemDesc" rows="3" v-model="desc"></textarea>
          <div><span id="remaining">256</span> characters remaining</div>
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemQuantity">Quantity:</label>
        </td>
        <td>
          <input id="itemQuantity" name="itemQuantity" type="number" min="0" step="1" v-model="quantityAvailable">
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemRentalPeriod">Rental period:</label>
        </td>
        <td>
          <input id="itemRentalPeriod" name="itemRentalPeriod" type="number" min="1" step="1" v-model="rentalPeriod"> hours
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemActive">Active:</label>
        </td>
        <td>
          <input id="itemActive" name="itemActive" type="checkbox" v-model="active">
        </td>
      </tr>
    </table>

    <div class="btn" id="update">update</div>
    <div class="btn btn-delete" id="delete">delete</div>

    <!-- Update modal -->
    <div id="updateModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        Are you sure you want to update?
        <div class="btn confirm" id="update-confirm">confirm</div>
      </div>

    </div>

    <!-- Delete modal -->
    <div id="deleteModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        Are you sure you want to delete this record? This action cannot be undone.
        <div class="btn confirm btn-delete" id="delete-confirm">confirm</div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LendAdd',
  data () {
    return {
      id: this.$route.params.id,
      nm: '',
      desc: '',
      quantityAvailable: '',
      quantityTotal: '',
      picture: '',
      active: '',
      rentalPeriod: '',
    }
  },
  mounted() {
    axios.post('http://lions-share-234722.appspot.com/getitembyid', {
      id: this.id
    }).then((res) => {
      let data = res.data[0]
      this.nm = data.name
      this.active = data.active_flag
      this.desc = data.description
      this.rentalPeriod = data.rental_period
      this.quantityAvailable = parseInt(data.quantity_available)
      this.quantityTotal = parseInt(data.total_quantity) || this.quantityAvailable
      this.picture = data.picture
      this.contact_id = data.contact_id
    })

    let desc = document.getElementById('itemDesc')
    let remaining = document.getElementById('remaining')
    let max = 256
    desc.addEventListener('keyup', (e) => {
      let cur_len = max - e.target.value.length
      remaining.innerHTML = cur_len
      if (cur_len < 20) remaining.style.color = 'red'
      else remaining.style.color = 'black'
    })

    let updateConfirm = document.getElementById('update-confirm')
    let deleteConfirm = document.getElementById('delete-confirm')

    let updateModal = document.getElementById('updateModal')
    let deleteModal = document.getElementById('deleteModal')

    var updateBtn = document.getElementById("update")
    var deleteBtn = document.getElementById("delete")

    var closeUpdate = document.getElementsByClassName("close")[0]
    var closeDelete = document.getElementsByClassName("close")[1]

    updateBtn.onclick = function() {
      updateModal.style.display = "block"
    }

    deleteBtn.onclick = function() {
      deleteModal.style.display = "block"
    }

    // When the user clicks on (x), close the modal
    closeUpdate.onclick = function() {
      updateModal.style.display = "none"
    }
    closeDelete.onclick = function() {
      deleteModal.style.display = "none"
    }

    updateConfirm.onclick = () => {
      axios.post('http://lions-share-234722.appspot.com/updateitem', {
        active_flag: 1,
        contact_id: this.contact_id,
        rental_period: this.rentalPeriod,
        total_quantity: this.quantity,
        name: this.nm,
        description: this.desc,
        item_id: this.id
      })
      .then((response) => {
        console.log(response)
        this.$router.push({ path: `borrow/item/${this.id}` })
      })
      .catch((error) => {
        console.log(error)
        this.$router.push({ path: `borrow/item/${this.id}` })
      })
    }

    deleteConfirm.onclick = () => {
      axios.post('http://lions-share-234722.appspot.com/updateitem', {
        active_flag: 0,
        contact_id: this.contact_id,
        rental_period: this.rentalPeriod,
        total_quantity: this.quantityTotal,
        name: this.nm,
        description: this.desc,
        item_id: this.id
      })
      .then((response) => {
        console.log(response)
        window.location.reload()
      })
      .catch((error) => {
        console.log(error)
        window.location.reload()
      })
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target.className == "modal") {
        updateModal.style.display = "none"
        deleteModal.style.display = "none"
      }
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  background: #3949ab;
  color: #fff;
  font-size: 15px;
  padding: 20vh 15px 0;
}

img {
  width: 100vw;
}

.field {
  margin: 5px 0;
}

.btn-delete {
  background: red;
}

.confirm {
  margin-top: 40px;
}

#itemQuantity, #itemRentalPeriod {
  width: 5vw;
}

#itemDesc {
  width: 80%;
}

.tableForm td {
  padding: 5px 3px;
}

.tableForm td:nth-child(1){
  text-align: right;
  font-weight: bold;
}

.tableForm td:nth-child(2) {
  text-align: left;
}

.tableForm td.desc_cell {
  text-align: center;
}

@media only screen and (min-device-width : 768px){
  #itemDesc{
    width: 40vw;
    max-width:600px;
    margin: 0 auto;
  }

  .btn {
    max-width: 100px;
  }

  .tableForm {
    width: 80vw;
    max-width: 900px;
    margin: 0 auto;
  }

}
</style>
