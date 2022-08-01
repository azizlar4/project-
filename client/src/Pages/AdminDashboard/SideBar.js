import React from 'react'

const SideBar = ({active}) => {
  return (
    <nav id="sidebar">
    <ul className="list-unstyled components mb-5">
     
      <li className={active==="1"?"active":""}>
        <a href="/dashboard/users">
          <span className="fa fa-user mr-3" /> Users List
        </a>
      </li>
      <li  className={active==="2"?"active":""}>
        <a href="/dashboard/orders">
          <span className="fa fa-shopping-cart mr-3" /> Orders
        </a>
      </li>
      <li >
        <a href="/">
          <span className="fa fa-shopping-basket mr-3" /> Products
        </a>
      </li>
     
      
    </ul>
  </nav>
  )
}

export default SideBar