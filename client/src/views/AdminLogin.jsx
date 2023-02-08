import React, { useState } from 'react'
import CheckoutNav from '../components/CheckoutComponents/CheckoutNav'
import RedButton from '../components/RedButton'

function AdminLogin() {

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })

  const formChangeHandler = (e) => {
    setLoginInfo({
        ...loginInfo,
        [e.target.name]: e.target.value
    })
    console.log(loginInfo)
}

  return (
    <div>
      <CheckoutNav />
      <div className='mx-auto bg-gradient-to-br from-slate-50 to-stone-300 h-screen'>
        <form className='max-w-screen-md mx-auto bg-white p-10 ' action="/admins/dashboard">
          <h3 className='text-2xl my-4 uppercase'>Admin Login</h3>
          {/*---------- Email ---------- */}
          <div className='mb-6'>
            <p className='text-md font-semibold mb-2 uppercase'>Email</p>
            <input onChange={(e) => { formChangeHandler(e) }} type="email" name="email" className=' w-full p-3 border' />
          </div>
          {/*---------- Password ---------- */}
          <div className=' mb-6'>
            <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Password</p>
            <input onChange={(e) => { formChangeHandler(e) }} type="text" name="password" className=' w-full p-3 border' />
          </div>
          <RedButton buttonText="Login" />  
        </form>
      </div>
    </div>
  )
}

export default AdminLogin