
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
const Menu = () => {
  return (
    <nav className="text-white font-bold text-2xl h-full flex items-center justify-center w-full backdrop-blur-md">
      <ul className="grid gap-y-6 flex text-center">
        <Link className="text-white" to="/Quiz" >HOME</Link>
        <li>PROJECTS</li>
        <Link className="text-white" to="/About" >ABOUT</Link>
        <li>RESUME</li>
      </ul>
    </nav>
  );
}


export default Menu;