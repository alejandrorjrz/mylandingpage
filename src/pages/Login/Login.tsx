import { useContext } from "react";
import Button from "../../components/atoms/Button/Button.components";
import Input from "../../components/atoms/Input/Input.components";
import Header from "../../components/moleculis/Header/Header.component";
import { useForm } from "../../hooks/useForm.hooks";
import { AppContext } from "../../context/App.context";
import { useNavigate } from "react-router-dom";
import usuario from '../../assets/images/usuario.png'

interface LoginResponse{
    user: user,
    token: string
}

interface user{
    name: string,
    email: string,
    role: string,
    status: boolean,
    google: boolean,
    uid: string
}

interface LoginDataI{
    email: string,
    password: string
}

const initialLogInForm: LoginDataI = {email : '', password : ''} 

function Login() {

    const { setToken, setUser } = useContext(AppContext);
   
    const {formData, onChange} = useForm<LoginDataI>(initialLogInForm);

    const navigate = useNavigate();

    const onSubmit =async (e? : FormDataEvent) => {

        e?.preventDefault();

        try {
            const resp = await fetch('https://noderestserver-production-241a.up.railway.app/api/v1/auth/login',
            {
                method:'POST',
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(formData)
            });
            const data : LoginResponse = await resp.json();

            //modificación después de crear el protected routes
            if(!!data.token){
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }        
    }

  return (
    <div className="h-screen w-screen bg-slate-700">
      <Header />
      <div className="w-full flex justify-center">
        <div className="mt-28 mx-2 py-5 w-full max-w-lg px-4 bg-slate-500 rounded-lg">
          <div className="flex justify-center">
            <img className="w-20" src={usuario}/>
          </div>
          <div className="grid grid-rows-2">
            <Input type="email" name="email" value={formData.email} placeholder="Email ID" onChange={onChange} />
            <br />
            <Input type="password" name="password" value={formData.password} placeholder="Password" onChange={onChange} />
          </div>
          <div className="my-10 text-center">
            <Button type="submit" text="Iniciar sesión" onClick={onSubmit}/>
          </div>
          <div className="mx-10 text-center text-white">
              <p className="my-2">¿No dispone de una cuenta?</p>
            <Button type="button" text="Regístrese aqui" onClick={() => navigate("/registro")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
