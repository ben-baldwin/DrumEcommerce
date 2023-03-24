import React, { useState, useEffect } from 'react'
import ItemCard from '../ProductComponents/ItemCard'
import RedButton from '../GenericComponents/Button'


const OrderSummary = ({ cart }) => {
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        let cartTotal = 0;
        for (let product of cart) {
            cartTotal += product['quantity'] * product['price'];
        }
        setSubTotal(cartTotal);
    }, [cart]);

    return (
        <form action="/checkout" className='bg-white rounded shadow flex flex-col row-span-2 p-4'>

            {/* ----------- Order Summary --------------- */}
            <h2 className='text-2xl my-4' >Order Summary</h2>


            {/* ----------- Subtotal -------------- */}
            <div className='flex justify-between'>
                <p className='text-lg my-4'>Subtotal</p>
                <p className='text-lg my-4' >{Number(subTotal).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>
          
            {/* ----------- Shipping -------------- */}
            <div className='flex justify-between'>
                <p className='text-lg my-4'>Shipping</p>
                <p className='text-lg my-4' >{
                    subTotal > 2000 ?
                        "FREE!"
                        : Number(subTotal * 0.013).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                }</p>
            </div>

            {/* ----------- Tax -------------- */}
            <div className='flex justify-between'>
                <p className='text-lg my-4'>Estimated Tax</p>
                <p className='text-lg my-4' >{Number(subTotal * .08).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>

            {/* ----------- Total -------------- */}
            <div className='flex justify-between'>
                <p className='text-lg my-4 font-bold'>Total</p>
                <p className='text-lg my-4 font-bold' >{Number(subTotal * 1.08).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>
            <RedButton buttonText="Checkout" />

        </form>

    )
}

export default OrderSummary