import React, { useState } from 'react'

const CreatePin = ({ pin, setPin, confirmPin, setConfirmPin, isSubmit, setIsSubmit }) => {

    const handleSubmit = () => {
        if (!pin && !confirmPin) {
            alert("No PIN created, kindly create one.")
            setIsSubmit(isSubmit)
        } else if (pin === confirmPin) {
            alert("Done!!")
            setIsSubmit(!isSubmit)
        } else {
            alert("PIN does not match")
            setIsSubmit(isSubmit)
        }
    }
    return (
        <div className='pin-container'>
            <form action>
                <label htmlFor="pin">
                    Create PIN:
                    <input
                        type="number"
                        value={pin}
                        placeholder='example 1234'
                        maxLength={4}
                        onChange={(e) => setPin(e.target.value)} />
                </label>
                <label htmlFor="confirm">
                    Confirm PIN:
                    <input
                        type="number"
                        value={confirmPin}
                        placeholder='Confirm Your PIN'
                        maxLength={4}
                        onChange={(e) => setConfirmPin(e.target.value)} />
                </label>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default CreatePin