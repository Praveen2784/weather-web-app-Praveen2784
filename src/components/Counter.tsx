import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Counter</h2>
      
      <div className="flex justify-center mb-8">
        <div className="text-6xl font-bold text-indigo-600">{count}</div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <button 
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
        >
          Decrease (-1)
        </button>
        
        <button 
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        >
          Reset
        </button>
        
        <button 
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
        >
          Increase (+1)
        </button>
      </div>
    </div>
  );
};

export default Counter;