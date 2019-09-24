export function isLoggedIn (state) {
  return Boolean(state.currentUser && state.currentUser.id)
}
