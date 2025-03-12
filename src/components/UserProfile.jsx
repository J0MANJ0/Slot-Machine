import React from 'react'

const Welcome = ({ username, setUsername }) => {

    const handleProfileChange = () => {

        const oldProfile = prompt("Confirm your current name before you proceed: ")


        if (oldProfile === username) {
            const newProfile = prompt("Enter your new name: ")
            alert(`Username changed from ${username} to ${newProfile}`)
            setUsername(newProfile)
        } else {
            alert("The name does not match the current name, try again!")
            const tryAgain = prompt("Do you want to try again, if yes press y else x: ")
            if (tryAgain === "y" || tryAgain === "Y") {
                const oldProfile = prompt("Confirm your current name before you proceed: ")
                if (oldProfile === username) {
                    const newProfile = prompt("Enter your new name: ")
                    alert(`Username changed from ${username} to ${newProfile}`)
                    setUsername(newProfile)
                } else {
                    alert("The name does not still match the curent name")
                }
            } else if (tryAgain === "x" || tryAgain === "X") {
                alert("Maybe you can try again, later")
            }
        }


    }

    return (
        <div className="user-profile">
            <div className="profile">
                <span className='user'>Username: </span><span className='name'>{username}</span>
            </div>
            <div className="change-profile">
                <button onClick={handleProfileChange}>Change Profile</button>
            </div>
        </div>
    )
}

export default Welcome