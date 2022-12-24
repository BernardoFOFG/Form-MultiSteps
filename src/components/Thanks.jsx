import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};
const Thanks = ({ data }) => {
  return (
    <div className="text-center w-[75%] flex justify-center flex-col mx-auto">
      <h2 className="mb-4 font-semibold text-2xl">Falta pouco...</h2>
      <p className="mb-2">
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão Enviar abaixo.</p>
      <h3 className="font-semibold text-xl my-4">
        Aqui está o resumo da sua avaliação: {data.name}
      </h3>
      <p className="mb-2 text-left font-medium">
        <span className="flex items-center gap-1">Satisfação com o produto: {emojiData[data.review]}</span>
      </p>
      <p className=" text-left font-medium">
        <span>Comentário: {data.comment}</span>
      </p>
    </div>
  );
};

export default Thanks;
