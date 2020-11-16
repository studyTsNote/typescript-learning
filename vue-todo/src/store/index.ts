import Vue from 'vue'
import Vuex from 'vuex'
import { Item } from '../../types/vue-todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      { text: '学习 TS', complete: false },
      { text: '学习 Vue3', complete: false }
    ]
  },
  mutations: {
    updateTodoList (state, { index, text }) {
      const item = { ...state.todoList[index] }
      item.text = text
      state.todoList.splice(index, 1, item)
    },
    todoItemComplete (state, index) {
      const item = { ...state.todoList[index] }
      item.complete = !item.complete
      state.todoList.splice(index, 1, item)
    },
    insertTodoItem (state, todoItem: Item) {
      state.todoList.push(todoItem)
    }
  },
  actions: {
  },
  modules: {
  }
})
