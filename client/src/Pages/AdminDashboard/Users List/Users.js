import React, { useEffect } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import UsersRow from '../../../Components/UsersRow';
import { getUsers } from '../../../JS/Action/user';
import SideBar from '../SideBar'
import "../AdminDashboard.css";

const Users = () => {
  
    const load = useSelector((state) => state.userReducer.loadUser);
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.userReducer.users);

 useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);
    
  return (
    <div style={{ backgroundColor: "#4950578a" }}>

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="css/style.css" />
      <div className="wrapper d-flex align-items-stretch">

    <SideBar active="1"/>
    <div id="content" className="p-4 p-md-5 pt-5">
          <h2>Users List</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Created at </th>
                <th>Last Updated </th>
              </tr>
            </thead>
            <tbody>
          
            {load ? (
              <Spinner animation="border" variant="secondary" />
            ) : (
                listUsers.map((el) => <UsersRow user ={el} />)
            )}
         
           
            </tbody>
          </Table>
        </div>
        </div>
        </div>
       
      
  )
}

export default Users