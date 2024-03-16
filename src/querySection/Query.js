import { useState } from "react";
import QueryResponse from "./QueryResponse";

const Query = (props) => {
    const {filename} = props;

    const [query, setQuery] = useState("");

    const [queryList, setQueryList] = useState([]);

    const handleQuery = (e) => {
        //send query to Lord
        e.preventDefault();
        setQueryList([...queryList, query]);
        setQuery("");
    }
    

    return (
        <div style={{width:'80vw', overflow:"scroll"}}>
            <div className={"tw-bg-gray-400 tw-p-5"}>
                Querying {filename}
            </div>
            <div className={"tw-pl-4"}>
                {queryList.map((query, index) => {
                    return <QueryResponse key={index} query={query} response={query}/>
                })}
                
            </div>

            <div style={{height:"100%"}} className={"tw-flex tw-justify-center tw-flex-col-reverse"}>
                <form onSubmit={handleQuery} className={"tw-flex tw-justify-center"}>
                    <input style={{width:"800px"}} type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button style={{width:"30px"}} type="submit"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill="#007AD3"></path> <path d="M20 4L3 11L10 14L13 21L20 4Z" stroke="#007AD3" stroke-width="1.5" stroke-linejoin="round"></path> </g></svg></button>
                </form>
            </div>
        </div>
    )
}

export default Query;