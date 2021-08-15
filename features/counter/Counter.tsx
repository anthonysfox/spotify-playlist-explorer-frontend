import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { counterSlice } from "./counterSlice";
const Counter = () => {
  const count = useAppSelector(state => state.counter.count)
  const [incAmount, setIncAmount] = useState(0)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <input type="number" name="incAmount" id="incAmount" onChange={(e) => setIncAmount(Number(e.target.value))}/>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+1</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>-1</button>
      <button onClick={() => dispatch(counterSlice.actions.reset())}>Reset</button>
      <button onClick={() => dispatch(counterSlice.actions.incrementByAmount(incAmount))}>Add specific amount</button>
    </div>
  );
};

export default Counter;
