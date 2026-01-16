import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    // Passing Default Feedback Data and update using state here
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 9,
            text: 'This text is from context api'
        },
        {
            id: 2,
            rating: 9,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ipsam."
        },
        {
            id: 3,
            rating: 7,
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ipsam."
        },
    ])

    // Add new Feedback data with in existing data
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // delete selected feedback from storage
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure to delete this feedback ')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // edit mode on for selected data 
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    // edit the feedback which exist in data
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        )
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                addFeedback,
                deleteFeedback,
                editFeedback,
                updateFeedback,

            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext