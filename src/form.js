import React, { useState } from 'react'
import axios from 'axios'

export default function Form() {
  const initialObjState = {
    id: null,
    title: '',
    body: ''
  }
  const [data, updateData] = useState(initialObjState)

  function handleOnChange(event) {
    let inputValue = event.target.value
    updateData({ ...data, title: inputValue })
  }

  function handleSubmit(event) {
    event.preventDefault()
    let date = new Date()
    updateData({ ...data, id: date })

    // do an API post request
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error))

    // updateData to initial state
    updateData(initialObjState)
  }

  return <form onSubmit={handleSubmit}>
    <input type='input' onChange={handleOnChange} value={data.title} />
    <button type='submit' >submit data</button>
  </form>
}