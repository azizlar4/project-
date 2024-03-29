import React  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// create [1,2,3,4,5] once
const starArray = [1,2,3,4,5];

const Rating = ( rating ) =>
  starArray.map(i => ( // use many times
    <FontAwesomeIcon
      key={i}
      icon={faStar}
      color={rating >= i ? "#ff9f1a" : "lightgrey"}
    />
  ));

export default Rating;