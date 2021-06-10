import React, {useEffect, useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(2);

  // useEffect(() => )

  return (
    <div>
      <p>
        Add by one each click <strong>APP-1</strong>
      </p>
      <p>Your click count: {count} </p>
      <button onClick={() => {
        const newCount = count +1;
        setCount(newCount);
        (global as any).EventBus.emmit('setMultiplier', newCount)
      }}>Click me</button>
    </div>
  );
};

export default Counter;
