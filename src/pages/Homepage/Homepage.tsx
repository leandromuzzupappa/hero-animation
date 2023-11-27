import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Options } from "../../components/Options/Options";
import styles from "./Homepage.module.css";
import {
  getQuestion,
  Category,
  IQuestionWithAnswer,
} from "../../services/quizService";

export const Homepage = () => {
  const [category, setCategory] = useState<Category>(Category.todo);
  const [question, setQuestion] = useState<IQuestionWithAnswer>(
    {} as IQuestionWithAnswer
  );
  const [showOptions, setShowOptions] = useState<boolean>(false);

  useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) setCategory(hash as Category);

    const fetchQuestion = async () => {
      const question = await getQuestion(category);
      setQuestion(question);
    };

    fetchQuestion();
  }, [category]);

  function cambiarCategoria(e: React.MouseEvent<HTMLAnchorElement>) {
    const element = e.target as HTMLAnchorElement;
    const category = element.hash.substr(1);

    setCategory(category as Category);
  }

  const handleResponse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.target as HTMLButtonElement;
    const response = element.innerText;

    if (response === question.correcta) {
      alert("Correcto!");
    } else {
      alert(`Incorrecto! La respuesta correcta es: \n${question.correcta}`);
    }

    const fetchQuestion = async () => {
      const question = await getQuestion(category);
      setQuestion(question);
    };

    fetchQuestion();
  };

  return (
    <>
      <Navbar
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
          cambiarCategoria(e)
        }
      />
      <Hero
        headline={question.pregunta}
        section={category}
        difficulty={question.dificultad}
      />

      {showOptions ? (
        <Options responses={question.respuestas} onSelect={handleResponse} />
      ) : (
        <button
          className={styles.showOptionsButton}
          onClick={() => setShowOptions(!showOptions)}
        >
          Mostrar opciones
        </button>
      )}
    </>
  );
};
