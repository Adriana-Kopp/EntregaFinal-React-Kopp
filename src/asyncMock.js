const products = [
  {
    id: "1",
    name: "Vela de lavanda",
    price: 380,
    category: "Velas aromáticas",
    img: "../public/img/vela-lavanda.jpg",
    stock: 20,
    description: "Descripción de velas de lavanda",
  },
  {
    id: "2",
    name: "Vela de manzanilla",
    prince: 380,
    category: "Velas aromáticas",
    img: "../public/img/vela-manzanilla.jpg",
    stock: 20,
    description: "Descripción de velas de limón",
  },
  {
    id: "3",
    name: "Vela de rosa",
    prince: 380,
    category: "Velas aromáticas",
    img: "../public/img/vela-rosas.jpg",
    stock: 20,
    description: "Descripción de velas de rosas",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
