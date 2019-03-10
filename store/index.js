export const state = () => ({
  input: '',
  output: '',
  tabIndex: 0
})

export const mutations = {
  input (state, str) {
    state.input = typeof str === 'string' ? str : ''
  },
  output (state, str) {
    state.output = typeof str === 'string' ? str : ''
  },
  switchTab (state, index) {
    state.tabIndex = index || 0
  }
}
