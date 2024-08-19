import React, { useContext } from 'react'
import "./Cart.css";
import { StoreContext } from '../../Context/StoreContext';
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Titles</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}><button style={{ backgroundColor: "#EE3102 ", color: "white", width: "2.5rem", height: "2.5rem", border: "none" }}>X</button></p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="card-total">
          <h2>Cart Total</h2>
          <div>
            <div className="card-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button style={{
            border: 'none',
            color: 'white',
            backgroundColor: '#EE3102',
            width: 'max(15vw, 200px)',
            padding: '12px 0px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>PROCEED  </button>

        </div>
        <div className="card-promocode">
          <div>
            <p>If you have promo code Enter it here.</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promocode' />
              <button >submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart
