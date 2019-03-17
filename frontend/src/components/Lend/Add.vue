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
        <td>
          <label for="category" id="categoryLabel">Category:</label>
        </td>
        <td>
          <select id="category" v-model="category">
            <option v-for="category in categories">{{category}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemPic">Photo:</label>
        </td>
        <td>
          <!--<input type="file" id="itemPic" ref="fileInput" name="itemPic" accept="image/*" @change="storeFile">-->
          <input type="text" id="itemPic" name="itemPic" maxlength="256">
        </td>
      </tr>
      <tr>
        <td class="desc_cell" colspan="2">
          <label for="itemDesc">Description:</label><br> <textarea name="itemDesc" id="itemDesc" rows="3" v-model="descr" maxlength="256"></textarea>
          <div><span id="remaining">256</span> characters remaining</div>
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemQuantity">Quantity:</label>
        </td>
        <td>
          <input id="itemQuantity" name="itemQuantity" type="number" min="0" step="1" v-model="quantity">
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemRentalPeriod">Rental period:</label>
        </td>
        <td>
          <input id="itemRentalPeriod" name="itemRentalPeriod" type="number" min="1" step="1" v-model="period"> hours
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemAdopt">Adopt now:</label>
        </td>
        <td>
          <input id="itemAdopt" name="itemAdopt" type="checkbox" v-model="adopt">
        </td>
      </tr>
    </table>
    <button class="btn" id="add">add item</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LendAdd',
  data () {
    return {
      categories: ['art', 'music', 'video', 'electronics'],
      nm: '',
      descr: '',
      category: 'art',
      pic: '',
      adopt: true,
      quantity: '',
      filename: '',
      period: ''
    }
  },
  mounted() {
    let desc = document.getElementById('itemDesc')
    let remaining = document.getElementById('remaining')
    let max = 256
    desc.addEventListener('keyup', (e) => {
      let cur_len = max - e.target.value.length
      remaining.innerHTML = cur_len
      if (cur_len < 20) remaining.style.color = 'red'
      else remaining.style.color = 'black'
    })

    let addBtn = document.getElementById('add')

    addBtn.addEventListener('click', () => {
      console.log('in click handler')
      axios.post('http://lions-share-234722.appspot.com/insertitem', {
        active_flag: 1,
        owner_id: '234',
        rental_period: this.period,
        total_quantity: this.quantity,
        quantity_available: this.quantity,
        name: this.nm,
        description: this.descr,
        picture: this.picture
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    })
  },
  methods: {
    storeFile () {
      let f = this.$refs.fileInput
      let filename = Date.now()
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
  .tableForm {
    width: 80vw;
    max-width: 900px;
    margin: 0 auto;
  }

  #itemDesc{
    width: 40vw;
    max-width:600px;
    margin: 0 auto;
  }

  .btn {
    max-width: 100px;
  }
}
</style>
