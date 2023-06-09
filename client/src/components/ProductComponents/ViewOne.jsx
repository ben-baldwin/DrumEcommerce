import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import RedButton from "../GenericComponents/Button";

const ViewOne = ({ cart, setCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1)
  const [productInfo, setProductInfo] = useState({
    name: "",
    brand: "",
    description: "",
    mainCategory: "",
    subCategory: "",
    price: 0.0,
    quantity: 0,
    quantitySold: 0,
    image: "",
    color: "",
    colorName: "",
    size: "xsm",
  });

  const addProduct = (e) => {
    e.preventDefault()
    // Check if the product already exists in the cart
    const productIndex = cart.findIndex(item => item.product_id === id)
    if (productIndex !== -1) {
      // If the product exists, update the quantity
      const updatedCart = [...cart]
      updatedCart[productIndex].quantity += quantity
      updatedCart[productIndex].total = updatedCart[productIndex].quantity * productInfo.price
      setCart(updatedCart)
    } else {
      // If the product does not exist, add it to the cart
      setCart(previousState => [
        ...previousState,
        {
          product_id: id,
          name: productInfo.name,
          price: productInfo.price,
          colorName: productInfo.colorName,
          size: productInfo.size,
          quantity: quantity,
          total: quantity * productInfo.price
        }
      ])
    }

    console.log(cart)
    navigate('/cart')
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/view/${id}`)
      .then(res => {
        let { product } = res.data
        setProductInfo((previousState) => ({
          ...previousState,
          name: product.name,
          brand: product.brand,
          description: product.description,
          mainCategory: product.mainCategory,
          subCategory: product.subCategory,
          price: product.price.$numberDecimal,
          quantity: product.quantity,
          quantitySold: product.quantitySold,
          color: product.color,
          colorName: product.colorName,
          size: product.size,
          image: product.image
        }));
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [id]);

  useEffect(() => {
    console.log(productInfo);
  }, [loaded])

  return (
    // Body
    <div className="bg-gradient-to-br from-slate-50 to-stone-300 p-2 min-h-screen ">
      {loaded ? (
        <div className="max-w-screen-xl mx-auto grid  sm:grid-cols-3 lg:grid-cols-4 rounded shadow ">
          {/* -------- Product Image -------- */}
          <div className="bg-white col-span-1 sm:col-span-2 lg:col-span-3 items-center py-2">
            <div className="w-full relative pb-[56.25%]">
              <img className="w-full h-full absolute object-scale-down" src={`https://dszcnrj3s1kgi.cloudfront.net/${productInfo.image.key}`} alt="drum" />
            </div>
          </div>
          {/* ------------- Summary --------------- */}
          <div className="bg-white flex flex-col  p-8">
            <p className="text-2xl text-gray-700 my-4">{productInfo.brand}</p>
            <h2 className="text-3xl text-gray-700 font-bold uppercase">{productInfo.name}</h2>
            <p className="text-2xl font-bold text-slate-700 my-4">${productInfo.price}</p>

            {/* Color Picker */}
            <form onSubmit={addProduct}>
              <div className="flex">
                <div>
                  <p className="font-semibold">Color:</p>
                  <div className="h-14 w-14 m-2 border-2 " style={{ backgroundColor: productInfo.color }}></div>
                </div>

                {/*  Size */}
                <div>
                  <p className="font-semibold">Size:</p>
                  <div className="flex">
                    <div className="h-14 w-14 m-2 border-2 flex justify-center items-center p-6">{productInfo.size}</div>
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <p className="font-semibold">Quantity:</p>
                  <div className="flex mb-4">
                    <input onChange={e => setQuantity(e.target.value)} type="number" value={quantity} className="font-semibold h-14 w-14 m-2 border-2 pl-4 py-6"></input>
                  </div>
                </div>
              </div>
              <RedButton buttonText="Add to Cart" />
            </form>
          </div>

          {/* ------------ Description -------------- */}
          <div className="bg-white col-span-1 sm:col-span-3 p-8 lg:col-span-4 ">
            <h2 className="text-3xl text-gray-700 font-semibold my-4 uppercase">{productInfo.name}</h2>
            <p className="text-xl text-gray-700 font-semibold mb-1">Description:</p>
            <ProductDescription description={productInfo.description} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ViewOne;
