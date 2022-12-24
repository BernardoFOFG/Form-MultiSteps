import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import './ReviewForm.css'
const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <p className="text-2xl">Indique seu nivel de satisfação</p>
      <div className="flex items-center gap-6 h-20 mb-6 relative">
        <label
          htmlFor="form-control"
          for="unsatisfied"
          className="flex items-center gap-1 hover:cursor-pointer flex-col"
        >
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            id="unsatisfied"
            className="opacity-0 absolute top-[55px] left-[175px] hover:cursor-pointer "
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
           
          />
          <BsFillEmojiFrownFill className="text-3xl hover:fill-green-700 peer-checked:fill-slate-800" />
          <p className="font-light text-sm italic">Insatisfeito</p>
        </label>
        <label
          htmlFor="form-control"
          for="neutral"
          className="flex items-center gap-1 hover:cursor-pointer flex-col"
        >
          <input
            type="radio"
            value="neutral"
            name="review"
            id="neutral"
            className="opacity-0 absolute hover:cursor-pointer "
            required
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill className="text-3xl hover:fill-green-700" />
          <p className="font-light text-sm italic">Neutro</p>
        </label>
        <label
          htmlFor="form-control"
          for="satisfied"
          className="flex items-center gap-1 hover:cursor-pointer flex-col"
        >
          <input
            type="radio"
            value="satisfied"
            name="review"
            id="satisfied"
            className="opacity-0 absolute hover:cursor-pointer peer-checked:fill-slate-800"
            required
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill className="text-3xl hover:fill-green-700" />
          <p className="font-light text-sm italic">Satisfeito</p>
        </label>
        <label
          htmlFor="form-control"
          for="very_satisfied"
          className="flex items-center gap-1 hover:cursor-pointer flex-col"
        >
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            id="very_satisfied"
            required
            className="opacity-0 absolute hover:cursor-pointer peer-checked:fill-slate-800"
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill className="text-3xl hover:fill-green-700" />
          <p className="font-light text-sm italic">Muito Satisfeito</p>
        </label>
      </div>
      <div className="flex flex-col">
        <label htmlFor="form-control" className="text-lg font-semibold mb-2">
          Comentário:
        </label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi sua experiência com o produto..."
          rows={10}
          cols={60}
          className="shadow-lg shadow-slate-400 rounded-b-lg p-4"
          checked={data.review === ""}
            onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
