export const state = () => ({
  input: '',
  file: null,
  output: '',
  tabIndex: 0
})

export const mutations = {
  input (state, str) {
    state.input = typeof str === 'string' ? str : ''
  },
  upload (state, file) {
    state.file = file && typeof file.name === 'string' ? file : null
  },
  output (state, str) {
    state.output = typeof str === 'string' ? str : ''
  },
  switchTab (state, index) {
    state.tabIndex = index || 0
  }
}
