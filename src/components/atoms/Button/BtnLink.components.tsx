
interface BtnLinkProps{
    text?: string,
    type?: "button" | "reset" | "submit" |undefined,
    onClick?: () => void
}

//las propiedades de interface se pasan como parámetro a la función
export const BtnLink: React.FC<BtnLinkProps> = ({text, type="button", onClick}) => {

  return (
    <button className="border-none font-bold hover:bg-red-900/25" type={type} onClick={onClick}>{text}</button>
  )
}

export default BtnLink;
