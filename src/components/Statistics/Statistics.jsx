import { Stat } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) => {
  return (
    <Stat>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positiveFeedback}%</p>
    </Stat>
  );
};