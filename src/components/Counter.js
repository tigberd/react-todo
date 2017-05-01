/* @flow */
import React from 'react'
import { RaisedButton, TextField } from 'material-ui'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import styled from 'styled-components'

import { increment, decrement } from '../actions/counter'

import CounterState from '../states/couterState'

type Props = {
  counterState: CounterState
}

const defaultMargin = '12px'

const CounterWrapper = styled.div`
  margin: ${defaultMargin};
`

const IncrementButton = styled(RaisedButton)`
  margin: ${defaultMargin};
`

const DecrementButton = styled(RaisedButton)`
  margin: ${defaultMargin};
`

const CounterValueText = styled(TextField)`
  margin: ${defaultMargin};
`

@observer class Counter extends React.Component {
  props: Props
  @observable text: string = ''

  handleIncrement = () => {
    increment(this.text)
  }

  handleDecrement = () => {
    decrement(this.text)
  }

  @action.bound onChangeText(e: Object) {
    this.text = e.target.value
  }

  render() {
    const { counter } = this.props.counterState
    return (
      <div>
        <h2>Counter</h2>
        <IncrementButton
          label="Increment"
          primary={true}
          onClick={this.handleIncrement}
        />
        <DecrementButton
          label="Decrement"
          secondary={true}
          onClick={this.handleDecrement}
        />
        <CounterValueText
          hintText="increment value"
          value={this.text}
          onChange={this.onChangeText}
        />
        <CounterWrapper>count: {counter}</CounterWrapper>
      </div>
    )
  }
}

export default Counter
