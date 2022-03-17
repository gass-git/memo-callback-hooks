import React, { useState, useMemo, useEffect, useCallback } from 'react'
import MemoizedComp from './memoizedComp'

export default function CallBackHookExampleComp() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount((c) => c + 1)
  }

  /**
   * useCallback will check if todos has changed,
   * if so, it will call the addTodo function.
   */
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"])
  }, [todos])

  return (
    <>
      {/*
        the useCallBack hook will prevent the following 
        memoized component to re render when the parent
        component renders. 
      */}
      <MemoizedComp todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}
