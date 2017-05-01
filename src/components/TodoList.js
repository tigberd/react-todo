/* @flow */
import React from 'react'
import { RaisedButton, TextField } from 'material-ui'
import { List } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import { addTodo } from '../actions/todo'
import TodoView from './TodoView'

type Props = {
  todoListState: Object
}

const style = {
  margin: 12
}

@observer class App extends React.Component {
  props: Props

  @observable text: string = ''

  handleAddTodo = () => {
    addTodo(this.text)
  }

  @action.bound onChangeText(e: Object) {
    this.text = e.target.value
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TextField
          style={style}
          hintText="task"
          value={this.text}
          onChange={this.onChangeText}
        />
        <RaisedButton
          label="Add Todo"
          style={style}
          onClick={this.handleAddTodo}
        />
        <br />
        <List>
          <Subheader>non completion</Subheader>
          <TodoView todoListState={this.props.todoListState} done={false} />
          <Subheader>completed</Subheader>
          <TodoView todoListState={this.props.todoListState} done={true} />
        </List>
      </div>
    )
  }
}

export default App
