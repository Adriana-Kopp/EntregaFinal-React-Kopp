import { useInsertionEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useInsertionEffect(() => {
    getProductById(itemId)
      .then((Response) => {
        setProduct(Response);
      })
      .catch((Error) => {
        console.error(Error);
      });
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
