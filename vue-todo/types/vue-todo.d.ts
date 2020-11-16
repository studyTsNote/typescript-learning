import Vue from 'vue'

export interface ItemUpdate {
  index: number;
  text: string;
}

export interface Item {
  text: string;
  complete: boolean;
}

export declare class TodoItem extends Vue {
  item: Item;
  index: number;
  editingIndex: number;
}

export declare class Todo extends Vue {

}
