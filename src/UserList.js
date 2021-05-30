import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserList () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchData() {
            await axios.get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
            .then(res => {
                const user = res.data
                setUsers(user)
            })
        }
        fetchData()
    })

    return (
        <ul>
            { users.map(user => <li key={user.id}>{user.firstName}</li>) }
        </ul>
    )
}