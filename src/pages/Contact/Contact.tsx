import Button from "../../components/atoms/Button/Button.components";
import Input from "../../components/atoms/Input/Input.components";
import Footer from "../../components/moleculis/Footer/Footer.components";
import Header from "../../components/moleculis/Header/Header.component";

function Contact() {
  return (
    <div className="h-screen w-screen justify-between flex flex-col bg-slate-700">
      <Header />
      <div className="flex justify-center justify-items-center text-white font-montserrat">
        <form className="w-10/12 min-h-full bg-slate-400 rounded-lg">
          <h1 className="w-3/4 mx-auto mt-10 text-center text-lg md:text-2xl">
            Gracias por contactar conmigo. Puede enviarme un mesaje a través del siguiente formulario:
          </h1>
          <div className="mt-5 flex flex-col font-montserrat md:p-10 md:grid md:grid-rows-1 md:grid-cols-2">
            <div className="px-1 grid justify-items-stretch">
              <Input labelText="Nombre: " type="text" />
              <Input labelText="Correo electrónico:" type="text" />
            </div>
            <div className="px-1 grid justify-items-stretch text-white">
              <label>Mensaje:</label>
              <textarea className="text-slate-800 rounded md:mt-2" rows={5} required></textarea>
            </div>
          </div>
          <div className="my-10 flex justify-center">
            <Button type="submit" text="Enviar"></Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
