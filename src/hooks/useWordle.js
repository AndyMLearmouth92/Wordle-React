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
        console.log('Formatting the guess - ', currentGuess)
    }

    //Add a new guess to the guesses state
    //Update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }

    //handle keyup event and track current guess
    // if user presses enter, add the new guess
    const handleKeyup = ({ key }) => {
        if(key === 'Enter'){
            // only add guess if turn is less than 5.
            if(turn > 5){
                console.log('You used all of your guesses')
                return
            }
            // Not already submitted that word in the past / no duplicate words.
            if(history.includes(currentGuess)){
                console.log('You already tried that word')
            }
            // Check word is 5 chars long.
            if(currentGuess.length !== 5){
                console.log('Word must be 5 characters long')
            }
            formatGuess()
        }
        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key

                })


            }
        }

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle