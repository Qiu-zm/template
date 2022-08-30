import Web3 from "web3";
import store from '../store'
import Vue from "vue";
var web3 = null;
function initWeb3() {
    // let web3;
    if (window.ethereum) {
        // console.log('用户 1')
        web3 = new Web3(window.ethereum);
        // 请求用户授权
        window.ethereum.request({ method: 'eth_requestAccounts' }).then(function (accounts) {
            store.dispatch('setAccountAddr', accounts[0])
            localStorage.setItem('setAccountAddr',accounts[0])
        }).catch(err => {
            console.log(err)
        });
    }
    Vue.prototype.web3 = web3
}
function connectweb3(){
    if (window.ethereum) {
        // console.log('用户 1')
        web3 = new Web3(window.ethereum);
    } else if (typeof web3 !== 'undefined') {
        // console.log('用户 2',web3)
        web3 = new Web3(web3.currentProvider);
        web3.eth.getAccounts(function (error, res) {
            if (!error) {
                store.dispatch('setAccountAddr', res[0])
            }
        })
    } else {
        console.log('本地?');
        web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/"));
    }
    return web3;
}
//导出相应的方法
export {
    web3,
    connectweb3,
    initWeb3
}