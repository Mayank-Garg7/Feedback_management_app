import { createContext, useEffect, useState } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    // Passing Default Feedback Data and update using state here
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetchFeedback()
    },[])
    const fetchFeedback = async() => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data = await response.json()
        console.log('hello ')
        setFeedback(data)
    }



    // Add new Feedback data with in existing data
    const addFeedback = async(newFeedback) => {
        const response = await fetch('/feedback',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    // delete selected feedback from storage
    const deleteFeedback = async(id) => {
        if (window.confirm('Are you sure to delete this feedback ')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback)
            // setFeedback(feedback.filter((item) => item.id !== id)) OLD APPROACH
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

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem),
        })
        const data = await response.json()
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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