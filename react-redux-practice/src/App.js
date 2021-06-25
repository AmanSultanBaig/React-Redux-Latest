import { useSelector, useDispatch } from 'react-redux'
import { Add, Subtract } from './reducer/actions/AppReducerAction'

function App() {

  const state = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello World {state}</h1>
      <button onClick={() => dispatch(Add("hello"))}>+</button>
      <button onClick={() => dispatch(Subtract("hello 2"))}>-</button>
    </div>
  );
}

export default App;