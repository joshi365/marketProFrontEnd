import { useState } from 'react'

const useLoginPage = () => {

    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassWord] = useState("")

    const handleFormSubmit = (email,password,e) => {
        e.preventDefault()
        console.log(email,password)
    }

    return {
        emailAddress,
        setEmailAddress,
        password,
        setPassWord,
        handleFormSubmit
    }
}

export default useLoginPage