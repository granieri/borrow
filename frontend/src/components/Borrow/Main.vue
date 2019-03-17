<template>
  <div class="content">
    <div class="categorySelect">
      <label for="category" id="categoryLabel">Category:</label>
      <select id="category">
        <option v-for="category in categories">{{category}}</option>
      </select>
    </div>

    <div class="items">
      <item v-for="item in items"
            v-bind:nm="item.nm"
            v-bind:quantity="item.quantity"
            v-bind:id="item.id"
            v-bind:key="item.key">
      </item>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  components: { Item },
  name: 'borrow',
  data () {
    return {
      categories: ['all', 'art', 'music', 'video', 'electronics'],
      items: [
        { nm: 'GoPro HERO', quantity: '2', id: '123' }
      ]
    }
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
}

.categorySelect {
  padding: 15px;
  display: flex;
}

select {
  font-size: 15px;
}

.items {
  display: flex;
}
</style>
