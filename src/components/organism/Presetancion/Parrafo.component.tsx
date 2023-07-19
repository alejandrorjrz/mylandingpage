import Typewriter from "typewriter-effect";
  
function Paragraph () {
  return (
    <div>
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Apasionado del desarrollo web y la creación de experiencias digitales cautivadoras.")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Enfoco mi trabajo en combinar diseño y funcionalidad para ofrecer sitios web únicos y atractivos.")
       .start();
       }}
       />
    </div>
  );
}
  
export default Paragraph;