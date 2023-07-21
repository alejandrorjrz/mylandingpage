import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button/Button.components";

function Error404() {

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-200">
      <h1 className="text-3xl">error 404</h1>
      <p className="text-6xl">!Página no encontrada!</p>
      <p className="mb-10 text-2xl"> algo no va bien!</p>
      <Button type="button" text="Volver" onClick={() => navigate('/')}/>
    </div>
  );
}

export default Error404;
