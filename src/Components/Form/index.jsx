import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { createLog } from "../../Services/logs"

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;
    gap: 1.5rem;
`

const FormDescription = styled.p`
    font-size: 18px;
    color: #FFFFFF;
`

const InputForm = styled.input`
    font-size: 20px;
    width: 350px;
    padding: 12px;
    border-radius: 12px; 
    border: 2px solid transparent;
    box-sizing: border-box;
    &:focus {
        outline: none;
        border-color: #9500ff;
        transition: border-color 0.5s;
    }
`

const ButtonForm = styled.button`
    padding: 12px;
    border-radius: 8px;
    border: none;
    background-color: #bf6ff8e3;
    color: #FFFFFF;
    &:hover {
        background-color: #9400FF;
        transition: 0.5s;
    }
`

// const WarningForm = styled.p`
//     width: 350px;
//     color: #FFFFFF;
//     font-size: 18px;
//     background-color: #eaeaea1b;
//     padding: 20px;
//     border-radius: 8px;
// `

function Form() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function createReg(e) {
        e.preventDefault()
        const userInfo = {email, password}
        const newReg = await createLog(userInfo)
        console.log(newReg)
        alert("User Created!")
        navigate("/success")
    }

    return (
        <FormContainer onSubmit = {createReg}>
            <FormDescription>Insira um e-mail válido e senha</FormDescription>
            <InputForm onChange = {(e) => setEmail(e.target.value)} placeholder = "E-mail" required />
            <InputForm onChange = {(e) => setPassword(e.target.value)} placeholder = "Senha" type = "password" required />
            <ButtonForm>Registrar</ButtonForm>
        </FormContainer>
    )
}

export default Form;