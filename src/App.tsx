import Header from "./components/moleculis/Header/Header.component";
import desarrollo from "./assets/images/desarrolloWeb.png";
import CardProject from "./components/moleculis/CardProject/CardProjects.component";
import bloques from "./assets/images/bloques.jpg";

import { useNavigate } from "react-router-dom";
import WeatherCard from "./components/layout/WeatherCard/WeatherCard.component";
import Paragraph from "./components/organism/Presetancion/Parrafo.component";
import Footer from "./components/moleculis/Footer/Footer.components";


function App() {
  const navigate = useNavigate();

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
            <p className="max-w-4xl mt-10 font-inconsolata text-right text-4xl text-white">Desarrollador Web.</p>
            <div className="mt-36 m-0 w-full max-w-xl font-raleway text-2xl text-white text-right">
              <Paragraph/>
            </div>
          </div>
        </div>
      </div>

      <div id="sobreMi" className="mx-40 mt-44">
        <h1 className="font-Wallpoet  text-4xl text-white">Sobre mi</h1>
        <div className="my-10 font-raleway text-white text-2xl">
          <p>Despúes muchos años dedicandome al desarrollo de proyectos de construcción en 2022 decidí dar un giro 
            a mi vida y preparar para el desarrollo web de forma profesional. La tecnología ha sido siempre una 
            de mis mayores pasatiempos, lo que me inspira a buscar retos mayores a los que enfrentarme.</p>
            <p className="mt-5">Mi tiempo libre está dedicado a mi familia. La música forma también algo importante en mi vida por lo
              que tocar el bajo es uno de mis pasatiempos favoritos.</p>
        </div>
      </div>

      <div id="proyectos" className="mx-40 mt-44">
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
