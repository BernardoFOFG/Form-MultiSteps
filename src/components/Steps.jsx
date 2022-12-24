import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import '../styles/Steps.css' 
const Steps = ({ currentStep }) => {
  return (
    <div className="flex justify-center">
      <div className={`step ${currentStep == 0 ? "active" : ""} w-full border-y-[1px] border-l-[1px] border-black p-2`}>
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep == 1 ? "active" : ""}  w-full border-y-[1px] border-x-[1px] border-black p-2`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep == 2 ? "active" : ""}  w-full border-y-[1px] border-r-[1px] border-black p-2`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
