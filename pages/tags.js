import Overview from '../components/overview'
// import CardTags from '../components/card'
import { getTokens, getMetadatas, getTransfers } from './api/getData';
import getMintsBurnsTransfers from "../utils/getMintsBurnsTransfers";
import Link from "next/link";
import Card from '../components/card'
import DataFetch from '../components/datafetch'

export async function getStaticProps() {
    var data = {};
    const me = await getMetadatas()
    const to = await getTokens()
    const tr = await getTransfers()
    data = { props: { metadatas: me, tokens: to, transfers: tr } }
    return data;
}


export default function Tags({ token, metadata }) {
    const data = getMintsBurnsTransfers(token.transfers)
    console.log(token.id)
    console.log(token)
    console.log(data)
    console.log(token.identifier)
    return (
        <Link href="/card/[token.identifier]" as={`/card/${token.identifier}`}>
            <div key={token.id} className="shadow-lg w-60 border max-w-sm mx-auto rounded-xl  p-2 bg-white  relative overflow-hidden">
                <p className="text-2xl text-black font-bold mb-1" >
                    Card {token.identifier}
                </p>
                <div className="mt-4" >
                    <p>
                        json: {token.uri}
                    </p>
                </div>
            </div>
        </Link>
    )
}


function Cards({ tokens, metadatas, transfers }) {
    var ourDate = new Date();
    var pastDate = ourDate.getDate() - 30;
    const filtereds = transfers.filter(transfer => transfer.timestamp > pastDate);
    console.log("filtereds:", filtereds);
    return (

        <div className="py-20 min-h-screen">
            <Overview transfers={transfers} tokens={tokens} />
            <div className="mt-4 w-11/12 mx-auto shadow-lg border rounded-xl p-4 bg-white relative overflow-hidden">
                <p className="px-2 py-2 text-gray-800 text-xl font-medium">
                    Collection
                </p>
                <div className="mt-4 grid grid-cols-1 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 ">
                    {tokens.map((token) => (
                        <div key={token.id}>
                            <Tags token={token} metadata={metadatas[token.identifier - 1]} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

