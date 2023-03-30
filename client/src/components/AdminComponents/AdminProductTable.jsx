import React from 'react'
import GrayButton from '../GenericComponents/GrayButton'
import RedButton from '../GenericComponents/Button'
import { FaSearch } from 'react-icons/fa'
import axios from 'axios'

const AdminProductTable = ({ allProducts, removeFromDom, search, searchTerm, setSearchTerm, page, setPage, totalPages, loaded }) => {

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        removeFromDom(id)
      })
      .catch(err => console.error(err));
  };

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
  };

  const tableHeadings = ['Picture', 'Id', 'Name', 'Brand', 'Price', 'Category', 'Sub-Category', 'Action']

  const searchChange = (e) =>{
    setSearchTerm(e.target.value)
    // console.log(searchTerm);
    }

  return (
    <div className='bg-gradient-to-br from-slate-50 to-stone-300 h-screen p-4'>
      <div className='max-w-screen-xl mx-auto mb-4 '>

        <div className='flex items-center justify-between pb-4'>
          <form onSubmit={search} className='p-0'>
            <input type="search" name="search" value={searchTerm} placeholder="Search..." onChange={searchChange} className='p-2 border' />
            <button className='p-2'><FaSearch className='fa-7x' /></button>
          </form>
          <form action='/products/create' className='p-0 w-48'>
            <GrayButton buttonText="Add New Product" />
          </form>
        </div>

        
        <table className="min-w-full table table-fixed bg-white rounded shadow">
          <thead>
            <tr className='bg-slate-300'>
              {tableHeadings.map((headings) =>
                <th className='text-2xl font-normal py-4 px-5 uppercase text-left '>{headings}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {
              allProducts.map((product, i) => {
                return (
                  <tr className='border-b hover:bg-neutral-50' key={i}>
                    <td className='text-base py-4 px-5 w-10'>
                      <img src={product.image.location} alt={product.name} />
                    </td>
                    <td className='text-base py-4 px-5 underline text-blue-700 '>
                      <a href={'/products/show/' + product._id}>{product._id}
                      {product._id.substring(0,1) + '...'}
                      </a>
                    </td>
                    <td className='text-base py-4 px-5 w-32'>{product.name}</td>
                    <td className='text-base py-4 px-5 truncate '>{product.brand}</td>
                    <td className='text-base py-4 px-5'>{Number(product.price.$numberDecimal).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                    <td className='text-base py-4 px-5'>{product.mainCategory}</td>
                    <td className='text-base py-4 px-5'>{product.subCategory}</td>
                    {/* <td className='text-base py-4 px-5'>{product.quantity}</td>
                    <td className='text-base py-4 px-5'>{product.quantitySold}</td> */}
                    <td className='text-base h-full py-4 px-5 flex items-center gap-4'>
                      <form className='h-full' action={`/products/${product._id}/edit`}>
                        <GrayButton buttonText="Edit" />
                      </form>
                      <form className='h-full' onClick={(e) => { deleteProduct(product._id) }}>
                        <RedButton buttonText="Delete" />
                      </form>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-end gap-1 w-full"> 
        {loaded ? pageLinks() : null}
      </div>
    </div>
  )
}

export default AdminProductTable