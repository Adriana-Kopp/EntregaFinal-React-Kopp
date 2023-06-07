import { useEffect, useInsertionEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

//Item list container lo que hace es recibir la Api, guardarla en un estado y pasarla a Item list quien lo mapea
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();

  //aca tengo que reemplazar el nuevo filtrado
  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "products");

    if (!categoryId) {
      getDocs(queryCollection)
        .then((res) =>
          setProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    } else {
      const queryCollectionFiltered = query(
        queryCollection,
        where("category", "==", categoryId)
      );

      getDocs(queryCollectionFiltered)
        .then((res) =>
          setProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        )
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [categoryId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1>{greeting}</h1>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
