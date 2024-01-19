import apiClient from "./client";

const endpoint = "/reveal";

const revealCorrectAnswer = (questionId) =>
  apiClient.get(endpoint, { id: questionId }).then((res) => {
    return res;
  });

export default {
  revealCorrectAnswer,
};
