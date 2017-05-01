/* @flow */
import { observable, action } from 'mobx'

import type { Todo } from '../types'

export default class TodoListState {
  @observable todoList: Array<Todo> = []

  @action handleChangeTodo = (index: number, e: InputEvent) => {
    this.todoList[index].done = e.target.checked
  }

  @action addTodo(todo: Todo) {
    this.todoList.push(todo)
  }
}
