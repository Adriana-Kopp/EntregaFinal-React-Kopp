import { memo } from "react";
import Item from "../Item/Item";

//Item list mapea, memo me memoriza los estados y las props
const ItemList = memo(({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
});

export default ItemList;
