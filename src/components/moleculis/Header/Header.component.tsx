import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button.components";

//las propiedades de interface se pasan como parámetro a la función
export const Header: React.FC = ({}) => {
  //ir a un área específica de la página
  const navigate = useNavigate();

  const handleArea = (id: string) => {
    
    navigate('/')
    
    const areaDestino = document.getElementById(id);
      
    if (areaDestino) { 

      areaDestino.scrollIntoView({ behavior: "smooth" });
    }

    
  };

  return (
    <header>
      <nav className="bg-gradient-to-r from-red-800 w-full h-16 px-24 font-joseline 
        flex flex-row justify-between items-center text-white x1:flex-col">
          <div className="font-uncial text-2xl">
            <Button text="AlexRojas" onClick={() => navigate("/")} />
          </div>
          <div className="">
            <ul className="flex items-center gap-[3vw]">
              <li>
                <Button text="SOBRE MI" onClick={() => handleArea("sobreMi")} />
              </li>
              <li>
                <Button text="PROYECTOS" onClick={() => handleArea("proyectos")} />
              </li>
              <Button text="CONTACTO" onClick={() => navigate("/contact")} />
            </ul>
          </div>
          <div className="">
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
          </div>
      </nav>
    </header>
  );
};

export default Header;
