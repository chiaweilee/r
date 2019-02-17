import React, { useState, useEffect } from 'react';


function todosReducer (state, action) {
  switch (action.type) {
  case 'add':
    return action.text.concat(state);
  default:
    return state;
  }
}

function useReducer (reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch (action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

function hooks (props) {
  const [count, setCount] = useState(0);
  const [size, dispatch] = useReducer(todosReducer, 'xl');
  const [arr, setArr] = useState([count]);

  useEffect(() => {
    document.title = `You clicked ${count} times, ${arr}`;
    return function () {
      document.title = `done`;
    };
  }, [count, props.id]);

  function countAdd () {
    setCount(count + 1);
  }

  return (
    <div>
      <div>
        {count}
        <button onClick={countAdd}>+1</button>
      </div>
      <div>
        {arr}
        <button onClick={() => {
          arr.unshift(count);
          setArr(arr.slice(0));
        }}>+1</button>
      </div>
      <div>
        {size}
        <button onClick={() => {dispatch({ type: 'add', text: 'x' });}}>+size</button>
      </div>
    </div>
  );
}

export default hooks;
