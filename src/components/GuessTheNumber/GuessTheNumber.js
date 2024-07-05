
import React, { useState } from 'react'

let getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1);
}

const random = getRandom(1, 10);
console.log(random)

const GuessTheNumber = () => {

  const [number, setNumber] = useState(0)
  const [guessedNum, setGuessedNum] = useState("")

  let handleChange = (event) => {
    if (event.target.value === '') { console.log("please enter a number"); return }
    let num = event.target.value;
    num = Number.parseInt(num)
    setGuessedNum(num)
    setNumber(random)
  }

  let handleSubmit = () => {
    setGuessedNum("")
    
    if (number === 0 || guessedNum === "") {
      console.log("Please Enter A Number")
    } else if (guessedNum === number) {
      console.log("Your guess is correct")
    } else if (guessedNum < number) {
      console.log("Your guess is less than the number")
    } else {
      console.log("Your guess is greater than the number")
    }
  }

  return (
    <div className="container">
      <div className="title">
        This is a Guess The Number Game. <br /> The Number is between 1 to 10
      </div>
      <div className="content">
        <input type="number" name='number' onChange={handleChange} value={guessedNum} />
      </div>
      <div className="btns">
        <button onClick={handleSubmit}>check</button>
      </div>
    </div>
  )
}

export default GuessTheNumber
