import Header from "./components/moleculis/Header/Header.component";
import desarrollo from "./assets/images/desarrolloWeb.png";
import CardProject from "./components/layout/CardProject/CardProjects.component";
import bloques from "./assets/images/bloques.jpg";

import { useNavigate } from "react-router-dom";
import WeatherCard from "./components/layout/WeatherCard/WeatherCard.component";
import Paragraph from "./components/layout/Paragraph/Parrafo.component";
import Footer from "./components/moleculis/Footer/Footer.components";

function App() {
  const navigate = useNavigate();

  return (
    <div
      id="AppPrincipal"
      className="h-full w-screen bg-gradient-to-r font-raleway from-slate-800 to-red-900"
    >
      {/* <div className="text-white absolute top-3 right-2 opacity-80 z-50">
        <SwitchLabels />
      </div> */}

      <Header />
      <div className="w-screen h-screen flex flex-col items-center md:h-96 md:flex-row md:w-8/12 md:m-auto">
        <div className="flex flex-col">
          <div className="mx-auto mt-5 md:mt-0 md:absolute md:top-28">
            <WeatherCard />
          </div>
          <div className="my-10 w-80 md:mt-20 md:float-left ">
            <img
              className="w-full h-full object-cover opacity-50 md:mt-20"
              src={desarrollo}
              alt="desarrollador web"
            />
          </div>
        </div>

        <div className="mx-6 mt-5 md:w-full md:h-64">
          <h1 className="font-uncial text-right text-5xl text-white">
            Alejandro Rojas
          </h1>
          <p className="max-w-4xl mt-10 text-right text-3xl text-white">
            Desarrollador Web
          </p>
          <div className="float-right">
            <div className="my-5 m-0 w-full h-32  text-2xl text-white text-right md:h-full">
              <Paragraph />
            </div>
          </div>
        </div>
      </div>

      <div id="sobreMi" className="mx-6 md:w-8/12 md:m-auto md:mt-10">
        <h1 className="font-montserrat text-4xl text-white">SOBRE MI</h1>
        <div className="my-10  text-white text-lg text-justify ">
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
        <h1 className="font-montserrat text-4xl text-white  text-right">PROYECTOS</h1>
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
