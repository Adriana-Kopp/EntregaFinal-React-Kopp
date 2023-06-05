const products = [
  {
    id: "1",
    name: "Vela de lavanda",
    price: 380,
    category: "Velas aromáticas",
    img: "../img/vela-lavanda.jpg",
    stock: 20,
    description:
      "Relajante, elimina la ansiedad y el estrés, ayuda a despejar las mentes cansadas. Muy utilizado a la hora de preparar exámenes.",
  },
  {
    id: "2",
    name: "Cuarzos",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/cristales.jpg",
    stock: 20,
    description:
      "Su poder nos permite deshacernos de la negatividad, se usa para combatir el estrés y el cansancio",
  },
  {
    id: "3",
    name: "Difusor automático 3000",
    price: 1600,
    category: "Difusores",
    img: "../img/difusor.jpg",
    stock: 20,
    description:
      "Es un sencillo y pequeño dispositivo, con la capacidad de difundir la fragancia elegida mediante la acción automática y programada del propio aerosol.",
  },
  {
    id: "4",
    name: "Difusor automático",
    price: 1500,
    category: "Difusores",
    img: "../img/difusor-automatic.jpg",
    stock: 20,
    description:
      "Es un sencillo y pequeño dispositivo, con la capacidad de difundir la fragancia elegida mediante la acción automática y programada del propio aerosol.",
  },
  {
    id: "5",
    name: "Difusor de varillas de algodón",
    price: 380,
    category: "Difusores",
    img: "../img/difusor-3.jpg",
    stock: 20,
    description:
      "Aporta una sensación de pureza en el ambiente, consiguiendo así un efecto relajante y un espacio de lo más acogedor.",
  },
  {
    id: "6",
    name: "Difusor de varillas de coco",
    price: 380,
    category: "Difusores",
    img: "../img/difusor-4.jpg",
    stock: 20,
    description:
      "Es la forma perfecta de agregar un toque tropical y relajante a tu hogar u oficina. Crean un ambiente agradable y reconfortante. ",
  },
  {
    id: "7",
    name: "Vela de Manzanilla",
    price: 280,
    category: "Velas aromáticas",
    img: "../img/vela-manzanilla.jpg",
    stock: 20,
    description:
      "Posee efectos calmantes y terapéuticos, junto con su capacidad de apoyar y mejorar el sistema inmunológico.",
  },
  {
    id: "8",
    name: "Vela Citric",
    price: 280,
    category: "Velas aromáticas",
    img: "../img/vela-citric.jpg",
    stock: 20,
    description:
      "Perfuma tu hogar, convierte tu hogar un espacio de relax y una vez fundida podés utilizarla para realizar masajes.",
  },
  {
    id: "9",
    name: "Vela de Miel",
    price: 280,
    category: "Velas aromáticas",
    img: "../img/vela-honney.jpg",
    stock: 20,
    description:
      "Producto vinculado a la luz y la purez. Perfectas para crear un ambiente íntimo, tranquilo y lleno de espiritualidad. ",
  },
  {
    id: "10",
    name: "Amatista",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/amatista.jpg",
    stock: 20,
    description:
      "La amatista nos aporta serenidad emocional, sentido común, potencia la motivación y la memoria. ",
  },

  {
    id: "11",
    name: "Cristal",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/cristal.jpg",
    stock: 20,
    description:
      "Podemos programar los cristales y así amplificar, transferir pensamientos curativos, y activar los “centros energéticos” (chakras) del cuerpo.",
  },
  {
    id: "12",
    name: "Cuarzo Rosa",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/cuarzo-rosa.jpg",
    stock: 20,
    description:
      "Es utilizado para curar heridas emocionales, atraer nuevos amores, romances e intimidad, además de generar relaciones cercanas y profundas con la persona a quien se le regala.",
  },
  {
    id: "13",
    name: "Cuarzo Azul",
    price: 520,
    category: "Piedras Energéticas",
    img: "../img/cuarzo-azul.jpg",
    stock: 20,
    description:
      "Simboliza la concentración, la tranquilidad y la calma. Ideal para disminuir el estrés y llevar un mejor control de las emociones.",
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
