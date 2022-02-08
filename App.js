import {v4 as uuidv4} from 'uuid'
import Header from"./Components/Header"
import FeedbackItem from"./Components/FeedbackItem"
import {useState} from 'react'
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./Components/FeedbackList"
import FeedbackStats from "./Components/FeedbackStats"
import FeedbackForm from "./Components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './Components/AboutIconLink'

function App() {

  const[feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this item?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    //Set new feedback aray to new array called feedback so that we can update
    setFeedback([newFeedback, ...feedback])
  }

  return(
    <Router>
      <>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm  handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback = {feedback} handleDelete = {deleteFeedback}/>
              </>
            }>
            </Route>
          
            <Route path="/about" element={<AboutPage />}/>
          </Routes>
          <AboutIconLink/>

        </div>
      </>
    </Router>
  )

}

export default App;
