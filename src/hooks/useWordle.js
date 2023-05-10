import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)



    // format a guess into an array of letter objects
    // e.g. [{key: 'a', colour: 'green'}]
    const formatGuess = () => {

    }

    //Add a new guess to the guesses state
    //Update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    //handle keyup event and track current guess
    // if user presses enter, add the new guess
    const handleKeyUp = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}

}

export default useWordle