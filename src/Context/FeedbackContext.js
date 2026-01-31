import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../Data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  // ✅ Load feedback from localStorage, fallback to FeedbackData
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem("feedback");
    return storedFeedback ? JSON.parse(storedFeedback) : FeedbackData;
  });

  // ✅ Save feedback to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // Add new feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback((prev) => [newFeedback, ...prev]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Edit feedback state
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Enable edit mode for selected feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update existing feedback
  const updateFeedback = (id, updItem) => {
    setFeedback((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
    // Reset edit mode
    setFeedbackEdit({ item: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
