import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  useEffect(()=>{
setFilterProducts(products)
  },[])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters</p>
        <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : " "}`} src={assets.dropdown_icon} alt="" />
        {/* category filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap -2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} />Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'women'} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'kids'} />Kids
            </p>
          </div>
        </div>
        {/* Subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap -2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'topwear'} />top wear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'bottomwear'} />Bottom Wear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'winterwear'} />Winter Wear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'}></Title>
          {/* sort  */}
          <select className='border border-gray-300 text-sm px-2' name="" id="">
            <option value="Relevant">Sort by relevance</option>
            <option value="low-high">Sort by low to high</option>
            <option value="high-low">sort by high to low</option>
          </select>
        </div>
        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{
  filterProducts.map((item,index)=>(
    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}></ProductItem>
  ))
}
        </div>
      </div>
    </div>
  )
}

export default Collection
