const state = {
    accountAddr:'',
  }
  const mutations = {
    //钱包地址
    SET_ACCOUNTADDR(state,accountAddr){
      state.accountAddr = accountAddr
    },
  }
  const actions = {
    setAccountAddr({commit},accountAddr){
      commit('SET_ACCOUNTADDR',accountAddr)
    },
  }
  export default {
    state,
    mutations,
    actions
  }
  