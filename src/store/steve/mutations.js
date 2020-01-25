export function ADD_CLICK(state, buttonName) {
  if (!state.clicks[buttonName]) {
    state.clicks = { ...state.clicks, [buttonName]: 0 }
  }
  state.clicks[buttonName]++
}
