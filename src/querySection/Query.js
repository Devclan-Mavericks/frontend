import { useState } from "react";
import QueryResponse from "./QueryResponse";
import toast from "react-hot-toast";
import Arrow from "../svg/Arrow";
import Circle from "../svg/Circle";

const Query = (props) => {
    const { filename } = props;

    const [query, setQuery] = useState("");
    const [queryList, setQueryList] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleQuery = async (e) => {
        //send query to backend
        e.preventDefault();

        const requestBody = new FormData();
        requestBody.append("filename", filename);
        requestBody.append("query", query);

        if (!query) {
            return toast.error("Send a valid query");
        }

        const backendUrl = "https://flask-end-vp25.onrender.com/query";
        try {
            setIsSubmitting(true);
            const response = await fetch(backendUrl, {
                method: "POST",
                body: requestBody
            })

            if (response.status !== 200) {
                return toast.error("Failed to process query");
            }

            const result = await response.json();
            console.log(result);
            setQueryList([...queryList, query]);
            setQuery("");
        } catch (error) {
            console.error("Problem submitting request: ", error);
            toast.error("Error submitting request");
        } finally {
            setIsSubmitting(false);
        }

    }


    return (
        <div style={{ maxHeight: "100vh", width: '80vw', overflow: "scroll" }}>
            <div style={{ borderBottomStyle: "solid", borderWidth: "2px", fontSize: "30px" }} className={"tw-p-5 tw-mx-3"}>
                {filename}
            </div>
            <div className={"tw-pl-4"}>
                {queryList.map((query, index) => {
                    return <QueryResponse key={index} query={query} response={query} />
                })}

            </div>

            <div style={{ height: "10%" }} className={"tw-flex tw-justify-center tw-flex-col-reverse"}>
                <form onSubmit={handleQuery} className={"tw-flex tw-justify-center"}>
                    <input style={{ width: "800px" }} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button style={{ width: "30px" }} type="submit">{isSubmitting ? <Circle /> : <Arrow />}</button>
                </form>
            </div>
        </div>
    )
}

export default Query;