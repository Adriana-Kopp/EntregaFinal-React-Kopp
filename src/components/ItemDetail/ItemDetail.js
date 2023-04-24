import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>{category}</p>
        <p>{description}</p>
        <p>{price}</p>
      </section>
      <footer>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
