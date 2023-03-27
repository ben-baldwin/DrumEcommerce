import React from 'react'
import CompanyLogo from '../GenericComponents/CompanyLogo'

const CheckoutNav = (props) => {
    return (
        <div className='w-full flex justify-center items-center py-2 px-8 2xl:px-72 text-white bg-gradient-to-r from-slate-700 via-slate-800 to bg-slate-900 font-body flex-wrap'>

            {/*----------- Company Logo ------------ */}
            <CompanyLogo linkRoute='/'/>
        </div>
    )
}

export default CheckoutNav