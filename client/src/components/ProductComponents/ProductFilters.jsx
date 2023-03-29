import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductFilterLinks from "./ProductFilterLinks";

const ProductFilters = () => {
  const { name } = useParams();
  console.log(useParams());

  const selected = (id) => {
    console.log(id);
    if (id === name) {
      return "border-b-2 border-stone-800";
    }
    return "bg-white";
  };
  const categories = [
    {
      name: "drums",
      text: "Drums",
      subcategory: [
        {
          name: "acoustic",
          text: "Acoustic",
        },
        {
          name: "electric",
          text: "Electric",
        },
        {
          name: "snares",
          text: "Snares",
        },
      ],
    },
    {
      name: "cymbals",
      text: "Cymbals",
      subcategory: [
        {
          name: "crashCymbals",
          text: "Crash Cymbals",
        },
        {
          name: "rideCymbals",
          text: "Ride Cymbals",
        },
        {
          name: "hiHats",
          text: "Hi-Hats",
        },
        {
          name: "splashCymbals",
          text: "Splash Cymbals",
        },
      ],
    },
    {
      name: "accessories",
      text: "Accessories",
      subcategory: [
        {
          name: "pedals",
          text: "Pedals",
        },
        {
          name: "thrones",
          text: "Thrones",
        },
        {
          name: "drumSticks",
          text: "Drum Sticks",
        },
      ],
    },
  ];

  return (
    <div className="bg-white rounded shadow-2xl row-span-full hidden md:block lg:col-span-2">
      <div>
        {categories.map((category) => (
          <React.Fragment>
            <ProductFilterLinks
              type="category"
              name={category.name}
              text={category.text}
              classes="text-2xl text-stone-800 ml-6 bg-transparent"
              selected={selected}
            />
            {category.subcategory.map((subcategory) => (
              <ProductFilterLinks
                type="subcategory"
                name={subcategory.name}
                text={subcategory.text}
                classes="text-xl text-stone-800 ml-10 bg-transparent"
                selected={selected}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
