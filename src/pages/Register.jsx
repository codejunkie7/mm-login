import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { useState, useEffect } from "react"
import { Button } from "@mui/material"
import { auth } from "../backend/firebase"
import { db } from "../backend/firebase"

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
        isValid = false;
        setError("Passwords do not match")
      }   
    }
    return isValid
  }    

  // Declare auth constant to authenticate firebase user
  const authRegister = (e) => {
    e.preventDefault();
    if (validatePassword()) {
        // Creates a new user with email and password into the FireBase Auth
        createUserWithEmailAndPassword(auth, email, password, firstName, lastName, dateOfBirth)
        .then((userCredential) => {
            //Signed in
            const user = userCredential.user;
            sendEmailVerification(user)
            .then(() => {
                console.log('Verification Email Sent')
            })
            .catch(() => {
                console.log('Issue with Email Verification')
            })
            console.log("User", user)
        })
        .catch((err) => {
            console.log("Issue with register", err);
        })
    }
  }
  // I really love comments
  // Sending User Info to DB 
  const writeUserData = (e) => {
    e.preventDefault();
       addDoc(collection(db, "users"), {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            createdAt: Timestamp.now()
        })
        .catch((err) => {
            console.log("Issue with writing user data", err)
        })
    }

  // Function to run registration to database and auth
  const register = (e) => {
    authRegister(e)
    writeUserData(e)
  }

    return (
        <div className="register">
            <div className="register-auth">
                <h3>Register</h3>
                <form onSubmit={() => {
                    register();
                }}>
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
                      placeholder="Enter your Birthday"
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