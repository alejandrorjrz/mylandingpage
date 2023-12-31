import Input from "../../components/atoms/Input/Input.components";
import Button from "../../components/atoms/Button/Button.components";
import { useForm } from "../../hooks/useForm.hooks";
import Header from "../../components/moleculis/Header/Header.component";
import { useNavigate } from "react-router-dom";

export interface RegisterResponse {
  name: string;
  email: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
}

interface FormI {
  name: string;
  email: string;
  password: string;
  role: string;
}

function RegisterForm() {
  //contate estados iniciales
  const initialFormState: FormI = { name: "", email: "", password: "", role: "ADMIN_ROLE" };

  const navigate = useNavigate();

  const { formData, onChange, resetForm } = useForm<FormI>(initialFormState);

  const onSubmit = async (e?: FormDataEvent) => {
    e?.preventDefault();

    try {
      const resp = await fetch("https://noderestserver-production-241a.up.railway.app/api/v1/users/", {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formData),
      });

      const data: RegisterResponse = await resp.json();
      if (!!data?.uid) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen md:h-full md:min-h-screen bg-slate-700 ">
      <Header />
      <div className="flex justify-center">
        <form className="w-full max-w-lg my-20 mx-2 px-4 py-5 bg-slate-500 rounded-lg">
          <h1 className="font-montserrat text-center text-xl text-white">Formulario de Registro</h1>
          <div className="mt-10 grid-rows-5 text-white">
            <div className="grid justify-items-stretch">
              <Input labelText="Nombre: " name="name" value={formData.name} onChange={onChange} />
            </div>
            <div className="grid justify-items-stretch mt-2">
              <Input labelText="Correo: " name="email" type="email" value={formData.email} onChange={onChange} />
            </div>
            <div className="grid justify-items-stretch mt-2">
              <Input labelText="Contraseña: " name="password" type="password" value={formData.password} onChange={onChange} />
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Button type="submit" text="Registrarse" onClick={onSubmit} />
            <Button type="reset" text="Limpiar" onClick={resetForm} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
