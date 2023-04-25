const products = [
  {
    id: "1",
    name: "Vela de lavanda",
    price: 380,
    category: "Velas aromáticas",
    img: "../img/vela-lavanda.jpg",
    stock: 20,
    description: "Descripción de velas de lavanda",
  },
  {
    id: "2",
    name: "Cuarzos",
    prince: 25,
    category: "Piedras Energéticas",
    img: "../img/cristales.jpg",
    stock: 20,
    description: "Descripción de velas de limón",
  },
  {
    id: "3",
    name: "Difusor",
    prince: 280,
    category: "Difusores",
    img: "../img/difusor.jpg",
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

export const getProductByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
