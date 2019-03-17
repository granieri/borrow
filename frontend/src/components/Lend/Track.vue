<template>
  <div class="content">
    <h2>Borrowers</h2>
    <div>
      User is borrowing 1 of Item since time_out.<br>
      They have 2 hours left.<br>
      <a class="contact" href="#">contact User</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: ['nm', 'quantity', 'id'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.content{
  background: #3949ab;
  color: #fff;
}

.contact {
  text-decoration: underline;
}
</style>
