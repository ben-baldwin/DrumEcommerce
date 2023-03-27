import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavBar from "../components/AdminComponents/AdminNavBar";
import ProductForm from "../components/ProductComponents/ProductForm";

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [productInfo, setProductInfo] = useState({
    name: "",
    brand: "",
    description: "",
    mainCategory: "drums",
    subCategory: "",
    price: 0.0,
    quantity: 0,
    quantitySold: 0,
    image: "",
    color: "#000000",
    size: "One Size",
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/view/${id}`).then((res) => {
      const { product } = res.data;
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
        size: product.size,
      }));
      setLoaded(true);
    }).catch(err => console.error(err));
  }, [id]);

  const updateProduct = (e) => {
    e.preventdefualt();
    const formData = new FormData();
    for (let key in productInfo) {
      formData.append(key, productInfo[key]);
    }
    console.log(formData);
    axios
      .put(`http://localhost:8000/api/product/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        // Not critical right now.
        // Let's add some error checking here
        // What if res.data is null,
        // Waht if there is a validation error
        console.log(res.data);
        if (res.data.errors) {
          // set errors in state,
          // render in UI
        } else {
          navigate("/dashboard/products");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-stone-300 min-h-screen">
      <AdminNavBar />
      {loaded ? (
        <ProductForm
          title="Edit Existing Product"
          subTitle="Update product info"
          submitFunction={updateProduct}
          buttonText="Update Product"
          productInfo={productInfo}
          setProductInfo={setProductInfo}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductEdit;
