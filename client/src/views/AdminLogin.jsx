import React, { useState } from 'react'
import axios from 'axios'
import CheckoutNav from '../components/CheckoutComponents/CheckoutNav'
import RedButton from '../components/GenericComponents/Button'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => 
    setLoginInfo((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value
    }))

    const submitHandler = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post('http://localhost:8000/admin/login', loginInfo, {
          withCredentials: true,
        })
        navigate("/dashboard/orders")
      } catch (err) {
        console.log(err)
      }
    }

  return (
    <div>
      <CheckoutNav />
      <div className='mx-auto bg-gradient-to-br from-slate-50 to-stone-300 h-screen'>
        <form onSubmit={submitHandler} className='max-w-screen-md mx-auto bg-white p-10 '>
          <h3 className='text-2xl my-4 uppercase'>Admin Login</h3>
          {/*---------- Email ---------- */}
          <div className='mb-6'>
            <p className='text-md font-semibold mb-2 uppercase'>Email</p>
            <input onChange={handleChange} type="email" name="email" className=' w-full p-3 border' />
          </div>
          {/*---------- Password ---------- */}
          <div className=' mb-6'>
            <p className='text-md font-semibold mb-2 uppercase focus:bg-slate-50'>Password</p>
            <input onChange={handleChange} type="password" name="password" className=' w-full p-3 border' />
          </div>
          <RedButton buttonText="Login" />  
        </form>
      </div>
    </div>
  )
}

export default AdminLogin