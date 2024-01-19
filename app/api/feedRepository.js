import forYouApi from "./forYouApi";
import revealApi from "./revealApi";

const getForYou = async () => {
  return await forYouApi.getForYou();
};

const reveal = async (questionId) => {
  return await revealApi.revealCorrectAnswer(questionId);
};

async function loadNextQuestion(data, setData) {
  const response = await getForYou();
  const option = await reveal(response.data.id);
  question = response.data;
  question.correctAnswer = option.data.correct_options[0];
  setData((prevData) => {
    return [...prevData, response.data];
  });
}

export default {
  loadNextQuestion,
};
