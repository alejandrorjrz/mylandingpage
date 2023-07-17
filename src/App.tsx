import Header from "./components/moleculis/Header.component";
import laptop from "./assets/images/laptop.png";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate;

function App() {
  const options = [
    { link: "#", linkText: "HOME" },
    { link: "https://www.hoy.es/", linkText: "Hoy.es" },
    { link: "https://www.marca.com/", linkText: "Marca.com" },
    { link: "#", linkText: "CONTACTO" },
  ];

  
  return (
    <>
      <Header options={options} />
      <div className="grid grid-cols-2">
        <div>
          <img className="w-80" src={laptop} alt="pc" />
        </div>
        <div>
          <h1 className="font-montserrat text-8xl">AlejandroRojas</h1>
          <div>
            <p className="max-w-2xl font-montserrat text-2xl">
              Diseño y desarrollo soluciones web innovadoras para impulsar tu presencia en línea.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
