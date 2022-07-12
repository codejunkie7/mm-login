import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState, useEffect } from "react"

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  // I love commits
//   const validatePasswrod = () => {
//     let isValid = true;
//     if (password !== '' && confirm) {

//     }
//   }    

    return (
        <div className="register">
            <div className="register-auth">
                <form>
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
                </form>

            </div>
        </div>
    )
}

export { Register };