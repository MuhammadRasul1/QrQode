import { useEffect, useState } from "react";
import request from "../services/httpRequest";


export function useRequest(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        request.get(url).then(data => setData(data.data))
    }, [url])

    return{
        data
    }
}