import React from "react";
import BtnLink from "../../atoms/Button/BtnLink.components";

interface CardProjectProps {
  img?: string;
  title?: string;
  text?: string;
  linkProject?:string;
  onClick?: () => void
}

export const CardProject: React.FC<CardProjectProps> = ({
  img,
  title,
  text,
  onClick,
  linkProject
}) => {
  return (
    <div className="my-10 mx-auto py-10 w-full flex justify-center items-center bg-slate-900/20 rounded-2xl">
      <div className="w-64 h-64 rounded-lg">
        <img className="w-full h-full object-cover rounded-2xl" src={img} />
      </div>
      <div className="mx-10 text-white">
        <h1 className="text-right font-raleway text-4xl">{title}</h1>
        <p className="text-right font-raleway ">{text}</p>
        <div className="mt-10 flex justify-end">
          <BtnLink text={linkProject} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
