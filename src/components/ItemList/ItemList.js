import { memo } from "react";
import Item from "../Item/Item";

//Item list mapea, memo me memoriza los estados y las props
const ItemList = memo(({ products }) => {
  return (
    <div>
      {products.map(({ id, img, name, price, category }) => (
        <Item
          key={id}
          id={id}
          img={img}
          name={name}
          price={price}
          category={category}
        />
      ))}
    </div>
  );
});

export default ItemList;
