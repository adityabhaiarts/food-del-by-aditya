import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Explore our menu means whether you're in the mood for something spicy, sweet, or savory, our carefully curated selection promises to satisfy every craving. Start your food journey now!</p>
        <div className='explore-menu-list'>
            {menu_list.map((items, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===items.menu_name?"All":items.menu_name)} key={index} className='explore-menu-list-items'>
                        <img className={category===items.menu_name?"active":""} src={items.menu_image} alt=""/>
                        <p>{items.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
