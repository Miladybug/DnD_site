import { useEffect, useState } from "react";


const useFetchInfo = (type, index) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch(`https://www.dnd5eapi.co/api/${type}/${index}`);
            
            if (!response.ok) {
                console.log("ERROR")
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();
            const keys = Object.keys(responseData);
            const newObject = {...info};
            keys.forEach(key => {
                newObject[key] = responseData[key]
            })
            setInfo(newObject);
        }

        fetchInfo();
    })

    return info;
}

export default useFetchInfo;