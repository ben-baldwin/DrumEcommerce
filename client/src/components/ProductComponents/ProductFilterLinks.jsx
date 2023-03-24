import React from 'react'

const ProductFilterLinks = ({type, name, text, classes, selected}) => {
  return (
    <div className={`block my-2 border-white hover:bg-slate-100 border-2 hover:border-gray-100`}>
      <a href={`/products/${type}/${name}`} className={`${classes} ${selected(name)}`}>{text}</a>
    </div>
  )
}

export default ProductFilterLinks