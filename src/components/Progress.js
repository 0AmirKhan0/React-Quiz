import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestions, maxPossiblePoints, answer, points } = useQuiz();
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
