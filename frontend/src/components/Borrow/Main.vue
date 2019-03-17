<template>
  <div class="content">
    <div class="categorySelect">
      <label for="category" id="categoryLabel">Category:</label>
      <select id="category" v-model="cat">
        <option v-for="category in categories">{{category}}</option>
      </select>
    </div>

    <div class="items">
      <item v-for="item in items"
            v-bind:id="item.id"
            v-bind:nm="item.name"
            v-bind:quantity="item.quantity_available"
            v-bind:pic="item.picture"
            v-bind:key="item.key"
            :ref="item.key">
      </item>
    </div>

    <router-link to="lend/add" class="hoverBtn"><span>+</span></router-link>
  </div>
</template>

<script>
import Item from './Item.vue'
import axios from 'axios'

export default {
  components: { Item },
  name: 'Borrow',
  data () {
    return {
      categories: ['all', 'art', 'music', 'video', 'electronics'],
      cat: 'all',
      items: []
    }
  },
  mounted(){
    axios.get('http://lions-share-234722.appspot.com/listallactive')
      .then((res) =>{
        this.items = res.data
      })
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

.categorySelect {
  padding: 15px;
  display: flex;
  height: 30px;
}

.items {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
  padding-bottom: 12vh;
  margin-top:10px;
}


</style>
