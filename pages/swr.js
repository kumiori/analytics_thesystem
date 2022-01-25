import useSWR, { SWRConfig } from "swr";
import React from "react";
import { gql } from "@apollo/client";
import client from "../apollo-client.js";

const query = {
    query: gql`
      query Tokens {
        tokens {
          uri
        }    
      }
    `,
};

const getData = async (...args) => {
    // return await fetch(query);
    const { data } = await client.query(query);
    console.log('data:', data)
    const metadata = [];
    for (let i = 0; i < data.tokens.length; i++) {
        // console.log(data.tokens[i].uri)
        var response = await fetch(data.tokens[i].uri);
        var json = await response.json();
        metadata.push(json);
    }
    console.log('static')

    return metadata
};

export default function App() {
    const { data, error } = useSWR(query, getData)
    // console.log('static')
    console.log('error', error)
    console.log('data', data)
    if (error) {
        return <div>Error...</div>
    }
    if (!data) {
        return <div>Loading...</div>
    }
    return (
        <div className="min-h-screen  flex items-center justify-center">

            <a className="font-mono align-middle text-xl">THE SYSTEM</a>
            <pre>{ JSON.stringify(data, null, 3)}</pre>
        </div>
    )
}