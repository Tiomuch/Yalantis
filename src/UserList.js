import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserList () {
    const [users, setUsers] = useState([]) // eslint-disable-next-line
    const [EN, setEN] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])
    const [col, setCol] = useState("black")

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

    const Choose = (event) => {
        console.log(event.target)
        /*if(event.target.value === "active") {
            setCol("blue")
        } else {
            setCol("black")
        }*/
    }

    const Distrib = (letter) => {// eslint-disable-next-line
        let NeedUsers = []

        for(let i = 0; i < users.length; i++){
            if(letter === users[i].lastName.charAt(0)){
                NeedUsers.push(`${users[i].lastName} ${users[i].firstName}`)
            }
        }

        if(NeedUsers.length === 0){
            return <div>{"---"}</div>
        } else {
            return (NeedUsers.map(name => <div key={NeedUsers.indexOf(name)} className="person" style={{color:col}}>{name}
            <div onChange={Choose} className="personInp"><input type="radio" value="not active" name={name} defaultChecked={true} /> not active<input type="radio" value="active" name={name} defaultChecked={false} /> active</div></div>))
        }
    }

    return (
      <>
      <div className="emp"><b>Employees</b></div>
        <ul className="alphUl">
            { EN.map(letter => <li key={EN.indexOf(letter)} className="alphLi">{letter} { Distrib(letter) }</li>) }
        </ul>
          </>
    )
}
