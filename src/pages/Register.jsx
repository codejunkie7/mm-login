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
                </form>

            </div>
        </div>
    )
}

export { Register };