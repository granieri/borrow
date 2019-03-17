<template>
  <div class="content">
    <div class="field"><label for="itemName">Item name:</label> <input id="itemName" name="itemName" type="text"></div>
    <div class="field">
      <label for="category" id="categoryLabel">Category:</label>
      <select id="category">
        <option v-for="category in categories">{{category}}</option>
      </select>
    </div>
    <div class="field"><label for="itemPic">Photo:</label> <input type="file" id="itemPic" name="itemPic" accept="image/*"></div>
    <label for="itemDesc">Description:</label> <textarea name="itemDesc" id="itemDesc" rows="3"></textarea>
    <div><span id="remaining">256</span> characters remaining</div>
    <div class="field"><label for="itemQuantity">Quantity:</label> <input id="itemQuantity" name="itemQuantity" type="number" min="0" step="1"></div>

    <div class="field"><label for="itemRentalPeriod">Rental period:</label> <input id="itemRentalPeriod" name="itemRentalPeriod" type="number" min="1" step="1"> hours</div>

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
  flex: 1;
  background: #8c9eff;
  font-size: 15px;
  padding: 15px;
}

img {
  width: 100vw;
}

.field {
  margin: 5px 0;
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
  margin: 0 auto;
  margin-top: 10px;
}

.btn:hover{
  background: #7986cb;
}

#itemQuantity, #itemRentalPeriod {
  width: 5vw;
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
}
</style>
