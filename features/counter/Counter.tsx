import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { increment, decrement, reset, incrementByAmount, selectCount } from "./counterSlice";
const Counter = () => {
  const count = useAppSelector(selectCount)
  const [incAmount, setIncAmount] = useState(0)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <input type="number" name="incAmount" id="incAmount" onChange={(e) => setIncAmount(Number(e.target.value))}/>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(incAmount))}>Add specific amount</button>
    </div>
  );
};

export default Counter;
