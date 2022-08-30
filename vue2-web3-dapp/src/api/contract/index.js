import Web3 from "web3";
import store from './../../store'

class Contract {
    constructor(options) {
        //tokenaddress
        this.TokenAddr = options.TokenAddress
        // 合约abi
        this.TokenABI = options.TokenABI
        // 合约对象
        this.TokenContract = null
        this.web3 = null
        this.account = null
        this.isInit = false
    }
    // 初始化
    async init(callback) {
        if (this.isInit) {
            callback(ethereum.selectedAddress);
        } else {
            this.Connectpurse( res => {
                callback(res);
            })
            
        }
    }

    Connectpurse(callback){
        let _this = this
            let web3Provider
            if (window.ethereum) {
                web3Provider = window.ethereum;
                _this.web3 = new Web3(window.ethereum);
                if (_this.TokenAddr) {
                    _this.TokenContract = new _this.web3.eth.Contract(_this.TokenABI, _this.TokenAddr);
                }
                callback(web3Provider);
            } else if (window.web3) {
                web3Provider = window.web3.currentProvider;
                //创建web3对象;
                _this.web3 = new Web3(web3Provider);

                _this.web3.eth.getAccounts(function (error, res) {
                    if (!error) {
                        // 创建合约
                        if (_this.TokenAddr) {
                            _this.TokenContract = new _this.web3.eth.Contract(_this.TokenABI, _this.TokenAddr);
                        }
                        store.dispatch('setAccountAddr', res[0])
                        _this.isInit = true
                        callback(res[0]);
                    }
                })

            }

    }
    //
    // getinfodata(callback, errorCallBack){
    //     let _this = this
    //     let item = {}
    //     return new Promise((resolve, reject) => {
    //         Promise.all([
    //             // ethereum.selectedAddress && _this.TokenContract.methods.wlSaleClaimed(ethereum.selectedAddress).call(),// 用户已通过白名单预Mint数量
    //             // _this.TokenContract.methods.wlSaleAmountMinted().call(),//总计已白名单预Mint数量
    //         ]).then(async res => {
    //             // console.log("res =>",res);
    //             callback && callback(item)
    //         }).catch(err => {
    //             errorCallBack && errorCallBack(_this.handleError(err));
    //         })
    //     })
    // }

    // Vip Mint
    // BuyVipIMP(mintQuantity,value,callback, errorCallBack) {
    //     let _this = this
    //     if (!_this.web3) return
    //     let data = _this.TokenContract.methods
    //         .vipServiceSaleBuy(mintQuantity)
    //         .encodeABI();
    //     this.sendTransactions(ethereum.selectedAddress,_this.TokenAddr, data, callback, errorCallBack,value);
    // }
    // // Cashier Mint
    // BuyCashierIMP(mintQuantity,value,callback, errorCallBack) {
    //     let _this = this
    //     if (!_this.web3) return
    //     let myMethod = _this.TokenContract.methods.cashierSaleBuy(mintQuantity)
    //     this.Contractsend(myMethod,ethereum.selectedAddress,callback, errorCallBack,value)
    // }

    sendTransactions(account, to, data, callback, errorCallBack,value = '') {
        let _this = this
        _this.web3 && _this.web3.eth.sendTransaction({
            from: account,
            to: to,
            value: value,
            data: data,
        }).on('receipt', function(receipt){
            callback && callback(receipt)
        }).on('error', function(receipt){
            errorCallBack && errorCallBack(receipt)
        }).on('confirmation',function(confirmation){

        });
    }
    Contractsend(myMethod,account,callback, errorCallBack,value = ''){
        myMethod.send({from: account,value: value})
        .on('receipt', function(receipt){
            console.log(receipt);
            callback && callback(receipt)
        })
        .on('error',function(error){
            console.log(error);
            errorCallBack && errorCallBack(receipt)
        })

    }

    // init 进一步封装

    initFnPromise() {
        return new Promise((resolve, reject) => {
            this.init((res) => {
                if (res) {
                    resolve(res)
                } else {
                    reject('error')
                }
            })
        })
    }

    handleError(errorMsg) {
        if ("message" in errorMsg) {
            return errorMsg.message;
        }
        errorMsg = errorMsg.toString();
        errorMsg = errorMsg.replace(/\s+/g, " ");
        errorMsg = errorMsg.replace(/.+\\"message\\"\\:\s*\\"(.+)\\".+/, "$1");
        return errorMsg;
    }


}



export default Contract