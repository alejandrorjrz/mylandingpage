import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button.components";

//las propiedades de interface se pasan como parámetro a la función
export const Header: React.FC = ({}) => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="bg-gradient-to-r from-red-800 w-full h-16 px-24 font-joseline flex flex-row justify-between items-center text-white">
        <div className="font-uncial text-2xl">
          <Button text="AlexRojas" onClick={() => navigate("/")} />
        </div>
        <Button text="SOBRE MI" />
        <Button text="PROYECTOS" />
        <Button text="CONTACTO" onClick={() => navigate("/contact")}/>
        <div className="">
          <Button type="button" text="Acceso" onClick={() => navigate("/login")} />
          <Button type="button" text="Registro" onClick={() => navigate("/registro")} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
