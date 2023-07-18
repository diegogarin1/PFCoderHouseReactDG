import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, React, useContext } from 'react';
import { db } from "../../firebase/firebaseConfig";
import Swal from 'sweetalert2'
import { CartContext } from '../../context/CartContext';
import { collection, addDoc } from "firebase/firestore";

const initialState = {

  name: "",
  adress: "",
  country: "",

}

const CartPage = () => {

  const { cartItems, setCartItems } = useContext(CartContext);
  const emptyCart = () => {
    setCartItems([]);
    console.log(cartItems);
  };
  
  const [values, setValue] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(null);

  const cartFinal = cartItems
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValue({ ...values, [name]: value });
  };
  const totalPrice = cartFinal.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );
  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });

    console.log("purchase id", docRef.id);

    setPurchaseID(docRef.id);
    setValue(initialState);
  };

  return (
    <div>

      <h1 className='p-2'>Order</h1>
      <div className="container-fluid shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        {cartFinal.length > 0 ? (
          <div>
            <table class="table">
              <thead>
                <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
              </thead>
              <tbody>
              {cartFinal.map((item) => (
                
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
                

              ))}
              <tr>The total price is $ {totalPrice} </tr>
                </tbody>
              </table>
              <form onSubmit={onSubmit}>
        <div className="container-fluid shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div>

            <label for="name" className="form-label">Name:
              <input type="text" className="form-control fs-4" name="name" id="name"
                placeholder="Your name" value={values.name} onChange={handleOnChange}></input>
            </label>
          </div>
          <div>
            <label for="adress" className="form-label">Adress:
              <input type="text" className="form-control fs-4" name="adress" id="adress"
                placeholder="Your adress" value={values.adress} onChange={handleOnChange}></input>
            </label>
          </div>
          <div><label for="country" className="form-label">Country:</label>
            <select className="form-select fs-4" id="country" name="country"
            >
              <option selected>Select your country</option>
              <option onChange={handleOnChange} value={values.country}>Argentina</option>
              <option onChange={handleOnChange} value={values.country}>Chile</option>
              <option onChange={handleOnChange} value={values.country}>Uruguay</option>
              <option onChange={handleOnChange} value={values.country}>UE</option>
            </select>
          </div>

          <span className="py-3 d-flex justify-content-center">
            <input type="submit" class="shake btn mb-4 p-2 mt-4 border border-opacity-50"
              value="Finish purchase" id=""></input><span className="shake btn mb-4 p-2 mt-4 border border-opacity-50" onClick={emptyCart}>Empty Cart</span>
          </span>
        </div>

      </form >




      {
        purchaseID ? Swal.fire({
          title: 'Purchase done',
          text: `Your purchase ID is ${purchaseID}`,
          icon: 'success',
          confirmButtonText: 'Accept'
        })
          : null
      }
          </div>

        ) : (

          <p className=" p-3 mb-5 bg-body-tertiary rounded">Your cart is empty.</p>
        )}




      </div>
     



    </div >

  )
}

export default CartPage