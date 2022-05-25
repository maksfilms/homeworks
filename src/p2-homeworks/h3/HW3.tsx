import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";


export type UserType = {
    _id: any
    name: any
}


// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]) // need to fix any

    const addUserCallback = (name: any) => {
        setUsers([])
    }

    return (
        <div>
            <hr/>
            homeworks 3

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
