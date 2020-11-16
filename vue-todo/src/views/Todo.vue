<template>
  <div class="todo">
    <ul>
      <todo-item
        v-for="(item, i) in list"
        :key="i"
        :item="item"
        :index="i"
        :editingIndex="editingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
        @on-complete="handleComplete"
      />

      <a-space v-show="showInput" style="margin:10px 0">
        <a-input id="plusInput" v-model="newItem.text" @pressEnter="plusItem"></a-input>
        <a-button type="primary" @click="plusItem">确定</a-button>
        <a-button @click="cancelPlus">取消</a-button>
      </a-space>
    </ul>
    <a-icon
      class="todo-plus"
      type="plus"
      @click.native="openPlusInput"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from '../components/TodoItem'
import { State, Mutation } from 'vuex-class'
import { Item, ItemUpdate } from '../../types/vue-todo'

@Component({
  name: 'todo',
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  @State('todoList') list: Item[]
  editingIndex = -1
  newItem = {
    text: '',
    complete: false
  }

  showInput = false

  @Mutation('updateTodoList') updateList
  @Mutation('todoItemComplete') handleComplete
  @Mutation('insertTodoItem') insertItem

  handleSave (data: ItemUpdate) {
    this.updateList(data)
    this.handleCancel()
  }

  handleEdit (index: number) {
    this.editingIndex = index
  }

  handleCancel () {
    this.editingIndex = -1
  }

  openPlusInput () {
    this.showInput = true
    this.$nextTick(() => {
      const plusInput = document.querySelector('#plusInput')
      if (plusInput) {
        plusInput.focus()
      }
    })
  }

  plusItem () {
    this.showInput = false
    this.insertItem({ ...this.newItem })
    this.newItem.text = ''
  }

  cancelPlus () {
    this.showInput = false
    this.newItem.text = ''
  }
}
</script>

<style lang="less">
.todo {
  width: 80%;
  max-width: 600px;
  padding: 20px;
  margin: 50px auto;
  border-radius: 8px;
  box-shadow: 0 2px 5px 2px rgb(172, 168, 168);

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  &-plus {
    font-size: 25px;
    font-weight: bold;

    &:hover {
      color: #1890ff;
    }
  }
}
</style>
