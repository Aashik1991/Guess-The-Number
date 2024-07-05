
import React, { useState } from 'react'

let getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1);
}
let max = 10;
let random = getRandom(1, max);
console.log(random)
let win = false;

//component starts here
const GuessTheNumber = () => {

  const [number, setNumber] = useState(0)
  const [guessedNum, setGuessedNum] = useState("")
  const [message, setMessage] = useState("")
  const [guessCount, setGuessCount] = useState(0)

  let handleChange = (event) => {
    if (event.target.value === '') {
      setGuessedNum('')
      setMessage("Please Enter A Number")
      return
    }
    setMessage("");
    let num = event.target.value;
    num = Number.parseInt(num)
    setGuessedNum(num)
    setNumber(random)
  }

  let handleSubmit = () => {
    setGuessedNum("")
    setGuessCount(guessCount+1)

    if (guessCount >= max) {
      setMessage("You Lose")
      return
    }

    if (number === 0 || guessedNum === "") {
      setMessage("Please Enter A Number")
    } else if (guessedNum === number) {
      setMessage("Your guess is correct")
      win = true;
    } else if (guessedNum < number) {
      setMessage("Your guess is less than the number")
    } else {
      setMessage("Your guess is greater than the number")
    }
  }

  let handleRetry = ()=>{
    random = getRandom(1, max);
    setGuessCount(0)
    win = false;
    setMessage("")
    console.log(random)
  }

  return (
    <div className="container">
      <div className="title">
        This is a Guess The Number Game. <br /> The Number is between 1 to {max} <br /> Max try = 10
      </div>
      {
        message ? <div className="message"> {message}  <br />{win!=true?<span>Attempts : {guessCount}</span>:""}</div> : ''
      }
      {
        win ? <div className="win"> Your Score : {max - guessCount} <br /> Attempts : {guessCount}</div> : ""
      }
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
