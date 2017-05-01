/* @flow */
import React from 'react'
import { ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const Completed = styled.div`
  text-decoration: line-through;
`

const TodoTag = observer(({ todoListState, primaryText, index, done }) => {
  const item = (
    <ListItem
      primaryText={primaryText}
      leftCheckbox={
        <Checkbox
          onCheck={todoListState.handleChangeTodo.bind(this, index)}
          checked={done}
        />
      }
    />
  )
  if (done) {
    return (
      <Completed>
        {item}
      </Completed>
    )
  } else {
    return (
      <div>
        {item}
      </div>
    )
  }
})

const TodoView = observer(({ todoListState, done }) => (
  <div>
    {todoListState.todoList
      .filter(todo => todo.done === done)
      .map((todo, index) => {
        return (
          <TodoTag
            key={index}
            index={index}
            done={done}
            primaryText={todo.name}
            todoListState={todoListState}
          />
        )
      })}
  </div>
))

export default TodoView
