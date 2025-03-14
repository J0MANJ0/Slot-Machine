import React, { useState } from 'react'

const CreatePin = ({ pin, setPin, confirmPin, setConfirmPin, isSubmit, setIsSubmit }) => {

    const handleSubmit = () => {
        if (!pin && !confirmPin) {
            alert("No PIN created, kindly create one.")
            setIsSubmit(isSubmit)
        } else if (pin === confirmPin) {
            alert("Successfully created your PIN.")
            setIsSubmit(!isSubmit)
        } else {
            alert("PIN does not match")
            setIsSubmit(isSubmit)
        }
    }
    return (
        <div className='pin-container'>
            {alert("This is not an actual game, so real money is needed for you to play. Assume some digits in the inputs to continue playing. Have fun ahead!!")}
            <form action>
                <label htmlFor={pin} id={pin}>
                    Create PIN:
                    <input
                        type="text"
                        value={pin}
                        placeholder='example 1234'
                        maxLength={4}
                        onChange={(e) => setPin(e.target.value)} />
                </label>
                <label htmlFor={confirmPin} id={confirmPin}>
                    Confirm PIN:
                    <input
                        type="text"
                        value={confirmPin}
                        placeholder='Confirm PIN'
                        maxLength={4}
                        onChange={(e) => setConfirmPin(e.target.value)} />
                </label>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CreatePin