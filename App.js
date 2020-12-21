import React from 'react';
import Router from './src/navigation/'
import { Provider } from 'react-redux'
import store from "./src/utils/store"
export default function App() {
  return <Provider store={store} >
      <Router />
    </Provider>
  
}
