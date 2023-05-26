import { useInsertionEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { itemId } = useParams();

  useInsertionEffect(() => {
    getProductById(itemId)
      .then((Response) => {
        setProduct(Response);
      })
      .catch((Error) => {
        console.error(Error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>{isLoading ? <h2>Cargando...</h2> : <ItemDetail {...product} />}</div>
  );
};

export default ItemDetailContainer;
