import { observable, runInAction } from 'mobx'

const GlobalState = observable({
  locoScroll: null,
  scrollRef: null,
  scroll: null,
  isShowLeafFalling: false,
  isInputFocus: false,
  isInputActive: false,
})

export default GlobalState;

