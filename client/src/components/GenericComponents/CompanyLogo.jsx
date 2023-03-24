import React from 'react'
import { FaDrum } from 'react-icons/fa'

const CompanyLogo = ({linkRoute}) => {
  return (
    <a href={linkRoute} className='text-2xl font-bold px-2 min-w-max hover:text-slate-400' > Percussion <FaDrum className='mb-1' style={{display:"inline-block"}} /> Pro</a>
  )
}

export default CompanyLogo