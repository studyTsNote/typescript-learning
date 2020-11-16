import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import '@/style/TodoItem.less'
import { Item } from '../../types/vue-todo'

@Component
export default class TodoItem extends Vue {
  @Prop(Object) item!: Item
  @Prop(Number) index!: number
  @Prop(Number) editingIndex!: number

  editingContent = ''

  @Watch('editingIndex')
  editingChange (index: number) {
    if (index === this.index) {
      this.editingContent = this.item.text
    } else {
      this.editingContent = ''
    }
  }

  save () {
    this.$emit('on-save', { index: this.index, text: this.editingContent })
  }

  edit () {
    this.$emit('on-edit', this.index)
  }

  cancel () {
    this.$emit('on-cancel')
  }

  complete () {
    this.$emit('on-complete', this.index)
  }

  render () {
    return (
      <li class="todo-item">
        {this.editingIndex === this.index
          ? (<div>
            <a-space>
              <a-input v-model={this.editingContent} on-pressEnter={this.save}></a-input>
              <a-button type="primary" on-click={this.save}>确定</a-button>
              <a-button on-click={this.cancel}>取消</a-button>
            </a-space>
          </div>)
          : (<a-checkbox checked={this.item.complete} nativeOn-click={this.complete}>
            <span class={{ 'todo-item__text': true, 'todo-item--finished': this.item.complete }}>{this.item.text}</span>
            <a-icon class="todo-item__edit" type="edit" theme="filled" nativeOn-click={this.edit}></a-icon>
          </a-checkbox>)}
      </li>
    )
  }
}
