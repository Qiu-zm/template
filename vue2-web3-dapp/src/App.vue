<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>
<script>
  import store from './store'
export default {
  name: 'FrontendApp',
  provide(){
    return{
      reload:this.reload
    }
  },
  data() {
    return {
      isRouterAlive:true
    };
  },

  mounted() {
    this.fn();
  },

  methods: {
    reload(){
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive = true
      });
    },
    fn(){
      var that = this
      ethereum.on('accountsChanged',function(accounts){
        store.dispatch('setAccountAddr', accounts[0])
        that.reload()
      }).on('chainChanged', (_chainId) =>{
        that.reload()
      });
    },
  },
};
</script>
<style lang="less">
html{
  width: 100%;
  overflow: hidden;
}
</style>
