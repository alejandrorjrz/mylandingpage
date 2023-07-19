import React from 'react';


interface InputProps{
    labelText?: string,
    type?: string,
    id?: string,
    name?: string,
    value?: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

//las propiedades de interface se pasan como parámetro a la función
export const Input: React.FC<InputProps> = ({labelText, id, name, type="text", value, onChange, placeholder}) => {

  return (
    <>
        <label className="font-sans">{labelText}</label>
        <input className='h-7 border border-white rounded-md text-slate-900' onChange={onChange} value={value}  type={type} id={id} name={name} placeholder={placeholder}/>
    </>
  )
}

export default Input
