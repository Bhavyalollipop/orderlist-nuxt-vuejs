import { list } from '@/static/orderlist'
const state = () => ({
  total: list.length,
  list,
  items: []
})
const mutations = {
  updateList: (state, index) => {
    const detail = JSON.parse(JSON.stringify(state.list))
    state.items = detail.splice(index, 5)
  },
  updateStatus: (state, detail) => {
    const status = (detail.status + 1) > 3 ? { status: 1 } : { status: detail.status + 1 }
    state.list = state.list.map((item) => {
      const itemstatus = item.id === detail.id ? status : { status: item.status }
      return { ...item, ...itemstatus }
    })
  }
}
const actions = {
  //  pass pagination detail to get list
  getList ({ commit }, { page }) {
    //    write logic for index
    const index = (page - 1) * 5
    //  call the commit functin to mutate the value
    commit('updateList', index)
  },
  changeStatus ({ commit }, item) {
    commit('updateStatus', item)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
