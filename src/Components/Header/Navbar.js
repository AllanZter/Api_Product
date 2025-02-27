import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mercado">Mercado Livre</Link></li>
        <li><Link to="/outra">Outra Página</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
