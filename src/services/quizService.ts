import artMusic from "../data/arte-musica.json";
import scienceNature from "../data/ciencia-naturaleza.json";
import geographyHistory from "../data/geografia-historia.json";
import entertainment from "../data/entretenimiento-espectaculos.json";
import sports from "../data/deportes.json";

export enum Category {
  artMusic = "arte-musica",
  scienceNature = "ciencia-naturaleza",
  geographyHistory = "geografia-historia",
  entertainment = "entretenimiento-espectaculos",
  sports = "deportes",
  todo = "todo",
}

export interface IQuestion {
  dificultad?: string;
  pregunta: string;
  respuestas: IRespuestas;
}

export interface IRespuestas {
  correcta: string;
  incorrectas: string[];
}

export interface IQuestionWithAnswer extends Omit<IQuestion, "respuestas"> {
  respuestas: string[];
  correcta: string;
}

export const getCategory = (category: Category): IQuestion[] => {
  switch (category) {
    case Category.artMusic:
      return artMusic;
    case Category.scienceNature:
      return scienceNature;
    case Category.geographyHistory:
      return geographyHistory;
    case Category.entertainment:
      return entertainment;
    case Category.sports:
      return sports;
    default:
      return [
        ...artMusic,
        ...scienceNature,
        ...geographyHistory,
        ...entertainment,
        ...sports,
      ];
  }
};

export const getQuestion = (category: Category): IQuestionWithAnswer => {
  const questions = getCategory(category);
  const random = Math.floor(Math.random() * questions.length);

  console.log("random", questions[random]);
  const question = {
    ...questions[random],
    respuestas: [
      ...questions[random].respuestas.incorrectas,
      questions[random].respuestas.correcta,
    ],
    correcta: questions[random].respuestas.correcta,
  };

  return question;
};
