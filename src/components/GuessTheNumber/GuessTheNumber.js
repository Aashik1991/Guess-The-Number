
import React, { useState } from 'react'

let getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1);
}
let max = 10;
let random = getRandom(1, max);
console.log(random)
let win = false;
let over = false;

//component starts here
const GuessTheNumber = () => {

  const [number, setNumber] = useState(0)
  const [guessedNum, setGuessedNum] = useState("")
  const [message, setMessage] = useState("")
  const [guessCount, setGuessCount] = useState(0)

  let handleChange = (event) => {
    if (event.target.value === '') {
      setGuessedNum('')
      return
    }
    if (message !== "You Loose") setMessage("");
    let num = event.target.value;
    num = Number.parseInt(num)
    setGuessedNum(num)
    setNumber(random)
  }

  let handleSubmit = () => {
    if (over === false) {
      setGuessedNum("")

      if (number === 0 || guessedNum === "") {
        setMessage("Please Enter A Number")
      } else if (guessedNum === number) {
        setMessage("Your guess is correct")
        win = true;
        over = true;
      } else if (guessedNum < number) {
        setMessage("Your guess is less than the number")
      } else {
        setMessage("Your guess is greater than the number")
      }
      setGuessCount(guessCount + 1)

      if (guessCount + 1 >= max && win === false) {
        setMessage("You Loose")
        over = true;
        return
      }
    }
  }

  let handleRetry = () => {
    random = getRandom(1, max);
    setGuessCount(0)
    win = false;
    over = false;
    setMessage("")
    console.log(random)
  }

  let grace = win ? 1 : 0;

  return (
    <div className="container">
      <div className="title">
        Guess The Number Game. <br /> The Number is between 1 to {max} <br /> Max try = 10
      </div>
      <div className="score">
        {
          message && <div className={win ? "message win" : "message"}> {message}</div>
        }
        {
          over ? <div className="win"> Your Score = {max - guessCount + grace} <br /> Attempts = {guessCount}</div> : <div className="win">Attempts : {guessCount}</div>
        }
        {
          (win === false && over) ? <div className="message win"> Number is = {random} </div> : ""
        }
      </div>
      <div className="content">
        <input type="number" name='number' onChange={handleChange} value={guessedNum} />
      </div>
      <div className="btns">
        <button onClick={handleSubmit}>check</button>
        <button onClick={handleRetry}>Retry</button>
      </div>
    </div>
  )
}

export default GuessTheNumber
