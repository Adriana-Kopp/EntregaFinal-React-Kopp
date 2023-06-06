import { useEffect, useInsertionEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, "products", itemId);

    getDoc(queryDoc)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  //traemos todos los productos
  // useEffect(() => {
  // const dbFirestore = getFirestore();
  // const queryCollection = collection(dbFirestore, "products");

  // getDocs(queryCollection)
  //   .then((res) =>
  //    setProducts(
  //     res.docs.map((product) => ({ id: product.id, ...product.data() }))
  //   )
  //  )
  // .catch((err) => console.log(err))
  // .finally(() => setIsLoading(false));
  //}, []);

  return <div>{isLoading ? <Loading /> : <ItemDetail {...product} />}</div>;
};

export default ItemDetailContainer;
