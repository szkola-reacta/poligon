import useCounter from './useCounter';

function Counter({ initialValue = 1 }) {

  // using property aliases
  const { count, decrement, increment } = useCounter(initialValue);
  // const { count: count1, decrement: decrement1, increment: increment1 } = useCounter(initialValue);
  // const { count: count2, decrement: decrement2, increment: increment2 } = useCounter(13, 5);

  // using properties
  // const counterData1 = useCounter(1);
  // const count1 = counterData1.count;
  // const decrement1 = counterData1.decrement;
  // const increment1 = counterData1.increment;

  // const counterData2 = useCounter(13, 5);
  // const count2 = counterData2.count;
  // const decrement2 = counterData2.decrement;
  // const increment2 = counterData2.increment;

  return (
    <div>
      <p>Current value: {count}</p>
      <button onClick={decrement}>➖</button>
      <button onClick={increment}>➕</button>
    </div>
  );
}

export default Counter;
