import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button.components";
import {  useState } from "react";

//las propiedades de interface se pasan como parámetro a la función


export const Header: React.FC  = ({}) => {
  //ir a un área específica de la página
  const navigate = useNavigate();

  // ************************************
  const handleArea = (id: string) => {
    navigate("/");

    const areaDestino = document.getElementById(id);

    if (areaDestino) {
      areaDestino.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  // ************************************
  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <header>
      <nav className="bg-gradient-to-r from-red-800 h-20 font-joseline text-white flex flex-row justify-between items-center">
        <div className="font-uncial text-2xl md:text-3xl md:hidden">
          <Button text="AlexRojas" onClick={() => navigate("/")} />
        </div>
        <ul
          className={`${
            hidden ? "block" : "hidden"
          } w-screen py-5 absolute top-20 z-10 text-2xl bg-slate-800/90 font-rubik text-center rounded md:top-0 md:bg-inherit md:flex md:justify-center md:text-base md:items-center`}
        >
          <li>
            <div id="logo" className="font-uncial text-2xl md:text-3xl hidden md:block">
              <Button text="AlexRojas" onClick={() => navigate("/")} />
            </div>
          </li>
          <li>
            <Button text="SOBRE MI" onClick={() => handleArea("sobreMi")} />
          </li>
          <li>
            <Button text="PROYECTOS" onClick={() => handleArea("proyectos")} />
          </li>
          <li>
            <Button text="CONTACTO" onClick={() => navigate("/contact")} />
          </li>
          <li className="mt-5 md:mt-0">
            <Button
              type="button"
              text="Acceso"
              onClick={() => navigate("/login")}
            />
            <Button
              type="button"
              text="Registro"
              onClick={() => navigate("/registro")}
            />
          </li>
        </ul>
        <div
          className="mx-5 flex items-center justify-end md:hidden"
          onClick={toggleHidden}
        >
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="40px"
            height="40px"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
