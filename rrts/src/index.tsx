import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { App } from './components/App'
import { reducers } from './redux/reducers'
const store = createStore(reducers, applyMiddleware(thunk)); /** enabled reducer */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
