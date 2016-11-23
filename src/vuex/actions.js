/**
 * action 会收到 store 作为它的第一个参数
 * 既然我们只对事件的分发（dispatch 对象）感兴趣。（state 也可以作为可选项放入）
 * 我们可以利用 ES6 的解构（destructuring）功能来简化对参数的导入
 */
export const increment = ({ commit, state }) => {
  commit('increment', 1)
}

export const updateMessage = ({ commit, state }, e) => {
  commit('updateMessage', e.target.value)
}

export const decrement = ({ commit, state }) => {
  commit('decrement', 1)
}

export const addNote = ({ commit, state }) => {
  commit('ADD_NOTE')
}

export const editNote = ({ commit, state }, e) => {
  commit('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ commit, state }) => {
  commit('DELETE_NOTE')
}

export const updateActiveNote = ({ commit, state }, note) => {
  commit('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ commit, state }) => {
  commit('TOGGLE_FAVORITE')
}
