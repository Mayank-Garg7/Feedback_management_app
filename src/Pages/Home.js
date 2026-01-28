import FeedbackList from '../Component/FeedbackList'
import FeedbackStats from '../Component/FeedbackStats'
import FeedbackForm from '../Component/FeedbackForm'
import { FeedbackProvider } from '../Context/FeedbackContext'
import './Home.scss'

const Home = () => {

  return (
    <FeedbackProvider >
      <div className="container">
        <FeedbackForm  />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  )
}

export default Home
