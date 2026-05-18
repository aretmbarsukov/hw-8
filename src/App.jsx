import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (type) => {
    setState(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const total = state.good + state.neutral + state.bad;
  const positivePercentage =
    total === 0 ? 0 : Math.round((state.good / total) * 100);

  return (
    <div style={{ padding: "40px", fontFamily: "Inter, sans-serif" }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
