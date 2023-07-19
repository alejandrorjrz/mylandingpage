import Input from "../../components/atoms/Input/Input.components";
import Footer from "../../components/moleculis/Footer/Footer.components";
import Header from "../../components/moleculis/Header/Header.component";

function Contact() {
  return (
    <div className="h-screen w-screen bg-slate-700">
      <Header />
      <div className="flex justify-center justify-items-center text-white font-joseline">
        <form className="my-20 w-2/3 h-96 bg-slate-600 rounded-lg">
          <h1 className="w-3/4 mx-auto mt-10 text-center text-3xl">Gracias por contactar conmigo. Puede enviarme un mesaje a través del siguiente formulario</h1>
          <div className="mt-10 grid grid-rows-1 grid-cols-2">
            <div className="px-10 text-xl grid justify-items-stretch">
              <Input labelText="Nombre: " type="text" />
              <Input labelText="Correo electrónico:" type="text" />
            </div>
            <div className="text-center px-10 text-slate-800">
              <textarea className="w-full h-full"></textarea>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
