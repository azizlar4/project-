import { display, style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../Functions/Stars";
import { addToCart } from "../JS/Action/cart";
import { getOneProduct } from "../JS/Action/product";
import '../productDetails.css'


const Product = () => {

  const [quantity, setquantity] = useState(1);
  const navigate =useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const isAuth=useSelector(state=>state.userReducer.isAuth);
  const isAdmin=useSelector(state=>state.userReducer.isAdmin);
  const user=useSelector(state=>state.userReducer.user);
  const product = useSelector((state) => state.productReducer.productToGet);

  
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [dispatch]);
  

  var quantityAvailable = Array.from(
    { length: product.quantity },
    (_, i) => i + 1
  );


  const AddToCartHandle = (e) => {
    e.preventDefault()
   
    isAuth?navigate(`/cart/${id}?qty=${quantity}`):navigate('/login')
    dispatch(addToCart(user._id,id))
    
  };
  
  return (
    <div >
      <link />
      {/*---- Include the above in your HEAD tag --------*/}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>eCommerce Product Detail</title>

      <div className="container">
        <div className="cardd">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={product.image_url} alt="product" />
                  </div>
                </div>
              </div>

              <div className="details col-md-6">
                <h3 className="product-title">{product.name}</h3>
                <div className="rating">
                  <div className="stars" style={{ marginBottom: "5px" }}>
                    {Rating(product.rating)}
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">{product.description}</p>
                <h4 className="price">
                  current price: <span>${product.price}</span>
                </h4>

                <h5 className="sizes">
                  quantity   
                  <select
                    id="product-variant-select-1"
                    className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white"
                  value={quantity} onChange={(e)=>setquantity(e.target.value)}>
                    {quantityAvailable.map((el) => (
                      <option value={el}>{el}</option>
                    ))}
                  </select>
                </h5>

                <div className="action">
                {isAdmin?null:<button
                    className="add-to-cart"
                    type="button"
                    onClick={AddToCartHandle}
                  >
                    add to cart
                  </button>}
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
