import {useState} from 'react'
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ text, value }) => {
  if (text==="positive") {
    return (
      <tr>
        <td style={{paddingRight:'1.25rem',textAlign:'left'}}>
          {text}
        </td>
        <td style={{textAlign:'right'}}>
          {value} %
        </td>
      </tr>
    )
  }
  return (
    <tr>
      <td style={{paddingRight:'1.25rem',textAlign:'left'}}>
        {text}
      </td>
      <td style={{textAlign:'right'}}>
        {value}
      </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={total}/>
          <StatisticLine text="average" value={average.toFixed(1)}/>
          <StatisticLine text="positive" value={positive.toFixed(1)}/>
        </tbody>
      </table>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good-bad)/total
  const positive = total === 0 ? 0: (good / total) * 100
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}
      total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App