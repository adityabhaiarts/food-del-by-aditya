import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order yo<span className="span">ur most </span>likely fo<span className="span">od here</span></h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes that cater to every craving. From savory starters and wholesome mains to indulgent desserts and refreshing beverages, our app offers something for every mood and moment.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
