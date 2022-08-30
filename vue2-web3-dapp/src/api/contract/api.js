import { ConversionAccuracy } from "./../../utils/tool";
class API {
	constructor(contract) {
		this.contract = contract
	}
	init(){
		return new Promise((resolve, reject) => {
			return this.contract.Connectpurse((result) => {
				resolve(result)
			}, (error) => {
				reject(error)
			})
		})

	}
	// getinfodata(){
	// 	return this.contract.initFnPromise().then(res => {
	// 		return new Promise((resolve, reject) => {
	// 			this.contract.getinfodata(
	// 				(result) => {
	// 					resolve(result)
	// 				}, (error) => {
	// 					reject(error)
	// 				}
	// 			)
	// 		})
	// 	})
	// }
	// BuyWLIMP(merkleproof,allowedMintQuantity,mintQuantity){
	// 	return this.contract.initFnPromise().then(res => {
	// 		return new Promise((resolve, reject) => {
	// 			this.contract.BuyWLIMP(merkleproof,allowedMintQuantity,mintQuantity,
	// 				(result) => {
	// 					resolve(result)
	// 				}, (error) => {
	// 					reject(error)
	// 				}
	// 			)
	// 		})
	// 	})
	// }

	
}
export default API