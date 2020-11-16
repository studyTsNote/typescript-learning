import Vue from 'vue'
import { Input, Button, Icon, Checkbox, Space } from 'ant-design-vue'

import Todo from './components/Todo.vue'
import TodoItem from './components/TodoItem'

Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Checkbox)
Vue.use(Space)

export {
  Todo as default,
  TodoItem
}
