import React, { useState } from 'react'

const CreatePin = ({ pin, setPin, confirmPin, setConfirmPin, isSubmit, setIsSubmit }) => {

    const handleSubmit = () => {
        if (pin === confirmPin) {
            alert("success")
            setIsSubmit(!isSubmit)
        } else {
            alert(`${pin}`)
            setIsSubmit(isSubmit)
        }
    }
    return (
        <div className='pin-container'>
            <form action>
                <label htmlFor="pin">
                    Create PIN:
                    <input
                        type="password"
                        value={pin}
                        placeholder='Create your PIN'
                        maxLength={4}
                        onChange={(e) => setPin(e.target.value)} />
                </label>
                <label htmlFor="confirm">
                    Confirm PIN:
                    <input
                        type="password"
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