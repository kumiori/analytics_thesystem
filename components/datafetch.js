import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

export function DataFetch({ uri }) {
    const [token, setToken] = useState([])
    // const uri = "https://ipfs.io/ipfs/bafybeihito7mzshh36mloxidpnpxck5xdauuuvzt4vahmzq5xtlbz3oofy/fakePunk10.json"
    useEffect(() => {
        axios.get(uri)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
    return (
        tokens.map(token => {
            { token.uri }
        })
    )
}
