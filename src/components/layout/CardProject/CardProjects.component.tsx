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
    <div className="my-10 mx-auto py-10 px-4 w-full flex justify-between items-center bg-slate-500/30 rounded-2xl  md:px-10">
      <div className="w-40 h-40 rounded-lg md:w-64 md:h-64">
        <img className="w-full h-full object-cover rounded-2xl" src={img} />
      </div>
      <div className="text-white">
        <h1 className="text-right font-raleway text-2xl md:text-4xl">{title}</h1>
        <p className="text-right font-raleway text-xs md:text-lg">{text}</p>
        <div className="mt-4 flex justify-end text-sm md:mt-10 md:text-lg">
          <BtnLink text={linkProject} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
