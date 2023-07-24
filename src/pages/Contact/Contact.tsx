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

    navigate("/");
  };

  return (
    <div className="flex flex-col h-screen md:h-full md:min-h-screen bg-slate-700">
      <Header />
      <div className="flex flex-grow mx-5 items-center justify-center text-white font-montserrat">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <h1 className="w-3/4 mx-auto my-10 text-center">
            Gracias por visitar mi página web. Puede enviarme un mensaje a través del siguiente formulario:
          </h1>
          <div className="flex gap-5 flex-col font-montserrat md:p-5 md:grid md:grid-rows-1 md:grid-cols-2">
            <div className="px-1 grid gap-2 justify-items-stretch">
              <Input labelText="Nombre: " type="text" name="from_name" />
              <Input labelText="Correo electrónico:" type="text" name="user_email" />
            </div>
            <div className="px-1 grid gap-2 justify-items-stretch text-white">
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
