import Header from "./components/moleculis/Header/Header.component";
import desarrollo from "./assets/images/desarrolloWeb.png";
import CardProject from "./components/moleculis/CardProject/CardProjects.component";
import bloques from "./assets/images/bloques.jpg";

import { useNavigate } from "react-router-dom";
import WeatherCard from "./components/layout/WeatherCard/WeatherCard.component";
import Paragraph from "./components/organism/Presetancion/Parrafo.component";
import Footer from "./components/moleculis/Footer/Footer.components";
import { useRef } from "react";


function App() {
  const navigate = useNavigate();
  const areaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-full w-screen bg-gradient-to-r from-slate-800 to-red-900">
      <Header />
      <div className="mx-36 flex justify-center">
        <div className="mt-1">
          <div className="w-full">
            <WeatherCard />
          </div>
          <img className="w-96 mt-44 opacity-50" src={desarrollo} alt="desarrollador web" />
        </div>
        <div className="mx-2 mt-32">
          <h1 className="font-uncial font-b text-right text-7xl text-white">Alejandro Rojas</h1>
          <div className="float-right">
            <p className="max-w-4xl mt-10 font-inconsolata text-right text-4xl text-white">Desarrollador Web</p>
            <div className="mt-36 m-0 w-full max-w-xl font-raleway text-2xl text-white text-right">
              <Paragraph/>
            </div>
          </div>
        </div>
      </div>

      <div ref={areaRef} id="sobreMi" className="mx-52 mt-44">
        <h1 className="font-Wallpoet  text-4xl text-white">Sobre mi</h1>
        <div className="my-10 font-raleway text-white text-xl">
          <p>Despúes muchos años dedicados al desarrollo de proyectos de arquitectura en 2022 decidí dar un giro 
            a mi vida y preparame de forma profesional para el desarrollo web . La informática y la tecnología han sido siempre unos 
            de mis pasatiempos favoritos y esto me inspira ahora a buscar retos mayores a los que enfrentarme.</p>
            <p className="mt-5">Soy una persona dedicada a la familia. La música también forma parte importante en mi vida, intento
            encontrar siempre un poco de tiempo para acompañar una melodía con las cuerdas de mi bajo.</p>
        </div>
      </div>

      <div id="proyectos" className="mx-52 mt-44">
        <h1 className="font-Wallpoet  text-4xl text-white  text-right">Proyectos</h1>
        <div>
          <CardProject
            img={bloques}
            title="educalco"
            text="Educando con Alma y Corazón"
            linkProject="VISITA LA WEB"
            onClick={() => navigate("/educalco")}
          />
        </div>        
      </div>



      <Footer/>
    </div>
  );
}

export default App;
