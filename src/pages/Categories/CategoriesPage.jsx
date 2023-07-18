import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";



const CategoriesPage = () => {
  const { type } = useParams();
  const [product, setProductType] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "productos"),
        where("type", "==", type)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductType(docs);
    };
    getProducts();
  }, [type]);

  return (
    <div className="categories-container">
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

export default CategoriesPage