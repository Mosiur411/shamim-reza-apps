import React, { useState } from 'react'

export default function AdMoney() {
  document.title = "AdMoney"
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handelSubmitValue = (event) => {
    event.preventDefault()

  }
  return (
    <>
      <div className="bg-gray-700 w-full h-[100vh] p-3 flex justify-center items-center ">
        <form onSubmit={handelSubmitValue} className="bg-white flex-1 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex justify-between items-center">
            <span>Source</span>
            <div className='flex gap-2 items-center'>
              <label for="main">Main</label>
              <input type="radio" id="main" name="type" value="main" onChange={handleChange} required />
            </div>
            <div className='flex gap-2 items-center'>
              <label for="Drive">Drive</label>
              <input type="radio" id="Drive" name="type" value="Drive" onChange={handleChange} required />
            </div>
            <div className='flex gap-2 items-center'>
              <label for="Bank">Bank</label>
              <input type="radio" id="Bank" name="type" value="Bank" onChange={handleChange} required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username"
              value={inputs.username || ""}
              type="text" placeholder="Username" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="Amount">
              Amount
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Amount" name="Amount" type="number" placeholder="Amount" onChange={handleChange} value={inputs.Amount || ""} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="note">
              Note
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="note" value={inputs.note || ""} name="note" type="text" placeholder="Note" onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" value={inputs.password || ""} name="password" type="password" placeholder="Password" onChange={handleChange} required />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline" type="submit" >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
