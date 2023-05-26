import Item from "../Item/Item";

//Item list mapea
const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
