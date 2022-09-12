import { observable, runInAction } from 'mobx'

const GlobalState = observable({
  locoScroll: null,
  scrollRef: null,
  scroll: null,
})

export default GlobalState;

