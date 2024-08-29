import React from 'react'
import './ExpMenu.css'
import { menu_list }from '../../assets/assets'

const ExpMenu = ({category,setCategory}) => {
  return (
    <div className='exp-menu' id='exp-menu'>
        <h1>Explore our menu</h1>
        <p className='exp-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a
        time.</p>
        <div className="exp-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="exp-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExpMenu