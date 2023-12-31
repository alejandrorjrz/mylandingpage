import Header from "./components/moleculis/Header/Header.component";
import desarrollo from "./assets/images/desarrolloWeb.png";
import html from "./assets/images/html-5.png";
import css from "./assets/images/css.png";
import javascript from "./assets/images/JS.png";
import react from "./assets/images/react.png";
import java from "./assets/images/java.png";

import CardProject from "./components/layout/CardProject/CardProjects.component";
import bloques from "./assets/images/bloques.jpg";

import { useNavigate } from "react-router-dom";
import WeatherCard from "./components/layout/WeatherCard/WeatherCard.component";
import Paragraph from "./components/layout/Paragraph/Parrafo.component";
import Footer from "./components/moleculis/Footer/Footer.components";
import { useContext, useState } from "react";
import BtnLink from "./components/atoms/Button/BtnLink.components";
// import { AppContext } from "./context/App.context";
// import React from "react";

function App() {
  const navigate = useNavigate();

  // const { theme, setTheme, toggleTheme } = useContext(AppContext);

  // const { darkMode, setDarkMode } = useState (false)

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    console.log(localStorage.theme);
    // document.documentElement.classList.add("light")
    // console.log(localStorage.theme);
  };

  return (
    <div
      id="AppPrincipal"
      className={`${darkMode ? "dark" : "light"} h-full w-screen bg-gradient-to-r from-slate-800 to-red-900 font-raleway dark:bg-blue-900`}
    >
      <Header />
      {/* <div className="text-white">
        <BtnLink text="theme" onClick={toggleTheme} />
      </div> */}
      <div className="w-screen h-screen flex flex-col items-center md:h-96 md:flex-row md:w-8/12 md:m-auto">
        <div className="flex flex-col">
          <div className="mx-auto mt-5 md:mt-0 md:absolute md:top-28">
            <WeatherCard />
          </div>
          <div className="my-10 w-56 lg:w-80 md:mt-20 md:float-left ">
            <img className="w-full h-full object-cover opacity-50 md:mt-20" src={desarrollo} alt="desarrollador web" />
          </div>
        </div>

        <div className="mx-6 mt-5 md:w-full md:h-64">
          <h1 className="font-uncial text-right text-5xl text-white">Alejandro Rojas</h1>
          <p className="max-w-4xl mt-10 text-right text-3xl text-white">Desarrollador Web</p>
          <div className="float-right">
            <div className="my-5 m-0 w-full h-32  text-2xl text-white text-right md:h-full">
              <Paragraph />
            </div>
          </div>
        </div>
        <div className="my-5 w-10 flex flex-row gap-5 justify-center opacity-60 md:w-14 md:min-w-min md:flex-col md:justify-end">
          <img src={html} alt="html5" />
          <img src={css} alt="css3" />
          <img src={javascript} alt="JavaScript" />
          <img src={react} alt="React" />
          <img src={java} alt="java" />
        </div>
      </div>

      <div id="sobreMi" className="mx-6 md:w-8/12 md:m-auto md:mt-10">
        <h1 className="font-montserrat text-4xl text-white">SOBRE MI</h1>
        <div className="my-10  text-white text-lg">
          <p>
            Despúes muchos años dedicados al desarrollo de proyectos de arquitectura en 2022 decidí dar un giro a mi vida y preparame de
            forma profesional para el desarrollo web .
          </p> <br></br>
          <p>
            La informática y la tecnología han sido siempre unos de mis pasatiempos favoritos y esto me inspira ahora a buscar retos mayores
            a los que enfrentarme.
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
