import { useNavigate } from 'react-router-dom';
interface HeaderProps{
    options?: linkInterface[]
}

interface linkInterface{
    link? : string,
    linkText?: string,
    linkButton?: string
}


//las propiedades de interface se pasan como parámetro a la función
export const Header: React.FC<HeaderProps> = ({options = []}) => {

  return (
    <header>
        <nav className="bg-stone-400 w-full h-10 px-32 font-raleway flex flex-row justify-between items-center">
            {
                options.map((option, index)=>(
                    <a key={index} href={option.link}>{option.linkText}{option.linkButton}</a>
                ))
            } 
           
        </nav>
    </header>
  )
}

export default Header
