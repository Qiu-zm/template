
// import { IMPAbi } from './abis/TokenABI'
import Contract from './contract/index'
import API from './contract/api'
import { TokenAddr } from './Addresses'

const TokenAddress = TokenAddr
//abi
const TokenABI = IMPAbi //next-abi



const contract = new Contract({
    TokenAddress,
    TokenABI,
})


export default new API(contract)