import React, { useEffect, useState } from 'react'

import { useDispatch } from "react-redux";
import { clearErrors } from '../JS/Action/user';
import { Alert } from 'react-bootstrap';


const Notification = ({ error }) => {
    const [show, setshow] = useState(true);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
        setshow(false);
        dispatch(clearErrors());
        }, 3000);
    }, [show, dispatch]);
    return (
        <div >
       {show && 
            
           
            <Alert 
                position="bottom-right"
                variant='danger'
                
              
             
         
                
            >{error.msg}</Alert>
           
        }
        </div>
    )
}

export default Notification