
interface ButtonProps{
    text?: string,
    type?: "button" | "reset" | "submit" |undefined,
    onClick?: () => void
    value?: string;
}

//las propiedades de interface se pasan como parámetro a la función
export const Button: React.FC<ButtonProps> = ({text, type=undefined, onClick, value}) => {

    let style;

    if(type ==="submit"){
        style =  "px-4 py-1 mx-1 bg-slate-800 rounded text-white hover:bg-red-800"; 
    }else if (type === "reset" || type === "button") {
        style = "bg-slate-900/20 px-4 py-1 mx-1 rounded text-white hover:bg-red-800"
    }else{
        style = "border-none px-4 py-1 mx-1 rounded text-white"
    }

  return (
    <button className={style} type={type} onClick={onClick} value={value}>{text}</button>
  )
}

export default Button
