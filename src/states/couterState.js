/* @flow */
import { observable, action } from 'mobx'

export default class CounterState {
  @observable counter = 0
  @action increment(num: number = 1) {
    this.counter += num
  }
  @action decrement(num: number = 1) {
    this.counter -= num
  }
}
