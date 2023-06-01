import { useInsertionEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

//Item list container lo que hace es recibir la Api, guardarla en un estado y pasarla a Item list quien lo mapea
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();

  useInsertionEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((Response) => {
        setProducts(Response);
      })
      .catch((Error) => {
        console.Error(Error);
      })
      .finally(() => setIsLoading(false));
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
