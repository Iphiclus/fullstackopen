import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const goodRating = () => {
    setAll(allClicks.concat('good'))
    setGood(good + 1)
  }

  const neutralRating = () => {
    setAll(allClicks.concat('neutral'))
    setNeutral(neutral + 1)
  }

  const badRating = () => {
    setAll(allClicks.concat('bad'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodRating}>good</button>
      <button onClick={neutralRating}>neutral</button>
      <button onClick={badRating}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}
export default App