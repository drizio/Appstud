import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"


const initialState = {
    currentTrack: null,
    playing: false
}

function AppReducer(state = initialState, action) {
    switch (action.type) {
      case 'PLAY':
        return {...state, currentTrack :action.payload.track, playing: true }
      case 'PAUSE':
        return {...state, playing: false }
      default:
        return state
    }
  }

const store = createStore(AppReducer, applyMiddleware(thunk))


export default store;
