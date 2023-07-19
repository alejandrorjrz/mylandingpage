import github from "../../../assets/images/githubw.png";
import instagram from "../../../assets/images/instagramw.png";

//las propiedades de interface se pasan como parámetro a la función
export const Footer: React.FC = ({}) => {
  return (
    <footer className="h-20 bg-slate-800 flex justify-between text-white">
      <div className="flex items-center">
        <h1 className="ml-10 font-uncial font-bold text-base text-red-800">AlexRojas</h1>
        <p className="mx-2 text-xs">diseño y desarrollo web</p>
      </div>
      <div className="h-50 flex items-center">
        <img className="w-8 h-8 mx-2" src={github} alt="github icon" />
        <img className="w-8 h-8 mr-10" src={instagram} alt="instagram icon" />
      </div>
    </footer>
  );
};

export default Footer;
