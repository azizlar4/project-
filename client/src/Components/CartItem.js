import React from 'react'

const CartItem = () => {
  return (
    <div className="row">
    <div className="col-xs-2 col-md-2">
      <img className="img-responsive" src="https://www.watchshopping.com/media/catalog/product/cache/cc52d4544dc2a22d8afd441e1323c25a/H/a/Hamilton-H70555533.jpg" alt="prewiew" />
    </div>
    <div className="col-xs-4 col-md-6">
      <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
    </div>
    <div className="col-xs-6 col-md-4 row">
      <div className="col-xs-6 col-md-6 text-right" style={{paddingTop: '5px'}}>
        <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
      </div>
      <div className="col-xs-4 col-md-4">
        <input type="text" className="form-control input-sm" defaultValue={1} />
      </div>
      <div className="col-xs-2 col-md-2">
        <button type="button" className="btn btn-outline-danger btn-xs">
          remove
        </button>
      </div>
    </div>
    <hr />
  </div>
  )
}

export default CartItem