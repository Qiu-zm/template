<template>
  <div class="page">
    <!-- <div v-show="iswarning" @click="addBSCtestnet()" class="warning">
      Meta Decentraland is not supported on this network. Please switch to BSCTestnet.
    </div> -->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>

<script>
// import store from "../../store"
export default {
  name: "Swapdemo1Index",

  directives: {},
  inject:['reload'],
  data() {
    return {
      timer: "",
      toast: "",
      iswarning: false,
      hecotest: "0x100",
      hecomain: "0x80",
      BSCtestnet:'0x61',
      BSCmainnet:'0x38',
      informshow: true,
    };
  },
  computed: {
  },
  mounted() {
    ethereum.on("chainChanged", (_chainId) => {
      if (_chainId != this.BSCtestnet) {
        this.iswarning = true;
      } else {
        this.iswarning = false;
      }
      this.reload();
    });
    ethereum.request({ method: "eth_chainId" }).then((res) => {
      if (res != this.BSCtestnet) {
        this.iswarning = true;
      } else {
        this.iswarning = false;
      }
      // store.dispatch('setNetworkState', this.iswarning)
    });
  },

  methods: {
    InformShow() {
      this.informshow = !this.informshow;
    },
  },
  beforeDestroy() {
    console.log("卸载页面");
    clearTimeout(this.timer);
    this.timer = null;
  },

};
</script>

<style lang="less" scoped>
.page{
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
}
.warning {
  text-align: center;
  padding: 20px 0;
  background-color: #ee0a24;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 6999;
  cursor: pointer;
}
</style>
