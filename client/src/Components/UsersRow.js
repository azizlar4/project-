import React from 'react'
import moment from 'moment';

const UsersRow = ({user}) => {
  return (

    <tr>
    <td>{user._id}</td>
    <td>{user.name}</td>
    <td>{user.last_name}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td> {moment(user.createdAt).format('lll')  }</td>
    <td> {moment(user.updatedAt).format('lll')  }</td>
   
  
    
  </tr>
  )
}

export default UsersRow
