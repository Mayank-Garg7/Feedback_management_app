import React, { useState, useContext, useEffect } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  // passing the feedback date for edit
  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])

  const handleText = (e) => {
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setBtnDisabled(true)
      setMessage('Review must be atleast 10 character.')
    }else{
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.currentTarget.value)
  }

  // Calling addFeedback function on submiting the form 
  const handleSubmit = (e)=> {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
          text,
          rating,
      } 
      feedbackEdit.edit ? updateFeedback(feedbackEdit.item.id, newFeedback) : addFeedback(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} >
        <h1 className='title'>How would you rate your service with us</h1>
        <RatingSelect select={(rate) => setRating(rate)} />
        <div className="input-group">
          <input
            type="text"
            placeholder='write your review here..'
            value={text}
            onChange={handleText}
          />
          <Button type='submit' isDisabled={btnDisabled}>send</Button>
        </div>
        {message ? <div className='message'>{message}</div> : ''}
      </form>
    </Card>
  )
}

export default FeedbackForm
