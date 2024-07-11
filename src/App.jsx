import { useDispatch, useSelector } from "react-redux";
import {
  changeCounterName,
  decrement,
  increment,
} from "./store/actions/counter.action";

function App() {
  const { count, name } = useSelector((state) => state.counterModule);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handledecrement() {
    dispatch(decrement());
  }

  function handleChangeCounterName(e) {
    const name = e.target.value;
    dispatch(changeCounterName(name));
  }
  return (
    <>
      <h1>
        Counter: {count} name: {name}
      </h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handledecrement}>-</button>
      <input
        type="text"
        className="border "
        value={name}
        onChange={handleChangeCounterName}
      />
    </>
  );
}

export default App;
