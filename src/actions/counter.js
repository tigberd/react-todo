/* @flow */
import { counterState } from '../states'

export function increment(text: string) {
  const num: ?number = Number(text)
  if (!!num === false) {
    counterState.increment()
  } else if (num !== null) {
    counterState.increment(num)
  }
}

export function decrement(text: string) {
  const num: ?number = Number(text)
  if (!!num === false) {
    counterState.decrement()
  } else if (num !== null) {
    counterState.decrement(num)
  }
}
