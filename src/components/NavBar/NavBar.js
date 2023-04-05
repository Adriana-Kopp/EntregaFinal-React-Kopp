import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3> Arte y Mecha </h3>
      <div>
        <button>Velas aromáticas</button>
        <button>Inciensos</button>
        <button>Difusores</button>
        <button>Piedras energéticas</button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
