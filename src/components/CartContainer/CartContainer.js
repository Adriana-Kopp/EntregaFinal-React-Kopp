import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/esm/CardImg";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";

export const CartContainer = () => {
  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cartList, emptyCart, totalPrice, deletProducts } = useCartContext();

  const generateOrder = (evt) => {
    evt.preventDefault();

    const order = {};
    order.buyer = dataForm;
    order.items = cartList.map(({ name, id, price, quantity }) => ({
      id,
      name,
      price,
      quantity,
    }));
    order.total = totalPrice();

    const dbFirestore = getFirestore();
    const ordersCollection = collection(dbFirestore, "orders");

    addDoc(ordersCollection, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          name: "",
          phone: "",
          email: "",
        });
        setTimeout(() => {
          emptyCart();
          setId("");
        }, 8000);
      });
  };

  const handleOnChange = (evt) => {
    console.log("nombre del input", evt.target.name);
    console.log("valor del input", evt.target.value);
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div>
      {id.length !== 0 && (
        <>
          {["Danger"].map((variant, idx) => (
            <Toast
              className="d-inline-block m-1"
              bg={variant.toLowerCase()}
              key={idx}
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Información Importante</strong>
              </Toast.Header>
              <Toast.Body className={variant === "Dark" && "text-white"}>
                El número de ID de la orden de la compra es: {id}
              </Toast.Body>
            </Toast>
          ))}
        </>
      )}

      {cartList.length != 0 ? (
        <>
          <div className="container col-md-4 p-5 justify-contend-center d-flex card-product">
            <div className="row">
              {cartList.map((prod) => (
                <Card style={{ width: "18rem" }}>
                  <div key={prod.id} className="row">
                    <Card.Header>Agregó a su carrito:</Card.Header>
                    <CardImg src={prod.img} />
                    <Card.Body>
                      <Card.Title>{prod.name}</Card.Title>
                      <Card.Subtitle mb="2" text="muted">
                        Precio: ${prod.price}
                      </Card.Subtitle>
                      <Card.Text>Cantidad: {prod.quantity}</Card.Text>
                      <Button
                        onClick={() => deletProducts(prod.id)}
                        className="btn btn-danger"
                      >
                        {" "}
                        Eliminar producto{" "}
                      </Button>
                    </Card.Body>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="row">
            <Button variant="outline-danger" onClick={emptyCart}>
              Limpiar carrito
            </Button>
            <Button variant="success">
              Total de la compra: ${totalPrice()}
            </Button>
          </div>
          <Carousel slide={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../img/carrusel1.png"
                alt="arte y mecha"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../img/carrusel2.png"
                alt="arte y mecha"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../img/carrusel3.png"
                alt="arte y mecha"
              />
            </Carousel.Item>
          </Carousel>
          <div></div>
          <div className="col-md-4">
            <Form onSubmit={generateOrder} p-5>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre"
                  onChange={handleOnChange}
                  value={dataForm.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Número de teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Ingrese su número de teléfono"
                  onChange={handleOnChange}
                  value={dataForm.phone}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingrese su email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Ingrese su email"
                  onChange={handleOnChange}
                  value={dataForm.email}
                />
              </Form.Group>
              <button className="btn btn-outline-danger">Generar orden</button>
            </Form>
          </div>
        </>
      ) : (
        <div>
          <>
            {["warning"].map((variant) => (
              <Alert key={variant} variant={variant}>
                El carrito de compras se encuentra vacio.{" "}
                <Link to={"/"}>
                  <Alert.Link href="/">Ver más productos</Alert.Link>
                </Link>
              </Alert>
            ))}
          </>
        </div>
      )}
    </div>
  );
};

//tengo que agregar un Imput mas para validad el mail
