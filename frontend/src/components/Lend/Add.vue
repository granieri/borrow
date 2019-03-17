<template>
  <div class="content">
    <table class="tableForm">
      <tr>
        <td>
          <label for="itemName">Item name:</label>
        </td>
        <td>
          <input id="itemName" name="itemName" type="text">
        </td>
      </tr>
      <tr>
        <td>
          <label for="category" id="categoryLabel">Category:</label>
        </td>
        <td>
          <select id="category">
            <option v-for="category in categories">{{category}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemPic">Photo:</label>
        </td>
        <td>
          <input type="file" id="itemPic" name="itemPic" accept="image/*">
        </td>
      </tr>
      <tr>
        <td class="desc_cell" colspan="2">
          <label for="itemDesc">Description:</label><br> <textarea name="itemDesc" id="itemDesc" rows="3"></textarea>
          <div><span id="remaining">256</span> characters remaining</div>
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemQuantity">Quantity:</label>
        </td>
        <td>
          <input id="itemQuantity" name="itemQuantity" type="number" min="0" step="1">
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemRentalPeriod">Rental period:</label>
        </td>
        <td>
          <input id="itemRentalPeriod" name="itemRentalPeriod" type="number" min="1" step="1"> hours
        </td>
      </tr>
      <tr>
        <td>
          <label for="itemAdopt">Adopt now:</label>
        </td>
        <td>
          <input id="itemAdopt" name="itemAdopt" type="checkbox">
        </td>
      </tr>
    </table>
    <button class="btn">add item</button>
  </div>
</template>

<script>
export default {
  name: 'LendAdd',
  data () {
    return {
      categories: ['art', 'music', 'video', 'electronics']
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
  width: 100%;
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
