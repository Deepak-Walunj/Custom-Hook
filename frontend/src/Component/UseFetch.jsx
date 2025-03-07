import { useEffect, useState } from "react";

const UseFetch = (url) =>{
    const [data, setData] = useState()
    useEffect(() =>{
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error))
    },
    [url]
    );
    return data;
}

export default UseFetch;