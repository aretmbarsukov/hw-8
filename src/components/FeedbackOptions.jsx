import styles from "../styles/FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={styles.container}>
      {options.map(option => (
        <button
          key={option}
          className={styles.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
