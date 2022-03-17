import React, { useState, useMemo } from 'react'


export default function memo() {
  const [count, setCount] = useState(0)
  const [randNumbers, updateRandNumbers] = useState([])
  const someLargeNumber = useMemo(() => hardOne(9), [count])

  function decrement() {
    setCount(count - 1)
  }

  function addRandNumber() {
    let newNumber = Math.floor(Math.random() * 100000)
    updateRandNumbers([...randNumbers, newNumber])
  }

  function deleteAllNumbers() {
    updateRandNumbers([])
  }

  function hardOne(N) {
    let i = 1
    console.log('calculating...')
    for (i; i < 1000000000; i++) {
      N++
    }
    console.log('result: ' + N)
    return N
  }

  return (
    <>
      <h2>
        numbers added: {randNumbers.length}
      </h2>
      <h2>
        count: {count}
      </h2>
      <button onClick={addRandNumber}>
        (+) add random number
      </button>
      {' '}
      <button onClick={decrement}>
        (-) decrement count
      </button>
      {' '}
      <button onClick={deleteAllNumbers}>
        (X) delete all random numbers
      </button>
      {
        randNumbers.map(number => <p key={Math.random() * 100000}>{number}</p>)
      }
    </>
  )
}
