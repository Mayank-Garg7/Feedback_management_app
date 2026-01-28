import React, { useContext } from 'react'
import { FaTimes, FaUserEdit } from 'react-icons/fa'
import Card from './Shared/Card'
import FeedbackContext from '../Context/FeedbackContext'
import './FeedbackItem.scss'

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes  />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaUserEdit  />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
