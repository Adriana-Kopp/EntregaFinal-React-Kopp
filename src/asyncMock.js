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
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/cristales.jpg",
    stock: 20,
    description: "Descripción de velas de limón",
  },
  {
    id: "3",
    name: "Difusor automático 3000",
    price: 1600,
    category: "Difusores",
    img: "../img/difusor.jpg",
    stock: 20,
    description: "Descripción de velas de rosas",
  },
  {
    id: "4",
    name: "Difusor automático",
    price: 1500,
    category: "Difusores",
    img: "../img/difusor-automatic.jpg",
    stock: 20,
    description: "Descripción de velas de rosas",
  },
  {
    id: "5",
    name: "Difusor de varillas de algodón",
    price: 380,
    category: "Difusores",
    img: "../img/difusor-3.jpg",
    stock: 20,
    description: "Descripción de difusor de varillas de algodón",
  },
  {
    id: "6",
    name: "Difusor de varillas de coco",
    price: 380,
    category: "Difusores",
    img: "../img/difusor-4.jpg",
    stock: 20,
    description: "Descripción de difusor de varillas de coco",
  },
  {
    id: "7",
    name: "Vela de Manzanilla",
    price: 280,
    category: "Velas aromáticas",
    img: "../img/vela-manzanilla.jpg",
    stock: 20,
    description: "Descripción de velas de manzanilla",
  },
  {
    id: "8",
    name: "Vela Citric",
    price: 280,
    category: "Velas aromáticas",
    img: "../img/vela-citric.jpg",
    stock: 20,
    description: "Descripción de velas de citric",
  },
  {
    id: "9",
    name: "Vela de Miel",
    price: 280,
    category: "Velas aromáticas",
    img: "../img/vela-honney.jpg",
    stock: 20,
    description: "Descripción de velas de miel",
  },
  {
    id: "10",
    name: "Amatista",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/amatista.jpg",
    stock: 20,
    description: "Descripción de velas de limón",
  },

  {
    id: "11",
    name: "Cristal",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/cristal.jpg",
    stock: 20,
    description: "Descripción de cristal",
  },
  {
    id: "12",
    name: "Cuarzo Rosa",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/cuarzo-rosa.jpg",
    stock: 20,
    description: "Descripción de cuarzo rosa",
  },
  {
    id: "13",
    name: "Cuarzo Azul",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/cuarzo-azul.jpg",
    stock: 20,
    description: "Descripción de cuarzo azul",
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
