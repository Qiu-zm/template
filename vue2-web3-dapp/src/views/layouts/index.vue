<template>
  <div class="page">
    <!-- <div v-show="iswarning" @click="addBSCtestnet()" class="warning">
      Meta Decentraland is not supported on this network. Please switch to BSCTestnet.
    </div> -->
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>

    <TabBar />
  </div>
</template>

<script>
import TabBar from "@/components/Tabbar/tabbar";
import store from "../../store"
export default {
  name: "Swapdemo1Index",

  components: { TabBar },

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
      ethmainnet:'0x1',
      ethtestnet:'0x3',
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
      store.dispatch('setNetworkId', res)
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
    async addhecotest() {
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: this.hecotest }],
        });
      } catch (error) {
      var method = "wallet_addEthereumChain";
      var params = [
        {
          chainId: this.hecotest,
          chainName: "heco-testnet",
          rpcUrls: ["https://http-testnet.hecochain.com"],
          nativeCurrency: {
            name: "HT",
            symbol: "HT",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.hecoinfo.com"],
        },
      ];
      window.ethereum.sendAsync(
        {
          method,
          params,
        },
        function(err, result) {
          if (err) {
            console.error(err);
            return false;
          } else {
            console.log(
              "%c 🚀🚀🚀😝index-->70, result =>",
              "color:red;",
              result
            );
          }
        }
      );
    }
    },
    async addhecomain() {
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: this.hecomain }],
        });
      } catch (error) {
      var method = "wallet_addEthereumChain";
      var params = [
        {
          chainId: this.hecomain,
          chainName: "heco-mainnet",
          rpcUrls: ["https://http-mainnet-node.huobichain.com"],
          nativeCurrency: {
            name: "HT",
            symbol: "HT",
            decimals: 18,
          },
          blockExplorerUrls: ["https://hecoinfo.com"],
        },
      ];
      window.ethereum.sendAsync(
        {
          method,
          params,
        },
        function(err, result) {
          if (err) {
            console.error(err);
            return false;
          } else {
            console.log(
              "%c 🚀🚀🚀😝index-->70, result =>",
              "color:red;",
              result
            );
          }
        }
      );
    }
    },
    async addBSCtestnet(){
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: this.BSCtestnet }],
        });
      } catch (error) {
      var method = "wallet_addEthereumChain";
      var params = [
        {
          chainId: this.BSCtestnet,
          chainName: "BSC-testnet",
          rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
          nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://testnet.bscscan.com"],
        },
      ];
      window.ethereum.sendAsync(
        {
          method,
          params,
        },
        function(err, result) {
          if (err) {
            console.error(err);
            return false;
          } else {
            console.log(
              "%c 🚀🚀🚀😝index-->70, result =>",
              "color:red;",
              result
            );
          }
        }
      );
    }
    },
    async addBSCmainnet(){
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: this.BSCmainnet }],
        });
      } catch (error) {
      var method = "wallet_addEthereumChain";
      var params = [
        {
          chainId: this.BSCmainnet,
          chainName: "BSC-mainnet",
          rpcUrls: ["https://bsc-dataseed.binance.org/"],
          nativeCurrency: {
            name: "BNB",
            symbol: "BNB",
            decimals: 18,
          },
          blockExplorerUrls: ["https://bscscan.com"],
        },
      ];
      window.ethereum.sendAsync(
        {
          method,
          params,
        },
        function(err, result) {
          if (err) {
            console.error(err);
            return false;
          } else {
            console.log(
              "%c 🚀🚀🚀😝index-->70, result =>",
              "color:red;",
              result
            );
          }
        }
      );
      }
    },
    async addETHtestnet(){
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: this.ethtestnet }],
        });
      } catch (error) {
        var method = "wallet_addEthereumChain";
        var params = [
          {
            chainId: this.ethtestnet,
            chainName: "Ropsten",
            rpcUrls: ["https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            blockExplorerUrls: ["https://ropsten.etherscan.io"],
          },
        ];
        window.ethereum.sendAsync(
          {
            method,
            params,
          },
          function(err, result) {
            if (err) {
              console.error(err);
              return false;
            } else {
              console.log(
                "%c 🚀🚀🚀😝index-->70, result =>",
                "color:red;",
                result
              );
            }
          }
        );
      }
      
    },
    async addETHmainnet(){
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: this.ethmainnet }],
        });
      } catch (error) {
        var method = "wallet_addEthereumChain";
        var params = [
          {
            chainId: this.ethmainnet,
            chainName: "Ethereum",
            rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            blockExplorerUrls: ["https://etherscan.io"],
          },
        ];
        window.ethereum.sendAsync(
          {
            method,
            params,
          },
          function(err, result) {
            if (err) {
              console.error(err);
              return false;
            } else {
              console.log(
                "%c 🚀🚀🚀😝index-->70, result =>",
                "color:red;",
                result
              );
            }
          }
        );
      }
      
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
