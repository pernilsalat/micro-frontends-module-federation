import React, {useEffect, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);
  const [multiplier, setMultiplier] = useState(2);

  // @ts-ignore
  useEffect(() => (global as any).EventBus.subscribe('setMultiplier', setMultiplier), [])

  return (
    <div>
      <p>
        Multiply by the click count in <strong>APP-1</strong>
      </p>
      <p>Your click count: {count}</p>
      <button onClick={() => setCount((prevState) => prevState * multiplier)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
