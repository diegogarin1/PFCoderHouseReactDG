import React from 'react'
import {
    collection,
    query,
    where,
    getDocs,
    documentId,
  } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"
import { useEffect, useState } from "react";
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from "react-router-dom";



const DetailPage = () => {
    const { id } = useParams();
    const [product, setProductDetail] = useState([]);

    useEffect(() => {
      const getProduct = async () => {
        const q = query(collection(db, "productos"), where(documentId(), "==", id));
        const docs = [];
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProductDetail(docs);
      };
      getProduct();
    }, [id]);

    return (
        <div className="DetailContainer">
          {product.map((data) => {
            return (
              <div key={data.id}>
                <ItemDetailContainer data={data} />
              </div>
            );
          })}
        </div>
      );
    };

export default DetailPage






  