import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminNavBar from '../components/AdminNavBar'
import ProductForm from '../components/ProductForm'

const ProductCreateOne = () => {

  const navigate = useNavigate()

  const [productInfo, setProductInfo] = useState({
    name: "",
    brand: "",
    description: "",
    mainCategory: "",
    subCategory: "",
    price: 0.00,
    quantity: 0,
    image: "",
    color: "",
    size: "xsm"
})

  const createProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in productInfo) {
        formData.append(key, productInfo[key]);
    }
    axios.post("http://localhost:8000/api/product", formData, { headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {
            console.log(res.data)
            navigate('/dashboard/products')
        })
        .catch(err => {
            console.log(err)
        })
}

  return (
    <div className='bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen'>
        <AdminNavBar />
        <ProductForm title="Create New Product" subTitle="Enter product info" buttonText="Add Product" submitFunction={createProduct} productInfo={productInfo} setProductInfo={setProductInfo} />
    </div>
  )
}

export default ProductCreateOne