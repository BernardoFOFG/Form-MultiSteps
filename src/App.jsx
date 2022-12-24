import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

// Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";
function App() {
  const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  };
  const [data, setData] = useState(formTemplate);
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  function restart() {
    alert("Avaliação enviada!");
    document.location.reload();
  }
  return (
    <div className="max-w-[1024px] my-0 mx-auto h-screen flex justify-center gap-10 items-center flex-col">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-stone-900 mb-8">
          Deixe sua avaliação
        </h2>
        <p className="text-xl text-stone-900">
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </div>
      <div className="bg-slate-200 w-[75%] max-h-auto rounded-b-2xl p-10 shadow-slate-500 shadow-lg">
        <Steps currentStep={currentStep} />
        <form
          onSubmit={(e) => changeStep(currentStep + 1, e)}
          className="p-8 flex flex-col h-auto justify-between "
        >
          {currentComponent}
          <div className="flex justify-between mt-8">
            {!isFirstStep && (
              <button
                type="button"
                onClick={() => changeStep(currentStep - 1)}
                className="p-2 bg-slate-400 w-24 flex items-center justify-center transition-all hover:bg-slate-500 gap-1"
              >
                <GrFormPrevious className="mt-[4.2px]" />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button
                type="submit"
                className="p-2 bg-slate-400 w-24 flex items-center justify-center transition-all hover:bg-slate-500 gap-1"
              >
                <span>Avançar</span>
                <GrFormNext className="mt-[4.2px]" />
              </button>
            ) : (
              <button
                type="button"
                className="p-2 bg-slate-400 w-24 flex items-center justify-center transition-all hover:bg-slate-500 gap-1"
              >
                <span onClick={restart}>Enviar</span>
                <FiSend className="mt-[4.2px]" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
