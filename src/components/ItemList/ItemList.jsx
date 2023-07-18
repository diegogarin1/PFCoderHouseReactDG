import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"
import { useEffect, useState } from "react";
import './ItemList.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = () => {
  const [productos, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(collection(db, "productos"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);
    };
    getProduct();
  }, []);


  return (
    <div className="ItemListContainer container-fluid shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      {productos.map((product) => {
        return (
          <div key={product.id}  >
            <Link to={`/detail/${product.id}`}>
              <ItemListContainer data={product} />
            </Link>
            
          </div>
        );
      })}
    </div>
  )
}

export default ItemList