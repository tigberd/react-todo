/* @flow */
import React from 'react'
import { AppBar } from 'material-ui'

import { counterState, todoListState } from '../states'

import Counter from './Counter'
import TodoList from './TodoList'

const App = () => {
  return (
    <div>
      <AppBar title="React Todo" />
      <Counter counterState={counterState} />
      <hr />
      <TodoList todoListState={todoListState} />
    </div>
  )
}

export default App
