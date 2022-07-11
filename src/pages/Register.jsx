import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')

  const validatePasswrod = () => {
    let isValid = true;
    if (password !== '' && confirm)
  }    

    return (
        <h1>Register</h1>
    )
}

export { Register };