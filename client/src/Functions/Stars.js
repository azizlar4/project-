import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// create [1,2,3,4,5] once
const starArray = [1,2,3,4,5];

const Rating = ( rating ) =>
  starArray.map(i => ( // use many times
    <FontAwesomeIcon
      key={i}
      icon={faStar}
      color={rating >= i ? "red" : "lightgrey"}
    />
  ));

export default Rating;
