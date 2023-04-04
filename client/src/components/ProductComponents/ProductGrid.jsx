import React from "react";
import { Link } from "react-router-dom";
import GrayButton from "../GenericComponents/GrayButton";
import ProductFilters from "./ProductFilters";

const ProductGrid = ({ allProducts, loaded, page, setPage, totalPages }) => {
  const pageLinks = () => {
    const links = []
    let i = 1
    while (i <= totalPages) {
      const pageNumber = i;
      links.push(
        pageNumber === page ?
          <div className="border-2 bg-slate-300 border-slate-400 shadow-xl w-7 h-7 flex justify-center items-center">
            <p className="text-xl underline text-slate-500 cursor-pointer" key={i} onClick={() => setPage(pageNumber)}>{i}</p>
          </div>
          :
          <div className="border-2 bg-slate-100 border-slate-400 shadow-xl w-7 h-7 flex justify-center items-center">
            <p className="text-xl text-blue-700 cursor-pointer" key={i} onClick={() => setPage(pageNumber)}>{i}</p>
          </div>
      )
      i++
    }
    return links
  }
  return (
    // Body
    <div className="bg-gradient-to-r from-gray-100 via-stone-300 to-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-11 grid-rows-3 gap-10 p-4 ">
        <ProductFilters />
        {/* ------------Loop through all products-------------- */}
        {loaded ? allProducts.map((product, key) =>
          <div className="bg-white flex flex-col justify-between items-center rounded shadow-2xl p-4 lg:col-span-3" key={key}>
            <div className="w-full relative pb-[56.25%]">
              <img className="w-full h-full absolute object-cover" src={`https://dszcnrj3s1kgi.cloudfront.net/${product.image.key}`} alt={product.name} />
            </div>
            <p className="text-center my-4">{product.brand} {product.name}</p>
            <p className="text-center my-4">{Number(product.price.$numberDecimal).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            <form className="w-full" action={`/products/${product._id}`}>
              <GrayButton buttonText="View" />
            </form>
          </div>
        ) : null}
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-end gap-1 w-full pr-4">
        {loaded ? pageLinks() : null}
      </div>
    </div>
  );
};

export default ProductGrid;
