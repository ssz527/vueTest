<template>
  <div class="aside-menu">
    <div v-for="(item, index) in list" :key="index" class="list-item" @click="goTo(item.url)">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'siderbar',
  props: ['itemList'],
  data() {
    return {
      list: this.itemList
    }
  },
  methods: {
    goTo: function (url) {
      console.log(this)
      this.$router.push(url)
    }
  }
}
</script>
<style lang="less">
.aside-menu {
  background-color: #252323;
  height: 100%;
}
.list-item {
  margin: 0 20px;
  padding: 10px 0;
  height: 20px;
  color: #eeeeee; 
  border-bottom: solid 1px #555;
  text-align: center;
  cursor: pointer;
}
</style>

