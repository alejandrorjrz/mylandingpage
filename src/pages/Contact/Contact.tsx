import { FormEvent, useRef } from "react";
import Button from "../../components/atoms/Button/Button.components";
import Input from "../../components/atoms/Input/Input.components";
import Footer from "../../components/moleculis/Footer/Footer.components";
import Header from "../../components/moleculis/Header/Header.component";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function Contact() {

  const navigate = useNavigate();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs.sendForm("service_0w0m0ca", "template_zjc3cu9", form.current as HTMLFormElement, "Y6pFS9Ca9l6MkUkVX").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }       
    );

    navigate('/');
  };


  return (
    <div className="h-screen w-screen justify-between flex flex-col bg-slate-700">
      <Header />
      <div className="flex justify-center justify-items-center text-white font-montserrat">
        <form ref={form} className="w-10/12 min-h-full bg-slate-500 rounded-lg" onSubmit={sendEmail}>
          <h1 className="w-3/4 mx-auto mt-10 text-center text-lg md:text-2xl">
            Gracias por contactar conmigo. Puede enviarme un mesaje a través del siguiente formulario:
          </h1>
          <div className="mt-5 flex gap-10 flex-col font-montserrat md:p-10 md:grid md:grid-rows-1 md:grid-cols-2">
            <div className="px-1 grid justify-items-stretch">
              <Input labelText="Nombre: " type="text" name="from_name" />
              <Input labelText="Correo electrónico:" type="text" name="email_id" />
            </div>
            <div className="px-1 grid justify-items-stretch text-white">
              <label>Mensaje:</label>
              <textarea name="message" className="text-slate-800 rounded md:mt-2" rows={5} required></textarea>
            </div>
          </div>
          <div className="my-10 flex justify-center">
            <Button type="submit" value="Send" text="Enviar" onClick={() => sendEmail}></Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
