import React from 'react'
import axios from 'axios'
import CompanyLogo from '../GenericComponents/CompanyLogo'
import { useNavigate } from 'react-router-dom'


const AdminNavBar = () => {
  const navigate = useNavigate()

  const logout = () => {
    axios.post('http://localhost:8000/api/admin/logout', {}, {
      withCredentials: true,
    })
      .then(res => {
        console.log(res)
        navigate('/admin')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className=' w-full text-white bg-gradient-to-r from-slate-700 via-slate-800 to bg-slate-900'>
      <div className=' mx-auto max-w-screen-xl w-full flex justify-center sm:justify-between items-center py-2 px-4  text-white font-body flex-wrap'>

        {/*----------- Company Logo ------------ */}
        <CompanyLogo linkRoute='/dashboard/orders' />

        {/* ------------- Links ----------------- */}

        <ul className='flex items-center gap-4 '>

          {/* -------------- Orders Link --------------- */}

          <li className='py-4 text-white hover:text-slate-400'>
            <a href="/dashboard/orders">Orders</a>
          </li>

          {/* ----------- Products Link -------------- */}

          <li className='py-4 text-white hover:text-slate-400'>
            <a href="/dashboard/products">Products</a>
          </li>

          {/* ------------- Logout Link ------------- */}

          <li className='py-4 text-white hover:text-slate-400'>
            <p className='cursor-pointer' onClick={logout}>Logout</p>
          </li>

        </ul>
      </div>
    </div >
  )
}

export default AdminNavBar