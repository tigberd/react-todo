/* @flow */
import { todoListState } from '../states'
import type { Todo } from '../types'

export function addTodo(name: string) {
  if (name === '') return

  const todo: Todo = {
    name,
    done: false
  }
  todoListState.addTodo(todo)
}
