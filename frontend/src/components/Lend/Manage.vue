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
            v-bind:id="item.id"
            v-bind:key="item.key">
      </item>
    </div>
  </div>
</template>

<script>
import Item from './ManageItem.vue'

export default {
  components: { Item },
  name: 'borrow',
  data () {
    return {
      categories: ['all', 'art', 'music', 'video', 'electronics'],
      items: [
        { id: '123' }
      ]
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
