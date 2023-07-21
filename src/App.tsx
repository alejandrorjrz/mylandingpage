import Header from "./components/moleculis/Header/Header.component";
import desarrollo from "./assets/images/desarrolloWeb.png";
import CardProject from "./components/moleculis/CardProject/CardProjects.component";
import bloques from "./assets/images/bloques.jpg";

import { useNavigate } from "react-router-dom";
import WeatherCard from "./components/layout/WeatherCard/WeatherCard.component";
import Paragraph from "./components/organism/Presetancion/Parrafo.component";
import Footer from "./components/moleculis/Footer/Footer.components";
import { Switch } from "./components/atoms/Switch/Switch.component";


function App() {
  const navigate = useNavigate();

    
  return (
    <div className="h-full w-screen bg-gradient-to-r from-slate-800 to-red-900 dark:bg-black">
      <Header />
      <div className="flex flex-col items-center md:flex-row md:w-3/4 md:m-auto">
        <div className="flex flex-col md:m-auto">
          <div className="mx-auto mt-5 md:absolute md:top-28">
            <Switch/>
            <WeatherCard />
          </div>
          <div className="my-10 w-64 h-full md:w-80 md:float-left ">
            <img
              className="w-full h-full object-cover opacity-50 "
              src={desarrollo}
              alt="desarrollador web"
            />
          </div>
        </div>

        <div className="mx-6 md:my-10">
          <h1 className="font-uncial text-right text-5xl text-white">
            Alejandro Rojas
          </h1>
          <div className="float-right">
            <p className="max-w-4xl mt-10 font-inconsolata text-right text-3xl text-white">
              Desarrollador Web
            </p>
            <div className="my-20 m-0 w-full max-w-xl font-raleway text-2xl text-white text-right md:h-full">
              <Paragraph />
            </div>
          </div>
        </div>
      </div>

      <div id="sobreMi" className="mx-6 md:w-8/12 md:m-auto">
        <h1 className="font-Wallpoet  text-4xl text-white">Sobre mi</h1>
        <div className="my-10 font-raleway text-white text-lg text-justify ">
          <p>
            Despúes muchos años dedicados al desarrollo de proyectos de
            arquitectura en 2022 decidí dar un giro a mi vida y preparame de
            forma profesional para el desarrollo web . La informática y la
            tecnología han sido siempre unos de mis pasatiempos favoritos y esto
            me inspira ahora a buscar retos mayores a los que enfrentarme.
          </p>
          <p className="mt-5">
            Soy una persona dedicada a la familia. La música también forma parte
            importante en mi vida, intento encontrar siempre un poco de tiempo
            para acompañar una melodía con las cuerdas de mi bajo.
          </p>
        </div>
      </div>

      <div id="proyectos" className="mx-6 md:w-8/12 md:m-auto">
        <h1 className="font-Wallpoet  text-4xl text-white  text-right">
          Proyectos
        </h1>
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

      <Footer />
    </div>
  );
}

export default App;
