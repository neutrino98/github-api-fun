import React, {useState} from 'react'
import FindRepository from '../components/FindRepository'
import { Query } from "react-apollo";
import {getRepoByNameAndAuthor} from '../api/repository'

export default function LandingPage() {
     const [name, setName] = useState("")
     const [owner, setOwner] = useState("")

     return(
        <div>
            <ul id="landing-page-container">
                <li>
                    <FindRepository
                        name={name}
                        onNameChange={name => setName(name)}
                        owner={owner}
                        onOwnerChange={owner => setOwner(owner)}
                        onSubmit={() => {}}
                    />
                </li>
                <li>2</li>
            </ul>
        </div>
    )
}