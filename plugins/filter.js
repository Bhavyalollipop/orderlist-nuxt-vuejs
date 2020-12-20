import Vue from 'vue'

Vue.filter('currencyFormat', (v) => {
  return v.toString().replace(/^[+-]?\d+/, function (int) {
    return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  })
})
