function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const persentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (persentage === 100) emoji = "🎉";
  if (persentage >= 80 && persentage < 100) emoji = "🙃";
  if (persentage >= 50 && persentage < 80) emoji = "🙃";
  if (persentage >= 0 && persentage < 50) emoji = "🤨";
  if (persentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        {emoji} You scored {points} out of {maxPossiblePoints} (
        {Math.ceil(persentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
