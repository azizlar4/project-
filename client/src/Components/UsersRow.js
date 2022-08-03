import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  clearEdit, clearErrors, updateProfileAdmin } from '../JS/Action/user';



const UsersRow = ({user}) => {
  const [User, setUser] = useState();
  const dispatch = useDispatch();
;
  const edit = useSelector((state) => state.userReducer.edit);


  const handleChnage = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const UpdateProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfileAdmin(user._id,User));

};
useEffect(() => {
  if(edit){
    dispatch(clearEdit());
      dispatch(clearErrors());
    window.location.reload();
    
  }


  setUser({ name: user.name, last_name: user.last_name,phone:user.phone,email:user.email });


}, [user,dispatch,edit])

  
  return (
<>


    <tr>
    <td>{user._id}</td>
    <td ><textarea onChange={handleChnage} name="name"   rows="2"  wrap="hard" style={{width:"95%", backgroundColor:'transparent',color:"white" }}>{user.name}</textarea></td>
    <td><textarea  onChange={handleChnage} name="last_name"   rows="2"  wrap="hard"   style={{width:"95%", backgroundColor:'transparent',color:"white" }}>{ user.last_name}</textarea></td>
    <td><textarea  onChange={handleChnage}  name="email"   rows="1" style={{ backgroundColor:'transparent',color:"white",fontSize:"15px" }}>{user.email}</textarea></td>
    <td><textarea   onChange={handleChnage}  name="phone"  style={{width:"95%", backgroundColor:'transparent',color:"white" }}>{user.phone}</textarea></td>
    <td> {moment(user.createdAt).format('lll')  }</td>
    <td> {moment(user.updatedAt).format('lll')  }</td>
    <td><Button variant='success' onClick={UpdateProfile}>Update</Button></td>
   
  </tr>

  </>
  )
}

export default UsersRow
