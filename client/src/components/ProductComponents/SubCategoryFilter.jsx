import React, { useEffect } from 'react'

const SubCategoryFilter = ({ changeHandler, productInfo }) => {


    if (productInfo.mainCategory === "drums") {
        return (
            <select onChange={changeHandler} name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                <option value="acoustic">Acoustic</option>
                <option value="electric">Electric</option>
                <option value="snares">Snares</option>
            </select>
        )
    }
    if (productInfo.mainCategory === "cymbals") {
        return (
            <select onChange={changeHandler} name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                <option value="crashCymbals">Crash Cymbals</option>
                <option value="rideCymbals">Ride Cymbals</option>
                <option value="hiHats">Hi-Hats</option>
                <option value="splashCymbals">Splash Cymbals</option>
            </select>
        )
    }
    if (productInfo.mainCategory === "accessories") {
        return (
            <select onChange={changeHandler} name="subCategory" value={productInfo.subCategory} className=' w-full p-3 border' >
                <option value="pedals">Pedals</option>
                <option value="thrones">Thrones</option>
                <option value="drumSticks">Drum Sticks</option>
            </select>
        )
    }
}

export default SubCategoryFilter
