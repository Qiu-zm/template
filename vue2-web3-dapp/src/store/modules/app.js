const state = {
  accountAddr: '',
  networkId: "",
}
const mutations = {
  //钱包地址
  SET_ACCOUNTADDR(state, accountAddr) {
    state.accountAddr = accountAddr
  },
  //网络id
  SET_NETWORKID(state, networkId) {
    state.networkId = networkId;
  },
}
const actions = {
  setAccountAddr({ commit }, accountAddr) {
    commit('SET_ACCOUNTADDR', accountAddr)
  },
  setNetworkId({ commit }, networkId) {
    commit("SET_NETWORKID", networkId);
  },
}
export default {
  state,
  mutations,
  actions
}
