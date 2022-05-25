import React, {ChangeEvent, useState} from "react"
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any
    addUserCallback: any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<any>('')
    const [error, setError] = useState<any>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        console.log(name)
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
    }

    const totalUsers = 0 // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
