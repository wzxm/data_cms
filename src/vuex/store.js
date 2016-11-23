import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

// 使用 vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // TODO 放置初始状态
  count: 0,
  notes: [],
  activeNote: {}
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO 放置我们的状态变更函数
  increment (state, amount) {
    state.count = state.count + amount
  },
  updateMessage (state, message) {
    state.count = Number(message)
  },
  decrement (state, amount) {
    state.count = state.count - amount
  },
  DECREMENT (state, amount) {
    state.count = state.count - amount
  },
  ADD_NOTE (state) {
    const newNote = {
      text: 'New Note' + state.count,
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
    state.count++
  },

  EDIT_NOTE (state, text) {
    if (state.notes.length === 0) {
      const newNote = {
        text: text,
        favorite: false
      }
      state.notes.push(newNote)
      state.activeNote = newNote
      state.count++
    }
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    let index = state.notes.indexOf(state.activeNote)
    if (index !== -1) {
      state.notes.splice(index, 1)
      state.activeNote = {}
      // if (index !== 0) {
      //   state.activeNote = state.notes[index - 1]
      // }
    }
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以链接到我们的应用中
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  actions,
  getters,
  state,
  mutations
})
