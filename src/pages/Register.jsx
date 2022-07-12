import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../backend/firebase"
import { useState, useEffect } from "react"
import { Button } from "@mui/material"

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [error, setError] = useState("")
  
  // Function to ensure password input is correct
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValied = false;
        setError("Passwords do not match")
      }   
    }
    return isValid
  }    

  const register = (e) => {
    e.preventDefault();
    if (validatePassword()) {
        // Creates a new user with email and password into the FireBase Auth
        createUserWithEmailAndPassword()
    }
  }

    return (
        <div className="register">
            <div className="register-auth">
                <form onSubmit={register}>
                    <input
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                      required
                      onChange={e => setEmail(e.target.value)}
                    />

                    <input
                      type="password"
                      value={password}
                      placeholder="Enter your password"
                      required
                      onChange={e => setPassword(e.target.value)}
                    />

                    <input
                      type="password"
                      value={confirmPassword}
                      placeholder="Re-enter your password"
                      required
                      onChange={e => setConfirmPassword(e.target.value)}
                    />

                    <input
                      type="firstName"
                      value={firstName}
                      placeholder="First Name"
                      required
                      onChange={e => setFirstName(e.target.value)}
                    />

                    <input
                      type="lastName"
                      value={lastName}
                      placeholder="Last Name"
                      required
                      onChange={e => setLastName(e.target.value)}
                    />

                    <input
                      type="dateOfBirth"
                      value={dateOfBirth}
                      placeholder="Enter your password"
                      required
                      onChange={e => setDateOfBirth(e.target.value)}
                    />
                    <Button variant="outlined" type="submit">Register</Button>
                </form>

            </div>
        </div>
    )
}

export { Register };