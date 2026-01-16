import React, { useContext } from 'react'
import { FaTimes, FaUserEdit } from 'react-icons/fa'
import Card from './Shared/Card'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='white' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaUserEdit color='white' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
