import { useState } from "react";

interface CounterMethods {
  increment: () => void;
  decrement: () => void;
}

interface CounterState {
  count: number;
}

interface UseCountResult extends CounterMethods, CounterState { }

const useCount = (): UseCountResult => {
  const [count, setCount] = useState<number>(1);

  const increment = (): void => {
    setCount(prev => prev + 1);
    console.log(count);
  };

  const decrement = (): void => {
    setCount(prev => (prev <= 0 ? 0 : prev - 1));
    console.log(count)
  };

  return {
    increment,
    decrement,
    count,
  };
};

export { useCount };
